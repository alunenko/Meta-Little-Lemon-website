import initializeTimes from './BookingTimes';

describe('initializeTimes function', () => {
  it('should return an array of available booking times', () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ];

    const times = initializeTimes();

    expect(times).toEqual(expectedTimes);
  });
});
