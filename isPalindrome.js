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

console.log(isPalindrome('tenet'));