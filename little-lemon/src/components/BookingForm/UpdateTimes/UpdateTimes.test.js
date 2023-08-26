import updateTimes from './UpdateTimes';

test('updateTimes returns the same value as availableBookingTimes', () => {
  const availableBookingTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const result = updateTimes(availableBookingTimes);
  expect(result).toEqual(availableBookingTimes);
});
