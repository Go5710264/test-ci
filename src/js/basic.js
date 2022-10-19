export default function attackResult(characterParameters) {
    const attack = 25;
    let result;

    Object.entries(characterParameters).forEach(([characteristic, value]) => {
        if (characteristic === 'health') {
            characterParameters.health = value - attack;
            if (characterParameters.health < 15) {
                result = 'critical';
            } else if (characterParameters.health <= 50) {
                result = 'wounded';
            } else {
                result = 'healthy';
            }
        }
    })

    return result;
}


export function matchers(groupMembers) {
    function sortedByHealth(hp) {
        return (a,b) => a[hp] < b[hp] ? 1 : -1;
    }

    return groupMembers.sort(sortedByHealth('health'));
}
