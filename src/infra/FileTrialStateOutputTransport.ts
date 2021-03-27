import { promises } from "fs";
import { PharmacyDrugState, TrialStateOutputTransport } from "../domain";

export class FileTrialStateOutputTransport
  implements TrialStateOutputTransport {
  constructor(private readonly filePath: string) {}

  public output(states: PharmacyDrugState[][]): Promise<void> {
    return promises.writeFile(
      this.filePath,
      FileTrialStateOutputTransport.serializeStates(states)
    );
  }

  private static serializeStates(states: PharmacyDrugState[][]): string {
    return states.map((state) => JSON.stringify(state)).join(",");
  }
}
