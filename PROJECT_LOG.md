# 🚀 VTuber Projekt – Lern- und Fortschritts-Log

## ✅ Stand heute
- **NestJS Grundsetup** erstellt (`Controller`, `Service`, `DTO`, `Interface`)
- **Cats-Beispiel** aus der offiziellen NestJS-Doku erfolgreich nachgebaut
  - `POST /cats` → erstellt neuen Cat
  - `GET /cats` → gibt alle Cats zurück
  - funktioniert mit **Insomnia**
- **ValidationPipe Problem** verstanden:
  - ohne `class-validator` wurden alle Felder durch `whitelist` gelöscht → `[{}]`
  - Lösung: `class-validator` Dekoratoren (`@IsString()`, `@IsInt()` etc.) ins DTO
- **Postgres & Prisma** schon vorbereitet (Docker-DB läuft), aber aktuell noch nicht eingebunden → Cats liegen nur im Speicher (Memory).

---

## 📚 Nächste Schritte (Lern-Route)

1. **CRUD vervollständigen**
   - `PUT /cats/:id` → Cat updaten
   - `DELETE /cats/:id` → Cat löschen

2. **Validation erweitern**
   - Pflichtfelder, optionale Felder
   - Fehler-Handling (`BadRequestException` etc.)

3. **Module strukturieren**
   - eigenes `CatsModule`
   - Vorbereitung für `TwitchModule`

4. **Prisma + Postgres einbinden**
   - Cats in DB speichern
   - Migration laufen lassen
   - Daten aus DB abrufen

5. **Externe API (Twitch)**
   - `HttpModule` benutzen
   - ersten Call zur Twitch API (Userdaten abrufen)

6. **Auth (später)**
   - JWT Basics
   - evtl. Twitch-Login via OAuth

7. **Deployment**
   - Docker Compose: NestJS + Postgres
   - lokal und dann Server

---

## 🛠️ Notizen
- `CreateCatDto` → Klassen statt Interfaces für Validation nutzen
- Interfaces (`Cat`) helfen nur als **Type-Hinweise**, werden aber zur Laufzeit gelöscht
- DTO-Klassen bleiben erhalten → wichtig für ValidationPipe
- `.env` enthält schon `DATABASE_URL` (Postgres via Docker läuft)
- Prisma ist installiert, Schema vorhanden (`schema.prisma`), aber noch nicht verwendet
