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

Park.prototype.filterBySpecies = function(species) {
    let filteredDinos = [];
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            filteredDinos.push(dinosaur);
        };
    };
    return filteredDinos;
};

Park.prototype.estimateDailyVisitors = function() {
    let averageDailyVisitors = 0;
    for (let dinosaur of this.dinosaurs) {
        averageDailyVisitors += dinosaur.guestsAttractedPerDay;
    };
    return averageDailyVisitors;
};

Park.prototype.estimateAnnualVisitors = function() {
    let daysOpenAnnually = 360;
    return (this.estimateDailyVisitors() * daysOpenAnnually);
};

Park.prototype.estimateAnnualTicketRevenue = function() {
    return (this.estimateAnnualVisitors() * this.ticketPrice);
};

module.exports = Park;
