/**
 * Round a number to the nearest given increment
 * i = Number to be rounded
 * [increment] = Integer to round toward
 * [direction] = -1 for down, 0 for nearest, 1 for up
 */
function inc_round(i, increment, direction){
    direction = (direction || 0);
    increment = (increment || 1);
    if (direction < 0) return Math.floor(i / increment) * increment;
    else if (direction > 0) return Math.ceil(i / increment) * increment;
    return Math.round(i / increment) * increment;
}