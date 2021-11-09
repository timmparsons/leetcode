const TwoSum = require('./TwoSum');

test('expect the answer to be [0,1]', () => {
  expect(TwoSum([ 2, 7, 11, 15 ], 9)).toEqual([ 0, 1 ])
})

test('expect the answer to be [1,2]', () => {
  expect(TwoSum([ 3, 2, 4 ], 6)).toEqual([ 1, 2 ])
})