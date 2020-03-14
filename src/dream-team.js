module.exports = function createDreamTeam(members) {
let string="";
let arr=[];
for (i=0;i<members.length;i++){
  if ((members[i]!==undefined)&&(typeof(members[i])==="string")&&(members[i].length>0)){
    arr[i]=members[i].match(/\p{Lu}/u);
  }
}
string=arr.join("");
return string
};