// / Given a string S of length N, write a JavaScript function that transforms the string by reversing characters in groups of four and returns the transformed string. 

// e.g., when S = 'Lorem at' the output should be 'eroLta m' 

// When S = ' Tempor ip' the output should be 'meT roppi' 

//

S = 'Lorem atLorem at'

//using for of
function reversedString(str) {
    let reversed = '';
    for( let i of str) {
        reversed += str.split('').splice(0, 4).reverse().join('');
        str = str.slice(4);
    };
    return reversed;
};

console.log(reversedString(S))

// using for loop

function revStr (str) {
    var result = '';
    for ( i = 0; i < str.length; i++){
        result += str.split('').splice(0, 4).reverse().join('')
        str = str.slice(4);
    }
    return result;
}
console.log(revStr(S))

