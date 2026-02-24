import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

export interface ConversationTurn {
  role: "user" | "assistant";
  turn?: number;
  label?: string;
  content: string;
  annotation?: string;
}

export interface Prank {
  id: string;
  name: string;
  tagline: string;
  description: string;
  subtlety: number;
  chaos: number;
  detection: number;
  tags: string[];
  why: string;
  conversation: ConversationTurn[];
  claudeMd: string;
}

const pranksDir = path.resolve(
  import.meta.dirname,
  "..",
  "..",
  "..",
);

// Normalize conversation data from different YAML formats
// Format A: conversation: [{role, content, turn, label}]
// Format B: conversation: {scenario, turns: [{role, text}]}
function normalizeConversation(raw: any): ConversationTurn[] {
  if (Array.isArray(raw)) {
    return raw.map((t: any) => ({
      role: t.role,
      turn: t.turn,
      label: t.label,
      content: t.content || t.text || "",
      annotation: t.annotation,
    }));
  }
  if (raw && Array.isArray(raw.turns)) {
    return raw.turns.map((t: any) => ({
      role: t.role,
      turn: t.turn,
      label: t.label,
      content: t.content || t.text || "",
      annotation: t.annotation,
    }));
  }
  return [];
}

export function loadPranks(): Prank[] {
  const dirs = fs
    .readdirSync(pranksDir, { withFileTypes: true })
    .filter(
      (d) =>
        d.isDirectory() &&
        !d.name.startsWith(".") &&
        d.name !== "website" &&
        d.name !== "node_modules",
    );

  const pranks: Prank[] = [];

  for (const dir of dirs) {
    const yamlPath = path.join(pranksDir, dir.name, "prank.yaml");
    const claudeMdPath = path.join(pranksDir, dir.name, "CLAUDE.md");

    if (!fs.existsSync(yamlPath)) continue;

    const data = yaml.load(fs.readFileSync(yamlPath, "utf-8")) as any;
    const claudeMd = fs.existsSync(claudeMdPath)
      ? fs.readFileSync(claudeMdPath, "utf-8")
      : "";

    pranks.push({
      id: data.id,
      name: data.name,
      tagline: data.tagline,
      description: data.description,
      subtlety: data.subtlety,
      chaos: data.chaos,
      detection: data.detection,
      tags: data.tags || [],
      why: data.why || "",
      conversation: normalizeConversation(data.conversation),
      claudeMd,
    });
  }

  return pranks.sort((a, b) => b.chaos - a.chaos);
}

export function loadPrank(id: string): Prank | undefined {
  return loadPranks().find((p) => p.id === id);
}
