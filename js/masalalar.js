// Vowel Count
// {
//     function getCount(str) {
//         return (str.match(/[aeiou]/gi) || []).length;
//     }
// }


// Disemvowel Trolls
// {
//     function disemvowel(str) {
//         return str.replace(/[aeiou]/gi, '');
//     }
// }


// 3 powers of 2
// {
//     function threePowers(n) {
//         let base3 = n.toString(3);
//       return !base3.includes('2');
//   }
// }




// Sum a list but ignore any duplicates
// {
//     function sumNoDuplicates(arr) {
//         const countMap = new Map();
        
//         for (let num of arr) {
//           countMap.set(num, (countMap.get(num) || 0) + 1);
//         }
      
//         let sum = 0;
//         for (let [num, count] of countMap.entries()) {
//           if (count === 1) {
//             sum += num;
//           }
//         }
      
//         return sum;
//       }
// }



// Simple Simple Simple String Expansion
// {
//     function stringExpansion(s) {
//         let result = '';
//         let multiplier = 1; 
//         for (let i = 0; i < s.length; i++) {
//           if (/\d/.test(s[i])) {
//             multiplier = Number(s[i]);
//           } else {
//             result += s[i].repeat(multiplier); 
//           }
//         }
      
//         return result;
//       }
// }


// Century From Year
// {
//     function century(year) {
//         return Math.ceil(year / 100);
//       }
// }

// Beginner - Lost Without a Map
// {
//     function maps(arr) {
//         return arr.map(num => num * 2);
//       }
// }




// Convert number to reversed array of digits
// {
//     function digitize(n) {
//         return String(n).split('').map(Number).reverse();
//       }
// }


// Parse nice int from char problem
// {
//     function getAge(str) {
//         const ageRegex = /(\d+) year[s]? old/;
//         const match = str.match(ageRegex);
      
//         if (match) {
//           return parseInt(match[1]);
//         } else {
//           return NaN;
//         }
//       }
// }


// Exclusive "or" (xor) Logical Operator
// {
//     function xor(a, b) {
//         return (a || b) && !(a && b);
//     }
// }