# Faster-Petrax

By: Cattalol

Tera-Toolbox module to log NPC data on player contact. This module is intended as a debugging helper. No active support will be provided for this module - if a packet definition becomes outdated just update the versioning.

## Usage:
- Talk to an NPC
- gameId, templateId, and huntingZoneId will be logged in proxy channel and in the command line console.
- For debugging purposes, or other uses in those **_QoL_** modules :)

## Note(s):
- Each and every NPC's gameId (e.g. the entity's unique identifier across the game world) is reset whenever the server is reset
  - This means an NPC will only keep its current gameId until the next maintenance (or server crash).
- templateId and huntingZoneId will identify the NPC type (e.g. "Fishing Supplies"), but only within each respective zone/area.
  - In other words, "Fishing Supplies" at Seren's Lake will have a different templateId / huntingZoneId than the "Fishing Supplies" at Celsian Lake.
