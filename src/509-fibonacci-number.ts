function fib(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let n1 = 0;
  let n2 = 1;

  for (let i = 2; i <= n; i++) {
    const temp = n2;
    n2 = n1 + n2;
    n1 = temp;
  }

  return n2;
}

function fib2(n: number): number {
  if (n === 0) return 0;
  let n1 = 0;
  let n2 = 1;

  for (let i = 2; i <= n; i++) {
    const temp = n1 + n2;
    [n1, n2] = [n2, temp];
  }

  return n2;
}

function fib3(n: number): number {
  if (n === 0) return 0;
  let n1 = 0;
  let n2 = 1;

  for (let i = 2; i <= n; i++) {
    [n1, n2] = [n2, n1 + n2];
  }

  return n2;
}
