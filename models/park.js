const Park = function(name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(doomedDinosaur) {
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur === doomedDinosaur) {
            this.dinosaurs.splice(this.dinosaurs.indexOf(dinosaur), 1);
        };
    };
};

Park.prototype.identifyBlockbuster = function() {
    let blockbuster;
    let popularityThreshold = 0;
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > popularityThreshold) {
            popularityThreshold = dinosaur.guestsAttractedPerDay;
            blockbuster = dinosaur;
        };
    };
    return blockbuster;
    // Or, same thing written differently:
    // for (let i = 0; i < this.dinosaurs.length; i++) {
    //     let dinosaur = this.dinosaurs[i];
    //     if (dinosaur.guestsAttractedPerDay > popularityThreshold) {
    //         popularityThreshold = dinosaur.guestsAttractedPerDay;
    //         blockbuster = dinosaur;
    //     };
    // };
    // return blockbuster;
};

module.exports = Park;
