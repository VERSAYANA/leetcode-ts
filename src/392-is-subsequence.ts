function isSubsequence(s: string, t: string): boolean {
  for (let i = 0; i < s.length; ) {
    for (let j = 0; j <= t.length; j++) {
      if (s[i] === t[j]) {
        i += 1;
        continue;
      }
      if (j >= t.length) {
        return false;
      }
    }
  }
  return true;
}
