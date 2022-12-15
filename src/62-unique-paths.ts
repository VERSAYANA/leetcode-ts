function uniquePaths(m: number, n: number): number {
  return factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1));
}

function factorial(num: number): number {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

function uniquePaths2(m: number, n: number): number {
  const factorial = [1, 1];
  for (let i = 2; i <= m + n - 2; i++) {
    factorial[i] = i * factorial[i - 1];
  }
  return factorial[m + n - 2] / (factorial[m - 1] * factorial[n - 1]);
}

function uniquePaths3(m: number, n: number): number {
  const smallerSide = Math.min(m, n);
  const biggerSide = Math.max(m, n);

  let denominator1 = 1;
  for (let i = 1; i <= smallerSide - 1; i++) {
    denominator1 *= i;
  }

  let denominator2 = denominator1;
  for (let i = smallerSide; i <= biggerSide - 1; i++) {
    denominator2 *= i;
  }

  let numerator = denominator2;
  for (let i = biggerSide; i <= m + n - 2; i++) {
    numerator *= i;
  }

  return numerator / (denominator1 * denominator2);
}
