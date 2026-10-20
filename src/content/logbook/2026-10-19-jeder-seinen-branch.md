---
title: Jeder seinen Branch
date: 2026-10-19
day: 16
teaser: Woche vier startet mit Ordnung im Code: Jede Aufgabe bekommt ihren eigenen Zweig.
---

Woche vier beginnt mit einer Lektion in Teamarbeit am Code. Statt alles direkt in den Hauptzweig zu schieben, arbeitet jetzt jede Aufgabe in ihrem eigenen Branch: Kamera, Konfiguration, Kugelerkennung, Challenges und Erkennungsklassen. Erst wenn ein Stück fertig und geprüft ist, wandert es per Pull-Request zurück.

Der Start war, sagen wir, lehrreich. Nicht jeder hatte schon mal mit Branches gearbeitet, und so wurde gemeinsam erklärt, ausprobiert und nachgebessert. Am Ende des Tages lagen die Arbeitsstände aber sauber getrennt auf dem Git-Server. Und die Projekteinrichtung mit Anleitung, Abhängigkeiten und Ausschlussregeln ist als erster Pull-Request im Hauptzweig angekommen.

![Das Git-Repository von DiscRovery mit geöffneter Branch-Auswahl: neben dem Hauptzweig eigene Branches für Kamera, Konfiguration, Kugelerkennung sowie Challenges und Erkennungsklassen.](/logbook/git-branches.webp)

In den Branches selbst geht es weiter: An den Challenges sowie an der Gesten- und Ziffernerkennung wird gearbeitet.

Auf der Infrastruktur-Seite gab es einen genauen Blick auf die Backups. Die tägliche Sicherung ist geprüft und die Aufbewahrung abgestimmt. Neu ist eine automatische Integritätsprüfung, die einmal pro Woche kontrolliert, ob die gesicherten Daten auch wirklich unversehrt sind. Dazu wurde ein VPN-Zugang wieder flottgemacht, und am Rover ist ein Problem beim Zugriff per SSH eingegrenzt: ein Schlüssel, der nicht passte.

Und **Graf Zahl** und **Ernie** waren auch wieder öffentlich unterwegs, mit neuen Beiträgen auf Instagram und X.