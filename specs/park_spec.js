const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    dino1 = new Dinosaur('Brachiosaurus', 'herbivore', 30);
    dino2 = new Dinosaur('Parasaurolophus', 'herbivore', 10);
    dino3 = new Dinosaur('Triceratops', 'herbivore', 30);
    dino4 = new Dinosaur('Gallimimus', 'omnivore', 15);
    dino5 = new Dinosaur('Tyrannosaurus Rex', 'carnivore', 50);
    dino6 = new Dinosaur('Dilophosaurus', 'carnivore', 40);
    dino7 = new Dinosaur('Velociraptor', 'carnivore', 35);
    park = new Park(
      'Jurassic Park',
      200,
      [dino1, dino2, dino3, dino4, dino5, dino6]
    );
  });

  it('should have a name');

  it('should have a ticket price');

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
