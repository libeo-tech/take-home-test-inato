import { promises } from "fs";
import { PharmacyDrugState, PharmacyDrugStateOutputTransport } from "../domain";

export class FileStatesOutputTransport
  implements PharmacyDrugStateOutputTransport {
  constructor(private readonly filePath: string) {}

  public output(states: PharmacyDrugState[][]): Promise<void> {
    return promises.writeFile(
      this.filePath,
      FileStatesOutputTransport.serializeStates(states)
    );
  }

  private static serializeStates(states: PharmacyDrugState[][]): string {
    return states.map((state) => JSON.stringify(state)).join(",");
  }
}
