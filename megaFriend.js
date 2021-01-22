//Problem : 4
// Take input of few string and find out which one is the longest string.
//Solution
function megaFriend(friendsName){

        var maxLetter = friendsName[0];

        for(var i =0; i<friendsName.length;i++){
            var temp = friendsName[i];
            if(temp.length>maxLetter.length){
                maxLetter = temp;
            }
        }
        return maxLetter;
}
var names = megaFriend (["Afsana" , "Nazma" , "Srity" , "Zinia" , "Humayra"]);
console.log(names);

