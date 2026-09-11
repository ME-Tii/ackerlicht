# Ackerlicht Gartensoftware

Gartenplaner für Beete, Boden und Wasser (Electron).

## Installation (fertig gebaut)

Download unter **[Releases](https://github.com/ME-Tii/ackerlicht/releases)**:

| System | Datei |
|--------|--------|
| Windows | [`Ackerlicht-Gartensoftware-1.2.7-win.zip`](https://github.com/ME-Tii/ackerlicht/releases/download/v1.2.7/Ackerlicht-Gartensoftware-1.2.7-win.zip) |
| Linux AppImage | [`Ackerlicht-Gartensoftware-1.2.7.AppImage`](https://github.com/ME-Tii/ackerlicht/releases/download/v1.2.7/Ackerlicht-Gartensoftware-1.2.7.AppImage) |
| Linux tar.gz | [`Ackerlicht-Gartensoftware-1.2.7-linux-x64.tar.gz`](https://github.com/ME-Tii/ackerlicht/releases/download/v1.2.7/Ackerlicht-Gartensoftware-1.2.7-linux-x64.tar.gz) |
| macOS Intel | [`Ackerlicht-Gartensoftware-1.2.7-mac-x64.zip`](https://github.com/ME-Tii/ackerlicht/releases/download/v1.2.7/Ackerlicht-Gartensoftware-1.2.7-mac-x64.zip) |
| macOS Apple Silicon | [`Ackerlicht-Gartensoftware-1.2.7-mac-arm64.zip`](https://github.com/ME-Tii/ackerlicht/releases/download/v1.2.7/Ackerlicht-Gartensoftware-1.2.7-mac-arm64.zip) |

**Windows:** ZIP entpacken, `Ackerlicht Gartensoftware.exe` starten.  
**Linux AppImage:** `chmod +x` und ausführen (FUSE nötig).  
**macOS:** ZIP entpacken und App starten.

## Aus dem Quellcode bauen

```bash
npm install
npm start          # Entwicklung
npm run dist       # Installer erzeugen
```

Voraussetzung: Node.js / npm.
