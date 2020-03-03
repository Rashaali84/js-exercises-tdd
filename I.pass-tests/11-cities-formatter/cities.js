function paintShop(capitals, transform) {
    let result = [];
    for (let capital of capitals) {
        let objectPush = { city: capital["city"], country: capital["country"] };

        result.push(transform(objectPush));
    }
    return result;
};
module.exports = paintShop;