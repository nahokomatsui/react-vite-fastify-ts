import { pong } from "~/services/ping.service";

describe("pingService", () => {
  describe("pong", () => {
    test("succeeds", () => {
      expect(pong()).toBe("pong!");
    });
  });
});
