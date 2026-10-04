// Status: 'done' | 'active' | 'open'
// Targets in the order the rover has to reach them
export const challenges = [
    {
        id: 'challenge-1',
        title: 'Ein Zeichen, ein Ziel',
        description: 'Startsignal: die Pommesgabel. Zeige- und kleiner Finger hoch, Handfläche zur Kamera. Dann rollt er zur grünen Kugel. Peace-Zeichen? Schöne Geste. Bewegt ihn aber nicht.',
        targets: ['green'],
        status: 'active',
    },
    {
        id: 'challenge-2',
        title: '1, 2, 3, los',
        description: 'Startsignal: Fingerzählen, aber bitte der Reihe nach. Eins, zwei, drei in zehn Sekunden. Als Belohnung erst Rot, danach Blau. Gleich drei auf einmal? Netter Versuch. Zurück auf Anfang.',
        targets: ['red', 'blue'],
        status: 'open',
    },
    {
        id: 'challenge-3',
        title: 'Code geknackt',
        description: 'Startsignal: ein Zahlencode, dreimal gewürfelt und von Hand aufs Papier gebracht. Der Rover liest per Kamera mit. Richtig? Rot, Grün, Blau. Falsch oder leeres Blatt? Keinen Millimeter.',
        targets: ['red', 'green', 'blue'],
        status: 'open',
    },
]