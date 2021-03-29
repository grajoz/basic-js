module.exports = class DepthCalculator {
    calculateDepth( arr ) {
        let result;
            if (arr.length === 0){
              return 1;
            } 
            if(Array.isArray(arr)) {
                result=1 + Math.max(...arr.map(item => this.calculateDepth(item)))
              return result
            }
            return 0;
          }
    
};