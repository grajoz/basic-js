module.exports = function countCats(matrix) {

  let count=0;
  if (matrix==[]){return []};
  if (matrix==undefined){return []};
  for (i=0;i<matrix.length;i++){
    for (j=0;j<matrix[i].length;j++){

          if(matrix[i][j]=="^^"){
            count=count+1;
          }
        
        }
      }
   return count;
    }
     
