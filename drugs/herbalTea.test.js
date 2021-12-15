import { HerbalTea } from "./herbalTea";

describe("HerbalTea", () => {
  describe("when not expired", () => {
    const herbalTea = new HerbalTea(5, 10)

    it("should descrease expiresIn", () => {
      herbalTea.decreaseExpiresIn()
      expect(herbalTea.expiresIn).toBe(4)
      expect(herbalTea.benefit).toBe(11)
    })
  })

  describe("when expired", () => {
    const herbalTea = new HerbalTea(-1, 10)

    it("should descrease expiresIn", () => {
      herbalTea.decreaseExpiresIn()
      expect(herbalTea.expiresIn).toBe(-2)
      expect(herbalTea.benefit).toBe(12)
    })

  })

  describe("when benefit is already reached max", () => {
    const herbalTea = new HerbalTea(-1, 50)

    it("should descrease expiresIn", () => {
      herbalTea.decreaseExpiresIn()
      expect(herbalTea.expiresIn).toBe(-2)
      expect(herbalTea.benefit).toBe(50)
    })
  })
})
