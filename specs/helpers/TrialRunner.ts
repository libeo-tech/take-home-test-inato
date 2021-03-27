import { Drug, TrialService } from "../../src";
import { MemoryDrugStore } from "./MemoryDrugStore";
import { ResolveStatesOutputTransport } from "./ResolveStatesOutputTransport";
import { TrialRunResult } from "./TrialRunResult";

export class TrialRunner {
  private drugs: Drug[] = [];

  public static newInstance(): TrialRunner {
    return new TrialRunner();
  }

  public withDrugs(drugs: Drug[]): this {
    this.drugs = drugs;

    return this;
  }

  public run(): TrialRunResult {
    const service = new TrialService(
      new MemoryDrugStore(this.drugs),
      new ResolveStatesOutputTransport()
    );

    return new TrialRunResult(service.run());
  }
}
