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
        dino7 = new Dinosaur('Velociraptor', 'carnivore', 30);
        dino8 = new Dinosaur('Velociraptor', 'carnivore', 35);
        dino9 = new Dinosaur('Velociraptor', 'carnivore', 25);
        park = new Park(
            'Jurassic Park',
            200,
            [dino1, dino2, dino3, dino4, dino5, dino6]
        );
    });
  
    it('should have a name', function() {
        assert.strictEqual(park.name, 'Jurassic Park');
    });
  
    it('should have a ticket price', function() {
        assert.strictEqual(park.ticketPrice, 200);
    });
  
    it('should have a collection of dinosaurs', function() {
        let dinosaurs = [dino1, dino2, dino3, dino4, dino5, dino6];
        assert.deepStrictEqual(park.dinosaurs, dinosaurs);
    });
  
    it('should be able to add a dinosaur to its collection', function() {
        park.addDinosaur(dino7);
        let dinosaurs = [dino1, dino2, dino3, dino4, dino5, dino6, dino7];
        assert.deepStrictEqual(park.dinosaurs, dinosaurs);
    });
  
    it('should be able to remove a dinosaur from its collection', function() {
        park.removeDinosaur(dino2);
        let dinosaurs = [dino1, dino3, dino4, dino5, dino6];
        assert.deepStrictEqual(park.dinosaurs, dinosaurs);
    });
  
    it('should be able to find the dinosaur that attracts the most visitors', function() {
        assert.strictEqual(park.identifyBlockbuster(), dino5);
    });
  
    it('should be able to find all dinosaurs of a particular species', function() {
        park.addDinosaur(dino7);
        park.addDinosaur(dino8);
        park.addDinosaur(dino9);
        raptors = [dino7, dino8, dino9];
        assert.deepStrictEqual(park.filterBySpecies('Velociraptor'), raptors);
    });
  
    it('should be able to calculate the total number of visitors per day', function() {
        assert.strictEqual(park.estimateDailyVisitors(), 175);
    });
  
    it('should be able to calculate the total number of visitors per year', function() {
        assert.strictEqual(park.estimateAnnualVisitors(), 63000);
    });
  
    it('should be able to calculate total revenue for one year', function() {
        assert.strictEqual(park.estimateAnnualTicketRevenue(), 12600000);
    });
  
    it('should be able to remove all dinosaurs of a particular species', function() {
        park.removeBySpecies('Parasaurolophus');
        let dinosaurs = [dino1, dino3, dino4, dino5, dino6];
        assert.deepStrictEqual(park.dinosaurs, dinosaurs);
    });
  
    it('should be able to ascertain how many dinosaurs of each dietary type are in the collection', function() {
        let dietAnalysis = {
            'carnivore': 2,
            'herbivore': 3,
            'omnivore': 1
        };
        assert.deepStrictEqual(park.analyseDiets(), dietAnalysis);
    });

});
