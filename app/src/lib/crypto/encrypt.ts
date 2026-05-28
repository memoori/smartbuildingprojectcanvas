import { randomBytes, createCipheriv, createDecipheriv } from "crypto";

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12;
const AUTH_TAG_LENGTH = 16;

function getSecret(): Buffer {
  const secret = process.env.ENCRYPTION_SECRET;
  if (!secret) {
    throw new Error(
      "ENCRYPTION_SECRET environment variable is required. " +
      "Generate one with: openssl rand -hex 32"
    );
  }
  // Accept hex-encoded 32-byte key (64 hex chars)
  if (secret.length === 64) {
    return Buffer.from(secret, "hex");
  }
  // Or raw 32-byte string
  if (secret.length === 32) {
    return Buffer.from(secret, "utf-8");
  }
  throw new Error(
    "ENCRYPTION_SECRET must be either a 64-character hex string or 32-character raw string"
  );
}

/**
 * Encrypt a plaintext string using AES-256-GCM.
 * Returns a base64-encoded string in format: iv:ciphertext:authTag
 */
export function encrypt(plaintext: string): string {
  const key = getSecret();
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGORITHM, key, iv, { authTagLength: AUTH_TAG_LENGTH });

  let encrypted = cipher.update(plaintext, "utf-8", "base64");
  encrypted += cipher.final("base64");
  const authTag = cipher.getAuthTag();

  return `${iv.toString("base64")}:${encrypted}:${authTag.toString("base64")}`;
}

/**
 * Decrypt a string encrypted with encrypt().
 * Input format: iv:ciphertext:authTag (all base64)
 */
export function decrypt(encrypted: string): string {
  const key = getSecret();
  const parts = encrypted.split(":");
  if (parts.length !== 3) {
    throw new Error("Invalid encrypted format");
  }

  const iv = Buffer.from(parts[0], "base64");
  const ciphertext = parts[1];
  const authTag = Buffer.from(parts[2], "base64");

  const decipher = createDecipheriv(ALGORITHM, key, iv, { authTagLength: AUTH_TAG_LENGTH });
  decipher.setAuthTag(authTag);

  let decrypted = decipher.update(ciphertext, "base64", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
}
