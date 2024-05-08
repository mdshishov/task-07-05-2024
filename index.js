const getGcd = (a, b) => {
  for (let i = Math.min(a, b); i >= 1; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
};

const makeRational = (numer, denom) => {
  const gcd = getGcd(Math.abs(numer), denom);
  const normalNumer = numer / gcd;
  const normalDenom = denom / gcd;

  return {
    numer: normalNumer,
    denom: normalDenom,
  };
};

const getNumer = (rational) => rational.numer;

const getDenom = (rational) => rational.denom;
