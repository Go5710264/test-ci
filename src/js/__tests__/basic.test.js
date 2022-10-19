import attackResult, { matchers } from '../basic.js';

test('receiving damage', () => {
    const healer = attackResult({name: 'Целитель', health: 50});

    expect(healer).toBe('wounded');
});

test('receiving critical damage', () => {
    const woundedArcher = attackResult({name: 'Раненный лучник', health: 30});

    expect(woundedArcher).toBe('critical');
});

test('light blow', () => {
    const destroyer = attackResult({name: 'Разрушитель', health: 100});

    expect(destroyer).toBe('healthy');
});

test('health ranking', () => {
    const party = matchers([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ]);

    expect(party).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ]);
});
