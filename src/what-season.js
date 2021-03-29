module.exports = function getSeason( date ) {
  //throw 'Not implemented';
if(!date) {
  return 'Unable to determine the time of year!'
}else if (Object.keys(date).length)  throw new Error(); 

  let season = ['winter','winter',
                'spring', 'spring', 'spring',
                'summer', 'summer', 'summer',
                'autumn','autumn','autumn',
                'winter']
  return season[date.getMonth()]

  
  // remove line with error and write your code here
};
