// Status: 'done' | 'active' | 'open'
// Targets in the order the rover has to reach them: 'red' | 'green' | 'blue'
export const challenges = [
    {
        id: 'challenge-1',
        title: 'Ein Zeichen, ein Ziel',
        description: 'Der Rover startet erst auf die Geste „Pommesgabel“, sucht dann die grüne Kugel und hält davor an.',
        targets: ['green'],
        status: 'active',
    },
    {
        id: 'challenge-2',
        title: '1, 2, 3, los',
        description: 'Startsignal sind die Zählgesten 1, 2 und 3 in genau dieser Reihenfolge. Danach fährt er rot und blau an.',
        targets: ['red', 'blue'],
        status: 'open',
    },
    {
        id: 'challenge-3',
        title: 'Code geknackt',
        description: 'Ein gewürfelter Code wird handschriftlich gezeigt. Nur der richtige startet den Rover, dann geht es zu allen drei Kugeln.',
        targets: ['red', 'green', 'blue'],
        status: 'open',
    },
]