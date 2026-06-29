import * as core from "@actions/core";
import { synchronizeBranches } from "./synchronize.js";

async function main() {
  try {
    const path = core.getInput("path", { required: true });
    await synchronizeBranches(path);
  } catch (e) {
    core.setFailed(e.message);
  }
}

main();
