# Threat in Space

'**Threat in Space**' is a 2D vertical Space Shooter, built in plain HTML/CSS/JavaScript aimed to train my personal web development skills.

## Roadmap:

- Day 1: Implement `Entity class` and derivatives to structure game components like players, enemies, etc.

- Day 2:
Implement a `Draw Controller`, load assets from file, like `sprites` and display them inside a HTML `<canvas>`.

## Notes:

Z-Axis values:
- -1: Background image(s).
- 0: Background moving components (ex: far asteroids, stars).
- 1: Player, enemies, asteroids, powerups. Main focus of `collider`
- 2: UI, Menues, etc.