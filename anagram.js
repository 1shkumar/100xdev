// function arrayfromstring(str){
//     var array=str.split("a");
//     return array;
// }

// var ans=arrayfromstring("my nam is vansh");
// console.log(ans);


// function stringfromarray(str){
//     var string=str.join();
//     return string;
// }

// var ans=stringfromarray(['my' ,'name', 's', 'vansh']);
// console.log(ans);

//we cannot sort a string, we can only sort an array

function sort(str){
    var array=str.split("");
    array=array.sort();
    var sortedString=array.join("");
    return sortedString;
}

function isAnagram(str1, str2){
    if(sort(str1)==sort(str2)){
        return true;
    }
    else return false;
}

var ans=isAnagram("vansh", "shanv");
console.log(ans);