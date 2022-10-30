import {getPersents} from "./example.js";

describe ("testingForExample", () => {
    it ("testing for using number", () => {
        const result = getPersents(40, 400);
        expect(result).toBe(160);
    }),
    it ("testing for using zero", () => {
        const result = getPersents(0, 400);
        expect(result).toBe(0);
    })
});