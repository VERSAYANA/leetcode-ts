function isIsomorphic(s: string, t: string): boolean {
  const map = new Map<string, string>();
  let str = '';
  const set = new Set<string>();
  for (let i = 0; i < s.length; i++) {
    const r = map.get(s[i]);
    if (r === undefined) {
      if (set.has(t[i])) {
        return false;
      }
      set.add(t[i]);
      map.set(s[i], t[i]);
      str += t[i];
    } else {
      str += r;
    }
  }

  return str === t;
}
