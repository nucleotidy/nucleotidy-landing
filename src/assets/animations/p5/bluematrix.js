
export default function sketch(p) {

var streams = [];
var fadeInterval = 2.2;
var symbolSize = 15;
var rainSpacing = 1.4
var nucleotides = 'catcaaatgatagttctgttttcagctctttgaggaatcaccacactcccacagtggtcaaaccaatttacacccccaccaagagcgtataagcattcctttttctctgcaacctcaccagaaccgggctcttagctatcaagcctcttgctctccccttccagcagctgctaattataatagctgcattttctaatgtttgctgagctcaaacgctgctgggccctaggctaatcacttgcaggaattagtgccaggacgtggggctggtgacagtcccttcctcagaggatggtcaggcggtataaggatctaacacaagcaagacctggcactgtaatcatggcagaccacaggccattcttgttgtttccagccacttttatgtcttagaactgttctagatttacagaactgagaagatag'
var counter = 0

p.preload = () => {


}


p.setup = () => {
  p.createCanvas(
    p.displayWidth,
    0.75*p.displayHeight,
  );
  p.background(7,58,78);

  var x = 0;
  for (var i = 0; i <= p.displayHeight / (rainSpacing*symbolSize); i++) {
    var stream = new Stream();
    stream.generateSymbols(x, p.random(-1000, 0));
    streams.push(stream);
    x += (symbolSize*rainSpacing)
  }

  p.textFont('hua-regular');
  p.textSize(symbolSize);
}

p.draw = () => {
  p.background(7,58,78);
  streams.forEach(function(stream) {
    stream.render();
  });
}

function Symbol(x, y, speed, opacity) {
  this.x = x;
  this.y = y;
  //this.value;

  this.speed = speed;
  this.opacity = opacity;

  this.switchInterval = p.round(p.random(80, 120));

  this.setToRandomSymbol = function() {
    if (p.frameCount % this.switchInterval === 0) {
      if (counter >= nucleotides.length) counter = 0
      counter++;
      this.value = nucleotides.charAt(counter);
    }
  }

  this.rain = function() {
    this.y = (this.y >= p.displayWidth) ? 0 : this.y += this.speed;
  }

}

function Stream() {
  this.symbols = [];
  this.totalSymbols = p.round(p.random(25, 55));
  this.speed = p.random(5, 19);

  this.generateSymbols = function(x, y) {
    var opacity = 255;
    for (var i =0; i <= this.totalSymbols; i++) {
      p.symbol = new Symbol(
        x,
        y,
        this.speed,
        opacity
      );
      p.symbol.setToRandomSymbol();
      this.symbols.push(p.symbol);
      opacity -= (255 / this.totalSymbols) / fadeInterval;
      y -= symbolSize;
    }
  }

  this.render = function() {
    this.symbols.forEach(function(symbol) {
      // p.fill(35, 123, 144, symbol.opacity);
      p.fill(31, 105, 124, symbol.opacity)
      p.text(symbol.value, symbol.y, symbol.x);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}


}
