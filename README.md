Software Development Project: Simon
===================================
Spring 2016 Marking Period 1 Software Development with Mr. Brown, Project #1

Members
=======
| **Member** | **GitHub** | **Role** |
|:----------:|:----------:|:--------:|
| Milo Bernfield| [`@M4598bm`] (https://github.com/M4598bm) | Instructions |
| Tony Li    | [`@tonyli7`] (https://github.com/tonyli7) | UI & Sounds |
| Dillon Zhang | [`@dillzhang`] (https://github.com/dillzhang) | Backend  |

Project
=======
Recreating the memory game Simon using HTML, SVG, and Javascript.

Why SVG?
========
SVG treats the different images on screen as objects rather than just pixels on a screen. This means that one were to draw a circle on top of another circle, the first circle is still present underneath. If one were then to remove the top circle, the bottom circle would still be present. With this property, one could easily draw the shape of the simon game, which mostly consists of four washer sectors, which are drawn with quarter circles covered by a cirlce in the middle, and manipulate it rather redrawing each sector and the center everytime. The object oriented approach of SVG really plays well to the creating of games and animations as each image can keep track of its own location and other types of data.

Features
========
* Four flashing sectors with sounds
* Demo mode before each game
* High score and score tracker
* Option to rotate the Simon game to add more gameplay
* Option to change color themes or simply to no color for more of a challenge

Bugs :disappointed:
===================
* ~~The code itself is rather poorly written. This is partially our fault for not understanding the javascript to the fullest, but also the quirks of javascript. For example, the calling of functions in other functions as parameters seem to only work if that function was stored in a variable.~~
  * Cleaned up code and wrote better functions.
* ~~The code is further complicated with the only timing mechanism being `setTimeout()` and overriding the previous call if another is called before it. This lead to the linking of multiple functions in order for timing to work properly.~~
  * Figured out how to pass parameters through `setTimeout()`.
* ~~The sound files do not play if called in rapid succession, however this can be counteracted with increasing the time between flashes.~~
  * Addressed by shortening the length of the sound files. However, the issue may still occur if clicked in rapid succession.
* ~~Theres bound to be more!~~ Hopefully not though! :smiley:

