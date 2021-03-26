import { promises } from "fs";

export class FileStatesOutputTransfort {
  constructor(filePath) {
    this.filepath = filePath;
  }

  output(states) {
    return promises.writeFile(this.filepath, serializeStates(states));
  }
}

function serializeStates(states) {
  return states.map(JSON.stringify).join(",");
}
