import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";

export type AIProvider = "openai" | "anthropic";

export function getLanguageModel(provider: AIProvider, apiKey: string, model?: string) {
  switch (provider) {
    case "openai": {
      const openai = createOpenAI({ apiKey });
      return openai(model || "gpt-4o");
    }
    case "anthropic": {
      const anthropic = createAnthropic({ apiKey });
      return anthropic(model || "claude-sonnet-4-20250514");
    }
    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }
}

export const SUPPORTED_MODELS: Record<AIProvider, { id: string; name: string }[]> = {
  openai: [
    { id: "gpt-4o", name: "GPT-4o" },
    { id: "gpt-4o-mini", name: "GPT-4o Mini" },
    { id: "gpt-4.1", name: "GPT-4.1" },
    { id: "gpt-4.1-mini", name: "GPT-4.1 Mini" },
  ],
  anthropic: [
    { id: "claude-sonnet-4-20250514", name: "Claude Sonnet 4" },
    { id: "claude-opus-4-20250514", name: "Claude Opus 4" },
    { id: "claude-haiku-4-20250414", name: "Claude Haiku 4" },
  ],
};
