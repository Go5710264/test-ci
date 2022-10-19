export default function attackResult(characterParameters) {
  const attack = 25;
  let result;

  Object.entries(characterParameters).forEach(([characteristic, value]) => {
    if (characteristic === 'health') {
      const characterHealth = value - attack;
      // characterParameters.health = value - attack;
      if (characterHealth < 15) {
        result = 'critical';
      } else if (characterHealth <= 50) {
        result = 'wounded';
      } else {
        result = 'healthy';
      }
    }
  });

  return result;
}

export function matchers(groupMembers) {
  function sortedByHealth(hp) {
    return (a, b) => (a[hp] < b[hp] ? 1 : -1);
  }

  return groupMembers.sort(sortedByHealth('health'));
}
