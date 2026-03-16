import pranksData from "../data/pranks.json";

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
  return (pranksData as any[]).map((data) => ({
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
    claudeMd: data.claudeMd || "",
  }));
}

export function loadPrank(id: string): Prank | undefined {
  return loadPranks().find((p) => p.id === id);
}
