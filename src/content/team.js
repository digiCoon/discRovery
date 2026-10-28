// Display order: as listed here (women first, then by last name)
export const departments = [
    {
        id: 'ae',
        label: 'Anwendungsentwicklung',
        symbol: '</>',
        members: [
            {
                id: 'kseniia-k',
                name: 'Kseniia K.',
                tasks: 'Klassen der Rover-Software definiert und am Klassendiagramm mitgearbeitet. Basisklasse und Challenges entwickelt, Konzept für Dateischnittstelle und Logging, Tests für Challenges sowie Gesten- und Ziffernerkennung. Dazu Projektdokumentation im Wiki.',
                links: [],
            },
            {
                id: 'jessica-r',
                name: 'Jessica R.',
                tasks: 'Öffentlichkeitsarbeit: Webseite samt Logbuch und Spiel ROVV-Y, Social Media, Wiki-Doku im Corporate Design. Projektplanung mit Strukturplan und Aufgabenboard. In der Software Kamera-, Audio- und Not-Stopp-Klasse samt Tests sowie Aufräumen des Git-Repositorys mit Anleitungen fürs Team.',
                links: [
                    { label: 'portfolio', url: 'https://digicoon.de' },
                    { label: 'github', url: 'https://github.com/digiCoon' },
                ],
            },
            {
                id: 'niklas-b',
                name: 'Niklas B.',
                tasks: 'Kugelerkennung samt Farbkalibrierung entwickelt und die Kamera für eine genaue Entfernungsmessung kalibriert. Dazu Ablaufplanung der ersten Teilaufgabe und Mitarbeit am Klassendiagramm.',
                links: [],
            },
            {
                id: 'vahit-e',
                name: 'Vahit E.',
                tasks: 'Aktivitäts- und Klassendiagramm für Challenge 3 samt Dokumentation. Rover-Ansteuerung mit Geschwindigkeitssteuerung umgesetzt und im Notebook getestet, der Test am Rover steht noch aus.',
                links: [],
            },
            {
                id: 'alexander-m',
                name: 'Alexander M.',
                tasks: 'Konfiguration der Rover-Software umgesetzt, dokumentiert und mit einheitlichem Testframework bis zum Integrationstest geprüft. Dazu Aktivitätsdiagramm für Challenge 2 und Mitarbeit am Klassendiagramm.',
                links: [],
            },
            {
                id: 'christopher-w',
                name: 'Christopher W.',
                tasks: 'DevOps fürs Team: Entwicklungs-Workflow von der Test-VM bis zur CI-Pipeline, dazu Testkonzept und Sicherheitsanalyse des Repositorys. Am Rover Ablaufsteuerung, KI-Bibliothek und Tests von Gesten- und Kugelerkennung bis zur stabilen Erkennung.',
                links: [],
            },
        ],
    },
    {
        id: 'si',
        label: 'Systemintegration',
        symbol: '>_',
        members: [
            {
                id: 'kaan-b',
                name: 'Kaan B.',
                tasks: 'Einrichtung unseres X-Kanals und erste Beiträge.',
                links: [],
            },
            {
                id: 'vincent-k',
                name: 'Vincent K.',
                tasks: 'Firewall, Core-Server und VPN samt Support, Koordination der Infrastruktur und Bereitstellung von Team-Chat und Pipeline-Runner. Absicherung der Betriebsfähigkeit im Projektraum, Hilfe bei den Rover-Tests sowie Dokumentation und Vortrag.',
                links: [],
            },
            {
                id: 'felix-k',
                name: 'Felix K.',
                tasks: 'Aufbau des Backup-Servers, damit im Ernstfall nichts verloren geht.',
                links: [],
            },
            {
                id: 'andrii-m',
                name: 'Andrii M.',
                tasks: 'Container-Umgebung und Git-Server eingerichtet, Server-Zugänge per SSH gehärtet. Zentrales Monitoring für Server, Webdienste und Container mit eigenen Dashboards, verschlüsselt und mit strenger Anmeldung. Schwerpunkt: Skript zur Prüfung der Container-Images auf Aktualität.',
                links: [],
            },
            {
                id: 'thomas-s',
                name: 'Thomas S.',
                tasks: 'Backups für alle Dienste samt Überwachung, Integritätsprüfung und Wiederherstellung. Dazu Aufgabenboard, Dateiablage, Passwortmanager und Geräteverwaltung, Zugänge fürs Team, Einrichtung der Rover sowie Fotos und Unterstützung bei Social Media.',
                links: [],
            },
            {
                id: 'mert-y',
                name: 'Mert Y.',
                tasks: 'Einrichtung unseres Instagram-Kanals und erste Beiträge. Dazu das Spiel ROVV-Y, umgesetzt mit KI-Unterstützung.',
                links: [],
            },
        ],
    },
]