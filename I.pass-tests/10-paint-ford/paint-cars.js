
function paintShop(cars, color) {
    //make a deep copy using json.copy , stringfy 
    const paintedCarsLocal = JSON.parse(JSON.stringify(cars));
    paintedCarsLocal[0].colour = color;
    return paintedCarsLocal;
};
module.exports = paintShop;