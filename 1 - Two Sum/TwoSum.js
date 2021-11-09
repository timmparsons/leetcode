

const TwoSum = (nums, target) => {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let value = nums[ i ];
    let complement = target - value;

    if (map[complement] !== undefined) {
      return [ map[ complement ], i ]
    } else {
      map[ value ] = i;
    }
  }
}

module.exports = TwoSum;