import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const repoRoot = path.resolve(import.meta.dirname, "..", "..");
const outFile = path.resolve(import.meta.dirname, "..", "src", "data", "pranks.json");

const dirs = fs
  .readdirSync(repoRoot, { withFileTypes: true })
  .filter(
    (d) =>
      d.isDirectory() &&
      !d.name.startsWith(".") &&
      d.name !== "website" &&
      d.name !== "node_modules",
  );

const pranks = [];

for (const dir of dirs) {
  const yamlPath = path.join(repoRoot, dir.name, "prank.yaml");
  const claudeMdPath = path.join(repoRoot, dir.name, "CLAUDE.md");

  if (!fs.existsSync(yamlPath)) continue;

  const data = yaml.load(fs.readFileSync(yamlPath, "utf-8"));
  const claudeMd = fs.existsSync(claudeMdPath)
    ? fs.readFileSync(claudeMdPath, "utf-8")
    : "";

  pranks.push({ ...data, claudeMd });
}

pranks.sort((a, b) => b.chaos - a.chaos);

if (pranks.length === 0) {
  if (fs.existsSync(outFile)) {
    console.log(`No prank folders found — keeping existing pranks.json`);
  } else {
    console.warn(`No prank folders found and no existing pranks.json — build will have no pranks`);
  }
} else {
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(pranks, null, 2));
  console.log(`Collected ${pranks.length} pranks into src/data/pranks.json`);
}
