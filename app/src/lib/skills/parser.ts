import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface SkillFrontmatter {
  id: string;
  title: string;
  category: string;
  tags?: string[];
  building_types?: string[];
  outcomes?: string[];
  standards?: string[];
  canvas_sections?: number[];
  last_updated: string;
  version?: string;
}

export interface Skill {
  frontmatter: SkillFrontmatter;
  content: string;
  filePath: string;
}

const SKILLS_DIR = path.resolve(process.cwd(), "..", "skills");

/**
 * Parse a single skill markdown file
 */
export function parseSkillFile(filePath: string): Skill {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as SkillFrontmatter,
    content: content.trim(),
    filePath,
  };
}

/**
 * Load all skills from a directory (recursive)
 */
export function loadSkillsFromDir(dir: string): Skill[] {
  const skills: Skill[] = [];
  if (!fs.existsSync(dir)) return skills;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      skills.push(...loadSkillsFromDir(fullPath));
    } else if (entry.name.endsWith(".md") && entry.name !== "README.md") {
      try {
        skills.push(parseSkillFile(fullPath));
      } catch {
        console.warn(`Failed to parse skill: ${fullPath}`);
      }
    }
  }
  return skills;
}

/**
 * Load all skills organized by category
 */
export function loadAllSkills() {
  return {
    technologies: loadSkillsFromDir(path.join(SKILLS_DIR, "technologies")),
    buildingTypes: loadSkillsFromDir(path.join(SKILLS_DIR, "building-types")),
    outcomes: loadSkillsFromDir(path.join(SKILLS_DIR, "outcomes")),
    standards: loadSkillsFromDir(path.join(SKILLS_DIR, "standards")),
    crossCutting: loadSkillsFromDir(path.join(SKILLS_DIR, "cross-cutting")),
    templates: loadSkillsFromDir(path.join(SKILLS_DIR, "templates")),
  };
}

/**
 * Find a specific skill by ID across all categories
 */
export function findSkillById(id: string): Skill | undefined {
  const all = loadAllSkills();
  const flat = [
    ...all.technologies,
    ...all.buildingTypes,
    ...all.outcomes,
    ...all.standards,
    ...all.crossCutting,
    ...all.templates,
  ];
  return flat.find((s) => s.frontmatter.id === id);
}

/**
 * Find skills relevant to a project configuration
 */
export function findRelevantSkills(config: {
  buildingType: string;
  outcomeIds: string[];
  technologyIds: string[];
}): Skill[] {
  const all = loadAllSkills();
  const relevant: Skill[] = [];

  // Building type skill
  const buildingTypeSkill = all.buildingTypes.find(
    (s) => s.frontmatter.id === config.buildingType
  );
  if (buildingTypeSkill) relevant.push(buildingTypeSkill);

  // Technology skills (both _index and rfi-guidance)
  for (const techId of config.technologyIds) {
    const techSkills = all.technologies.filter(
      (s) =>
        s.frontmatter.id === techId ||
        s.frontmatter.id === `${techId}-rfi-guidance`
    );
    relevant.push(...techSkills);
  }

  // Outcome skills
  for (const outcomeId of config.outcomeIds) {
    const outcomeSkill = all.outcomes.find(
      (s) => s.frontmatter.id === outcomeId
    );
    if (outcomeSkill) relevant.push(outcomeSkill);
  }

  // Cross-cutting (always include MSI role and market stats)
  relevant.push(...all.crossCutting);

  // Standards referenced by selected technologies
  const referencedStandards = new Set<string>();
  for (const skill of relevant) {
    if (skill.frontmatter.standards) {
      skill.frontmatter.standards.forEach((s) => referencedStandards.add(s));
    }
  }
  for (const stdId of referencedStandards) {
    const stdSkill = all.standards.find((s) => s.frontmatter.id === stdId);
    if (stdSkill) relevant.push(stdSkill);
  }

  return relevant;
}
