// Write your code below

let isPalindrome = (word) => {
    //set the starting indexes of both ends
    let leftIndex = 0;
    let rightIndex = word.length - 1;

    //while lefIndex is less than rightIndex, check each char
    while(leftIndex < rightIndex){
        if(word[leftIndex] !== word[rightIndex]){
            //if there is unmatched char, return false
            return false;
        }
        //change the value of leftIndex & righIndex
        leftIndex++;
        rightIndex--;
    }
    //if all chars are the same, return true.
    return true;
}

//console.log(isPalindrome('racecar'));

//Isacc idea

let isPalindrome2 = (word) => {
    let origArr = word.split('');
    console.log(origArr);
    let paliArr = [];

    for(let i = origArr.length - 1; i >= 0; i--){
        paliArr.push(origArr[i]);
    }

    return compareTwoArr(origArr, paliArr);
}

let compareTwoArr = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome2('asopidjfjiup'));