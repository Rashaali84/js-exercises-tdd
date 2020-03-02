function sales(carssold) {

    let counterF = 0;
    for (const car of carssold) {
        if (car.make == "Ford") counterF += car.price;
    }


    let counterLR = 0;
    for (const car of carssold) {
        if (car.make == "Land Rover") counterLR += car.price;
    }

    let counterH = 0;
    for (const car of carssold) {
        if (car.make == "Honda") counterH += car.price;
    }

    let counterT = 0;
    for (const car of carssold) {
        if (car.make == "Toyota") counterT += car.price;
    }
    var totals = {
        Ford: 0,
        Honda: 0,
        "Land Rover": 0,
        Toyota: 0
    };
    totals.Ford = counterF;
    totals.Honda = counterH;
    totals["Land Rover"] = counterLR;
    totals.Toyota = counterT;
    return totals;


};


module.exports = sales;