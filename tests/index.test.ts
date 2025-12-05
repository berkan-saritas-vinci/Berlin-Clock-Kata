import BerlinOclock from "../type";

describe('berlin-clock', () => {
    describe('simpleMinute ', () => {
        it("when given 00:00:00 should return all light off", () => {
            const berlinClock = new BerlinOclock();
            
            const actual = berlinClock.convertMinuteLineOne("00:00:00");
            
            expect(actual).toBe("XXXX");
        });
    });
});