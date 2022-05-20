const Park = function(name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(doomedDinosaur) {
    for (dinosaur of this.dinosaurs) {
        if (dinosaur === doomedDinosaur) {
            this.dinosaurs.splice(this.dinosaurs.indexOf(dinosaur), 1);
        };
    };
};

module.exports = Park;
