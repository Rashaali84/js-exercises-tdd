function paintShop(carssold, color) {
    var paintedCars = carssold.slice();
    paintedCars[0].colour = color;
    return paintedCars;
};
module.exports = paintShop;