import { S3Client } from "@aws-sdk/client-s3";
import resolvewithplus from "resolvewithplus";

console.log("imported:", S3Client);
console.log();
console.log("import.meta.resolve:", import.meta.resolve("@aws-sdk/client-s3"));
console.log();
console.log(
  "resolvewithplus:",
  resolvewithplus("@aws-sdk/client-s3", import.meta.url)
);
