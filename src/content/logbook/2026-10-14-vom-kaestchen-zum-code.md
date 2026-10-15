---
title: Vom Kästchen zum Code
date: 2026-10-14
day: 13
teaser: Das Klassendiagramm wird zerlegt, die ersten Zeilen Code entstehen. Und der Rover bewegt sich.
---

Jetzt wird das Klassendiagramm auseinandergenommen, im besten Sinne. Jede Klasse kommt einzeln auf den Tisch: Was muss sie können, welche Methoden braucht sie, wie spricht sie mit den anderen? Analysiert werden unter anderem die Ablaufsteuerung, die Gestenerkennung, die Kugelerkennung samt Kalibrierung der Farben und die Ansteuerung des Rovers.

![Ein Smiley aus UML-Klassenkästen: zwei Kamera-Klassen als Augen, darunter mehrere DiscRovery-Klassen, die über Pfeile verbunden einen lachenden Mund bilden.](/logbook/discrovery_classdiagram_smile.webp)

Und es entsteht der erste echte Code: Die gemeinsame Basis für alle drei Challenges ist in Arbeit. Auf ihr bauen später Startsignal und Kugelreihenfolge jeder einzelnen Challenge auf.

Außerdem gab es einen ersten Testlauf am Rover selbst: Steuerung und Sound, direkt angesprochen aus einem Notebook. Noch ohne KI, noch ohne Plan, aber **Graf Zahl** und **Ernie** haben zum ersten Mal auf unsere Befehle reagiert.

Auf der Infrastruktur-Seite ist ein Passwortmanager dazugekommen, mit Benutzer- und Teamverwaltung und eingebunden in die automatischen Backups. Sicherung und Wiederherstellung sind getestet, nicht nur geplant. Und damit der Code der Entwickler sicher durch die Pipeline läuft, wird der zugehörige Runner geprüft, bevor er für alle freigegeben wird. Schließlich soll nichts anfangen zu brennen.