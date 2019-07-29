// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
  constructor(options) {
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

console.log('Volume: ', cuboid1.volume()); // 100
console.log('Surface Area', cuboid1.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
  constructor(options) {
    super(options);
  }
  // @Override
  volume() {
    return this.length * this.length * this.length;
  }
  // @)Override
  surfaceArea() {
    return 6 * (this.height ^ 2);
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

console.log(`Cube maker stretch solution volume `, cuboid2.volume());
console.log(`Cube maker stretch solution surface`, cuboid2.surfaceArea());

console.log(`Cube maker stretch solution volume`, cuboid3.volume());

console.log(`Cube maker stretch solution surface`, cuboid3.surfaceArea());