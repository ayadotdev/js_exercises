const reverse = integer =>
  parseInt(
    integer
      .toString()
      .split("")
      .reverse()
      .join("")
  ) * Math.sign(integer);

  assert.equal(reverse(1234), 4321);