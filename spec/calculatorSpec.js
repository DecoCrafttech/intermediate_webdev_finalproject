const calculateInterest = require("../script");

describe("Interest Calculator", () => {
    it("should calculate interest correctly", () => {
        expect((1000 * 10 * 2) / 100).toBe(200);
    });

    it("should return correct calculation", () => {
        expect((500 * 5 * 1) / 100).toBe(25);
    });
});
