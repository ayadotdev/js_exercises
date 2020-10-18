const pilot1 = {
    id:1,
    years: 10,
    accidents : 4,
    car : "Ferrari"
};

const pilot2 = {
    id:2,
    years: 3,
    accidents : 12,
    car : "Renault"
};

const pilot3 = {
    id:3,
    years: 1,
    accidents : 2,
    car : "Fiat"
};

const pilots = [pilot1,pilot2,pilot3];

// return an array with all the IDs of the pilots
let pilotsId = pilots.map(pilot => {return pilot.id;} );
console.log (pilotsId);

// find the average years of experience of all pilots
let pilotAvExp = pilots.reduce((years,pilot) => {return  Math.round(years+pilot.years/pilots.length);}, 0);
console.log (pilotAvExp);

// find the pilot with the highest number of accidents
let pilotHighestAcc = pilots.reduce((highest,pilot) => {return highest.accidents > pilot.accidents? highest : pilot;},{});

console.log(pilotHighestAcc);

// Ritorna tutti i piloti che hanno piu di 2 anni desperienza
let mostExpPilot = pilots.filter(function(pilot){return pilot.years > 2;});
console.log(mostExpPilot);




