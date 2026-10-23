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
                tasks: 'Projektdokumentation im Wiki, internes Tageslog für das Team und Einarbeitung in Installation und Konfiguration des Git-Servers. Dazu Identifikation und Definition der Klassen für die Rover-Software, Mitarbeit am Klassendiagramm, Konzeption der Dateischnittstelle und des Loggings, Entwicklung der Basisklasse für alle Challenges, Arbeit an den Challenges und Erkennungsklassen sowie Tests für Challenges, Gesten- und Ziffernerkennung.',
                links: [],
            },
            {
                id: 'jessica-r',
                name: 'Jessica R.',
                tasks: 'Konzept, Design und Umsetzung der Projektwebseite, Pflege der Inhalte, Erstellung von Beiträgen, Einrichtung des Hostings sowie Projektstrukturplan und Tool-Zuordnung der Rover-Software. Außerdem Feinschliff am Spiel ROVV-Y und dessen Einbau in die Webseite, die operative Einrichtung des Aufgabenboards samt Aufgabenplanung entlang des Projektstrukturplans, die Überarbeitung der Wiki-Doku samt Corporate Design, Mitarbeit am Klassendiagramm und dessen Dokumentation im Wiki, Umsetzung der Kamera- und der Audio-Klasse samt Tests, Planung und Betreuung der Social-Media-Kanäle sowie Aufräumen des Git-Repositorys samt Anleitung zum Branch-Schutz und Git-Anleitung fürs Team.',
                links: [
                    { label: 'portfolio', url: 'https://digicoon.de' },
                    { label: 'github', url: 'https://github.com/digiCoon' },
                ],
            },
            {
                id: 'niklas-b',
                name: 'Niklas B.',
                tasks: 'Ablaufplanung der ersten Teilaufgabe und erste Schritte mit den Grundfunktionen des Rovers, vor allem Kugel- und Farberkennung. Dazu Mitarbeit am Klassendiagramm, Entwicklung der Kugelerkennung samt Farbkalibrierung sowie Kalibrierung der Kamera für die Entfernungsmessung.',
                links: [],
            },
            {
                id: 'vahit-e',
                name: 'Vahit E.',
                tasks: 'Mitarbeit am Klassendiagramm, Dokumentation des Ablaufs von Challenge 3 sowie Planung und Umsetzung der Grundfunktionen der Rover-Ansteuerung samt Geschwindigkeitssteuerung.',
                links: [],
            },
            {
                id: 'alexander-m',
                name: 'Alexander M.',
                tasks: 'Ablaufplanung von Challenge 2 als Aktivitätsdiagramm. Dazu Mitarbeit am Klassendiagramm sowie Umsetzung und Tests der Konfiguration bis zum Integrationstest.',
                links: [],
            },
            {
                id: 'christopher-w',
                name: 'Christopher W.',
                tasks: 'Konzept und Aufbau des Entwicklungs-Workflows, von der Test-VM bis zur CI-Pipeline samt Runner, in Abstimmung mit dem Infrastrukturteam. Dazu Testkonzept, Testfälle, Sicherheitsanalyse des Git-Repositorys, Mitarbeit am Klassendiagramm, Analyse von Ablaufsteuerung und Gestenerkennung, erste Testfahrten mit dem Rover, Einrichtung der KI-Bibliothek, Tests der Gesten- und Kugelerkennung direkt am Rover sowie Arbeit an der Ablaufsteuerung.',
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
                tasks: 'Firewall, Core-Server und VPN: Installation, Einrichtung, Tests, Support und Abstimmung mit dem übergeordneten Netz. Außerdem der Umzug der Webseite auf die finale Domain, die Koordination der Infrastruktur-Arbeiten, verschlüsselte interne Verbindungen, Bereitstellung des Team-Chats samt Einführung fürs Team, Prüfung und Bereitstellung des Pipeline-Runners, Systemprüfungen, Hilfsskripte und lokale Serverüberwachung, Umsetzung der Infrastruktur-Anforderungen der Entwicklung, Dokumentation und Präsentationsvorbereitung sowie Unterstützung bei Social Media.',
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
                tasks: 'Installation und Konfiguration des Git-Servers samt Container-Umgebung und Firewall-Freigaben. Dazu Absicherung der Server-Zugänge, erst in isolierter Umgebung getestet, dann auf dem Core-Server umgesetzt, sowie Überwachung aller Dienste mit verschlüsseltem Zugriff und Dashboards für Server, Webdienste und Container. Außerdem Arbeit am Zugriffsschutz für die Überwachung.',
                links: [],
            },
            {
                id: 'thomas-s',
                name: 'Thomas S.',
                tasks: 'Fotos und Bildbearbeitung der Rover für Webseite und Social Media. Außerdem Einrichtung der SSH- und VPN-Zugänge fürs Team, Einrichtung der Rover selbst, Aufbau des Aufgabenboards samt Datenumzug, der Dateiablage mit Anbindung an den Git-Server, der Backups für alle Dienste samt automatischer Benachrichtigungen, Integritätsprüfung, Überwachung und Fehleranalyse, des Passwortmanagers samt getesteter Wiederherstellung und der zentralen Geräteverwaltung sowie Vorbereitung der vollständigen Systemwiederherstellung. Dazu Unterstützung bei Social Media.',
                links: [],
            },
            {
                id: 'mert-y',
                name: 'Mert Y.',
                tasks: 'Einrichtung unseres Instagram-Kanals und erste Beiträge. Dazu Entwicklung und Feinschliff unseres Spiels ROVV-Y.',
                links: [],
            },
        ],
    },
]