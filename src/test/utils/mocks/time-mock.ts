export function mockDateNow(timestamp: number) {
  jest.spyOn(global.Date, "now").mockImplementation(() => timestamp);
}
