module.exports = function transform(arr) {
    /*throw 'Not implemented';*/
   if (!arr.isArray()){throw 'Not implemented'}


for (let i=0;i<arr.length;i++){

    if(i!==arr.length-1&&arr[i]=="--discard-next"){arr.splice(i, 2);}
    if(i==arr.length-1&&arr[i]=="--discard-next"){arr.splice(i, 1);}

    if(i!==0&&arr[i]=="--discard-prev"){arr.splice(i-1, 2);}
    if(i==0&&arr[i]=="--discard-prev"){arr.splice(i, 1);}

    if(i!==arr.length-1&&arr[i]=="--double-next"){arr.splice(i, 1,arr[i+1]);}
    if(i==arr.length-1&&arr[i]=="--double-next"){arr.splice(i, 1);}

    if(i!==0&&arr[i]=="--double-prev"){arr.splice(i, 1,arr[i+1]);}
    if(i==0&&arr[i]=="--double-prev"){arr.splice(i, 1);}
}
return arr;
};
