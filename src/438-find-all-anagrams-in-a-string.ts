function findAnagrams(s: string, p: string): number[] {
  const pCharacterFrequncyMap = createCharacterFrequencyMap(p);
  let subStrCharacterFrequncyMap = createCharacterFrequencyMap(s.substring(0, p.length));
  const result: number[] = [];

  if (isAnagram(subStrCharacterFrequncyMap, pCharacterFrequncyMap)) {
    result.push(0);
  }

  for (let i = 1; i <= s.length - p.length; i++) {
    subStrCharacterFrequncyMap = updateCharacterFrequencyMap(
      subStrCharacterFrequncyMap,
      s[i - 1],
      s[i + p.length - 1]
    );
    if (isAnagram(subStrCharacterFrequncyMap, pCharacterFrequncyMap)) {
      result.push(i);
    }
  }

  return result;
}

function isAnagram(
  characterFrequencyMap1: Map<string, number>,
  characterFrequncyMap2: Map<string, number>
): boolean {
  for (const [character, frequency] of characterFrequencyMap1) {
    if (characterFrequncyMap2.get(character) !== frequency && frequency !== 0) return false;
  }

  return true;
}

function createCharacterFrequencyMap(str: string): Map<string, number> {
  const characterFrequencyMap = new Map<string, number>();
  for (const character of str) {
    characterFrequencyMap.set(character, (characterFrequencyMap.get(character) || 0) + 1);
  }

  return characterFrequencyMap;
}

function updateCharacterFrequencyMap(
  characterFrequencyMap: Map<string, number>,
  oldCharacter: string,
  newCharacter: string
): Map<string, number> {
  characterFrequencyMap.set(oldCharacter, characterFrequencyMap.get(oldCharacter)! - 1);
  characterFrequencyMap.set(newCharacter, (characterFrequencyMap.get(newCharacter) || 0) + 1);

  return characterFrequencyMap;
}
