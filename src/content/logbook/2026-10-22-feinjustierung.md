---
title: Feinjustierung
date: 2026-10-22
day: 19
teaser: Kamera kalibrieren, Tempo regeln, Ton geben. Und im Hintergrund wird der Ernstfall geprobt.
---

Jetzt geht es um die Details, die am Ende über Punkte entscheiden. Die Kamera des Rovers hat ein weites Sichtfeld, und das verzerrt. Damit die Entfernung zur Kugel überall im Bild stimmt, nicht nur in der Mitte, gibt es jetzt ein Testskript, das die Kamera genau vermisst.

Auch die Ansteuerung wird feiner: Der Rover kann jetzt sein Tempo regeln, statt nur zu fahren oder zu stehen. An der Ablaufsteuerung, die alles miteinander verbindet, wird weitergearbeitet, begleitet von Tests direkt am Rover. Und **Graf Zahl** und **Ernie** bekommen eine Stimme: Eine neue Klasse kümmert sich um die Tonausgabe, inklusive Tests und einem Skript für den Probelauf vor Ort.

Auf der Infrastruktur-Seite wird der Ernstfall vorbereitet. Ein hängengebliebener Prozess hatte das Aufräumen alter Backups blockiert. Die Ursache ist gefunden und behoben, und der nächste Sicherungslauf war wieder vollständig erfolgreich. Für die komplette Wiederherstellung des Systems werden jetzt nur noch Sicherungen verwendet, die vollständig sind und zusammengehören. Die Skripte sind auf Reihenfolge und Abhängigkeiten geprüft, und ein Rücksetzpunkt steht bereit, falls beim Test etwas schiefgeht. Geprobt wird bewusst, ohne das laufende System anzufassen.

Dazu gab es Hilfe bei hartnäckigen VPN-Problemen, Arbeit an der Serverüberwachung und Anpassungen der Infrastruktur an die Wünsche der Entwicklung. Und die Vorbereitung für Dokumentation und Abschlusspräsentation hat begonnen. Die Ziellinie ist in Sicht.