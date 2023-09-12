import resolvewithplus from "resolvewithplus";
import { fileURLToPath } from "node:url";

console.log("import.meta.resolve:", import.meta.resolve("resolvewithplus"));
console.log();
console.log(
  "resolvewithplus #1:",
  resolvewithplus("resolvewithplus", import.meta.url)
);
console.log();
console.log(
  "resolvewithplus #2:",
  resolvewithplus("resolvewithplus", fileURLToPath(import.meta.url))
);
