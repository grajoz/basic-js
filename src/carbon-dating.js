const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;


module.exports = function dateSample(sampleActivity){
  if (typeof sampleActivity!=='string'){return false}
 if (sampleActivity=='0'){return false};
  sampleActivity = Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity));
  
  if (isNaN(sampleActivity)||sampleActivity<0) {return false;}
  
  let result = (sampleActivity/(0.693/HALF_LIFE_PERIOD))+1;
  return  parseInt(result);
  };
