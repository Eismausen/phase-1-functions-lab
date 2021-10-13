// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    return Math.abs(pickup-42);
}

function distanceFromHqInFeet(end) {
    let blocks = distanceFromHqInBlocks(end);
    return blocks * 264;
}

function distanceTravelledInFeet(start, end) {
    let blocks = Math.abs(start - end);
    return blocks * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return 0;
    } else if (distance < 2000) {
        return (distance - 400) * .02;
    } else if (distance < 2500) {
        return 25.00;
    } else {
        return 'cannot travel that far';
    }

}