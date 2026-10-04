// Goals from tasks A and B that go beyond the three challenges
export const planGroups = [
    {
        id: 'rover',
        label: 'Rover & KI',
        symbol: '</>',
        items: [
            {
                label: 'modell',
                text: 'Ein selbst trainiertes Modell für handgeschriebene Ziffern. Getestet mit eigenen Kameraaufnahmen, die es im Training nie gesehen hat.',
            },
            {
                label: 'steuerung',
                text: 'Start, Suche, Anfahrt, Stopp und Fehlerfälle als klar definierte Zustände.',
            },
            {
                label: 'sicherheit',
                text: 'Begrenztes Tempo, Not-Aus und ein sicherer Halt, wenn Kamera oder Verbindung ausfallen.',
            },
            {
                label: 'ohne fremde ki',
                text: 'Die Erkennung läuft auf dem Rover oder unserem eigenen Server, nicht über öffentliche KI-Dienste.',
            },
            {
                label: 'herkunft',
                text: 'Offengelegt, was selbst gebaut, angepasst oder übernommen ist, mit Quellen und Lizenzen.',
            },
        ],
    },
    {
        id: 'infrastructure',
        label: 'Infrastruktur',
        symbol: '>_',
        items: [
            {
                label: 'zusammenarbeit',
                text: 'Dateiablage, Videokonferenz, Protokolle, Versionsverwaltung und Aufgabenboard für das ganze Team.',
            },
            {
                label: 'zugänge',
                text: 'Persönliche Konten, klare Rechte, besonders geschützte Admin-Zugänge und verschlüsselte Verbindungen.',
            },
            {
                label: 'netzwerk',
                text: 'Abgesicherter Zugriff von allen Standorten und aus dem Homeoffice.',
            },
            {
                label: 'backup',
                text: 'Maximal ein Arbeitstag Datenverlust, Wiederherstellung in höchstens zwei Stunden. Getestet, nicht nur geplant.',
            },
            {
                label: 'betrieb',
                text: 'Monitoring, Runbooks und eine Übergabe, mit der andere weitermachen können.',
            },
        ],
    },
]