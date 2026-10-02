// Status: 'done' | 'active' | 'open'
// Targets in the order the rover has to reach them: 'red' | 'green' | 'blue'
export const challenges = [
    {
        id: 'challenge-1',
        title: 'Ein Zeichen, ein Ziel',
        description: 'Pommesgabel zeigen, dann geht’s los: grüne Kugel suchen, hinfahren und rechtzeitig bremsen.',
        targets: ['green'],
        status: 'active',
    },
    {
        id: 'challenge-2',
        title: '1, 2, 3, los',
        description: 'Drei Zählgesten in zehn Sekunden, richtige Reihenfolge. Erst Rot, dann Blau.',
        targets: ['red', 'blue'],
        status: 'open',
    },
    {
        id: 'challenge-3',
        title: 'Code geknackt',
        description: 'Ein gewürfelter Code, von Hand geschrieben.\nFalsch? Stillstand. Richtig? Rot, Grün, Blau.',
        targets: ['red', 'green', 'blue'],
        status: 'open',
    },
]