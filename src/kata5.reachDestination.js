const reachDestination = (distance, speed) => {
    let time = (distance / speed);
    time = Math.round(time*2)/2;
    return "I should be there in " + time + " hours.";
};

module.exports = reachDestination;
