import { Pharmacy } from "../pharmacy";
import makeLog from "../services/makeLog";
import { Drug } from "../Drug";

describe("test classes", () => {
  test("if Pharmacy return an empty array if passing nothing", () => {
    const p = new Pharmacy();
    expect(p.drugs).toEqual([]);
  });
  test("if getLogs return a array", () => {
    const drugs = [
      new Drug("Doliprane", 20, 30),
      new Drug("Herbal Tea", 10, 5)
    ];
    const trial = new Pharmacy(drugs);
    expect(makeLog(trial, 3)).toBe("[{\"name\":\"Doliprane\",\"expiresIn\":19,\"benefit\":29},{\"name\":\"Herbal Tea\",\"expiresIn\":9,\"benefit\":6}],[{\"name\":\"Doliprane\",\"expiresIn\":18,\"benefit\":28},{\"name\":\"Herbal Tea\",\"expiresIn\":8,\"benefit\":7}],[{\"name\":\"Doliprane\",\"expiresIn\":17,\"benefit\":27},{\"name\":\"Herbal Tea\",\"expiresIn\":7,\"benefit\":8}]")
  });
});
