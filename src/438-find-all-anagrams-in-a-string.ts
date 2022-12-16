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
    const characterFrequency = characterFrequencyMap.get(character);
    if (characterFrequency) {
      characterFrequencyMap.set(character, characterFrequency + 1);
    } else {
      characterFrequencyMap.set(character, 1);
    }
  }

  return characterFrequencyMap;
}

function updateCharacterFrequencyMap(
  characterFrequencyMap: Map<string, number>,
  oldCharacter: string,
  newCharacter: string
): Map<string, number> {
  characterFrequencyMap.set(oldCharacter, characterFrequencyMap.get(oldCharacter)! - 1);
  const newCharacterFrequency = characterFrequencyMap.get(newCharacter);
  if (newCharacterFrequency) {
    characterFrequencyMap.set(newCharacter, newCharacterFrequency + 1);
  } else {
    characterFrequencyMap.set(newCharacter, 1);
  }
  return characterFrequencyMap;
}
const s = 'cbaebabacd';
const p = 'abc';
const r = findAnagrams(s, p);
console.log(r);
