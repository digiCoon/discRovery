---
title: Von Denkschleifen und Testfahrten
date: 2026-10-08
day: 9
teaser: Ein Klassendiagramm dreht eine Extrarunde. Und die Testfahrt ist online.
---

Wie baut man ein Programm auf, das Gesten liest, Kugeln findet und einen Rover steuert? Der erste Entwurf zeigte das große Ganze: ein umfassendes Klassendiagramm, farbig sortiert, mit Vererbung, Abhängigkeiten und allem, was dazugehört.

Mit diesem Überblick ging es in die nächste Runde. Die Frage war jetzt: Was braucht der Rover zuerst? Also eine Denkschleife zurück zu den Aufgaben, alles noch einmal sortiert. Daraus ist eine klare Liste entstanden, was der Rover können muss: Gesten erkennen, fahren, Abstand messen, Farben und Ziffern erkennen, Zeit messen.

![Links ein erster Entwurf des Klassendiagramms mit farbigen Bereichen und vielen Klassen, rechts der Zwischenstand als schlichte Liste von Klassen und Methoden für Hauptprogramm, Gestenerkennung, Steuerung, Abstände, Farberkennung, Ziffernerkennung, Zeitmessung und Dateien.](/logbook/klassen-skizze.webp)

Fertig ist das noch nicht. Die Liste ist die Grundlage für alles Weitere. Daraus entsteht nun das nächste Diagramm, aufgebaut entlang der Aufgaben. Hin und her gehört dazu, lieber jetzt umdenken als später umbauen. Fortsetzung folgt.

Währenddessen sind **Graf Zahl** und **Ernie** im Netz angekommen: eingerichtet, per SSH und VPN erreichbar, konfiguriert. Auf dem Core-Server ist die Absicherung der Zugänge jetzt scharf geschaltet und getestet, und auch intern laufen Verbindungen inzwischen verschlüsselt.

Unser Aufgabenboard ist auf eine eigene Installation umgezogen, samt aller bisherigen Daten. Parallel ist die CI-Pipeline gewachsen, und das Testkonzept hat weitere Fälle bekommen.

Und das Mini-Spiel ist live: ROVV-Y ist jetzt Teil dieser Seite, im Menü unter „Testfahrt“. Kugeln sammeln, Akku im Blick behalten, Felsen meiden. Ausnahmsweise mal nicht autonom.

![Die Spielseite Testfahrt im Handbetrieb im Browserfenster, mit Spielregeln, Punktetabelle, dem Startbildschirm von ROVV-Y und der Bestenliste.](/logbook/testfahrt-browser.webp)