Software Development Project: Simon
===================================
Spring 2016 Marking Period 1 Software Development with Mr. Brown, Project #1

Members
=======
| **Member** | **GitHub** | **Role** |
|:----------:|:----------:|:--------:|
| Milo Bernfield| [`@M4598bm`] (https://github.com/M4598bm) |   |
| Tony Li    | [`@tonyli7`] (https://github.com/tonyli7) |   |
| Dillon Zhang | [`@dillzhang`] (https://github.com/dillzhang) |   |

Project
=======
Recreating the memory game Simon using HTML, SVG, and Javascript.

Why SVG?
========
SVG treats the different images on screen as objects rather than just pixels on a screen. This means that one were to draw a circle on top of another circle, the first circle is still present underneath. If one were then to remove the top circle, the bottom circle would still be present. With this property, one could easily draw the shape of the simon game, which mostly consists of four washer sectors, which are drawn with quarter circles covered by a cirlce in the middle, and manipulate it rather redrawing each sector and the center everytime. The object oriented approach of SVG really plays well to the creating of games and animations as each image can keep track of its own location and other types of data.

Bugs :disappointed:
===================
* The code itself is rather poorly written. This is partially our fault for not understanding the javascript to the fullest, but also the quirks of javascript. For example, the calling of functions in other functions as parameters seem to only work if that function was stored in a variable.
* The code is further complicated with the only timing mechanism being `setTimeout()` and overriding the previous call if another is called before it. This lead to the linking of multiple functions in order for timing to work properly.
* The sound files do not play if called in rapid succession, however this can be counteracted with increasing the time between flashes.
* Theres bound to be more!
