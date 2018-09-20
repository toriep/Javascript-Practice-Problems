// /*
// find cube: determine whether each number in an array is the square root of the next
// for example:
// input:
//   [2, 4, 16, 256]
//   ,

//  output:
//    true
// */

// function cubeSequence( numbers ) {


// }

// /*
// make change: return an object, given a particular number less than 1 dollar, what
// change would be required to equal it
// input:
//   88
// output:
//   {
//     25: 3,
//     10: 1,
//     5: 1,
//     1: 3
//   }
// */

// function makeChange( amount ) {

// }

// /*
// detect haiku:  given an array with strings,
// and the strings with words (syllables separated by hyphens), determine if the array
// is in the form of a haiku (5-7-5)
// for example:

// input:
//   ['oh we love to code'],
//   ['mak-ing our dreams rea-li-ty'],
//   ['show me the mo-ney']
// output:
//   true
// */
// var testHaiku =   [['oh we love to code'],
//     ['mak-ing our dreamsrea-li-ty'],
//     ['show me the mo-ney']];
// function detectHaiku( lines ) {
//     // for(var i=0; i<lines.length; i++){
//     //     lines[i] = lines[i].split('');
//     //     string = string[0].split('');
//     //     for(var a=0;a<string.length;a++) {
//     //         if (string[a] === "-") {
//     //             string[a] = " ";
//     //         }
//     //     }
//     //
//     // }
//     var haikuArray = [5,7,5];
//     var isHaiku = [];
//     for (var i = 0; i < lines.length; i++) {
//         var currentPhrase = lines[i][0];
//         var syllableCount = 1;
//         for (var a = 0; a < currentPhrase.length; a++) {
//             if(currentPhrase[a] === " " || currentPhrase[a] === "-") {
//                 syllableCount++;
//             }
//         }
//         isHaiku.push(syllableCount);
//         }
//         for(var u=0; u<haikuArray.length;i++){
//             if(isHaiku[u]===haikuArray[u]){
//                 return 'This is a haiku';
//             } else {
//                 return 'This is NOT a haiku';
//             }
//         }
//         }


// var string = "I-don't think you-know-what you're talking about";
// var a = string.replace(" ","-");


// /*
// expandCode: given a code of letters and numbers, based on the number
// expand the following letters by the number times.  Return that expanded string
// input:
//     "4dude3hello"
// output:

//     "dudedudedudedudehellohellohello"

// */
// function expandCode(string) {

// }
