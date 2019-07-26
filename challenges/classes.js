// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(options) {
//   this.length = options.length;
//   this.width = options.width;
//   this.height = options.height;
// }

  class CuboidMakerClass {
  constructor(options) {
    // super(options);
    this.length = options.length;
    this.width = options.width;
    this.height = options.height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }




let cuboid1 = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});


// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log('Volume: ',cuboid.volume()); // 100
console.log('Surface Area', cuboid.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
  constructor(options) {
    super(options);
  }
}

let cuboid2 = new CubeMaker({
  length: 6,
  width: 7,
  height: 3
});

let cuboid3 = new CubeMaker({
  length: 4,
  width: 5,
  height: 5
});

console.log(`Cube maker stretch solution ${cuboid2.volume()}`);
console.log(`Cube maker stretch solution ${cuboid2.surfaceArea()}`);

console.log(`Cube maker stretch solution ${cuboid3.volume()}`);

console.log(`Cube maker stretch solution ${cuboid3.surfaceArea()}`);


