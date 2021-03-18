// P_2_3_3_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * draw tool. shows how to draw with dynamic elements.
 *
 * MOUSE
 * drag                : draw with text
 *
 * KEYS
 * del, backspace      : clear screen
 * arrow up            : angle distortion +
 * arrow down          : angle distortion -
 * s                   : save png
 */
'use strict'

export default function sketch(p) {

  // ~~~~~~ Initialize variables ~~~~~~~~~

  var x = 0
  var y = 0
  var stepSize = 5.0

  var font = 'hua-regular'
  //var letters = 'CATCAAATGATAGTTCTGTTTTCAGCTCTTTGAGGAATCACCACACTCCCACAGTGGTCAAACCAATTTACACCCCCACCAAGAGCGTATAAGCATTCCTTTTTCTCTGCAACCTCACCAGAACCGGGCTCTTAGCTATCAAGCCTCTTGCTCTCCCCTTCCAGCAGCTGCTAATTATAATAGCTGCATTTTCTAATGTTTGCTGAGCTCAAACGCTGCTGGGCCCTAGGCTAATCACTTGCAGGAATTAGTGCCAGGACGTGGGGCTGGTGACAGTCCCTTCCTCAGAGGATGGTCAGGCGGTATAAGGATCTAACACAAGCAAGACCTGGCACTGTAATCATGGCAGACCACAGGCCATTCTTGTTGTTTCCAGCCACTTTTATGTCTTAGAACTGTTCTAGATTTACAGAACTGAGAAGATAG'
  var letters = 'catcaaatgatagttctgttttcagctctttgaggaatcaccacactcccacagtggtcaaaccaatttacacccccaccaagagcgtataagcattcctttttctctgcaacctcaccagaaccgggctcttagctatcaagcctcttgctctccccttccagcagctgctaattataatagctgcattttctaatgtttgctgagctcaaacgctgctgggccctaggctaatcacttgcaggaattagtgccaggacgtggggctggtgacagtcccttcctcagaggatggtcaggcggtataaggatctaacacaagcaagacctggcactgtaatcatggcagaccacaggccattcttgttgtttccagccacttttatgtcttagaactgttctagatttacagaactgagaagatag'
  var fontSizeMin = 2
  var angleDistortion = 0.0

  var counter = 0
  // ~~~~~~ React lifecycle methods ~~~~~~
  p.preload = () => {

  }

  // ~~~~~~ Setup ~~~~~~
  p.setup = () => {
  // use full screen size
  p.createCanvas(p.displayWidth, 700)
  //p.background(7,58,77)
  p.cursor(p.TEXT)

  x = p.mouseX
  y = p.mouseY

  p.textFont(font)
  p.textAlign(p.LEFT)
  // 2c89a0 30%, #59a5d8
  p.fill(44,137,160)
  //p.stroke(89,165,216)
  }

  // ~~~~~~ Draw ~~~~~~
  p.draw = () => {
    if (p.mouseIsPressed && p.mouseButton == p.LEFT) {
      var d = p.dist(x, y, p.mouseX, p.mouseY)
      p.textSize(fontSizeMin + d / 12)
      //p.strokeWeight(d/40)
      var newLetter = letters.charAt(counter)
      stepSize = p.textWidth(newLetter)

      switch (newLetter) {
        case "a":
          p.fill(212,0,0);
          break;
        case "c":
          p.fill(255,204,0);
          break;
        case "t":
          p.fill(87,202,133);
          break;
        case "g":
          p.fill(56,111,164);
          break;
        default:
          p.fill(44,137,160);
      }

      if (d > stepSize) {
        var angle = p.atan2(p.mouseY - y, p.mouseX - x)

        p.push()
        p.translate(x, y)
        p.rotate(angle + p.random(angleDistortion))
        p.text(newLetter, 0, 0)
        p.pop()

        counter++
        if (counter >= letters.length) counter = 0

        x = x + p.cos(angle) * stepSize
        y = y + p.sin(angle) * stepSize
      }
    }
  }

  // ~~~~~~ Other commonly used p5 methods
  p.mousePressed = () => {
    x = p.mouseX
    y = p.mouseY
  }

  p.mouseReleased = () => {

  }

  // ~~~~~~ Helper functions ~~~~~~~~~

  // ~~~~~~ Classes ~~~~~~~~~~~~

}
