module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    //throw 'Not implemented';
    let num = Math.pow(2, disksNumber) + 1;
    let turns =Math.trunc(num / turnsSpeed *3600)
    return { turns: num, seconds: turns}
}