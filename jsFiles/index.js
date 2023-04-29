// function checkMagicSquare(n, matrix) {
//     let row = 0;
//     let coloum = 0;
//     let leftDiagnol = 0;
//     let rightDiagnol = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             row += matrix[i][j];
//             coloum += matrix[j][i];

//             // console.log(" row = ", row)
//             // console.log(" coloum = ", coloum);

//             if (i == j) {
//                 leftDiagnol += matrix[i][j];
//                 // console.log("left Diagnol = ", leftDiagnol)

//             }



//             if (i == n - 1 - j && j == n - 1 - i) {
//                 rightDiagnol += matrix[i][j]
//                 // console.log("right diagnol = ", rightDiagnol)
//             }
//             // i = 0, 2-j0 = 2, 2-j1 = 1, 2-j2 = 0 
//             // j0 ,2 j1, 2, j2,2 

//             // i=1, 2-j0 = 2, 2-j1 = 1
//             // j0,1 j1,1

//             // i=2, 2-j0 = 2,
//             // j0,0


//         }
//         // console.log("i = ",i + " row = ", row)
//         // console.log("i = ",i + " coloum = ", coloum)

//         if (row != coloum) {
//             // console.log("Not a square matrix");
//             return "No";
//         }

//         row = 0;
//         coloum = 0;


//     }
//     if (leftDiagnol == rightDiagnol) {
//         // console.log("is a square matrix");
//         return "Yes"
//     }
// }

// let matrix = [[4, 3, 2], [3, 5, 7], [8, 1, 6]];
// let n = matrix.length;


// console.log(checkMagicSquare(n,matrix));

// console.log(matrix[3][2]);



// function capitalise(paragraph) {
//   let arraOfWords = [];
//   let word = '';
//   for(let i = 0; i < paragraph.length; i++){
//     if(paragraph[i] == ' '){
//         let char = paragraph[i+1]
//         let upper  = char.
//     }

//   }
// }


// function patternPrintingII(n) {
//     let printStar = []
//     let star = ''
//     let middle = Math.floor(((2*n)-1) / 2);
//     for(let i = 0; i < (2*n-1); i++){
//         if(i <=middle){
//             star += "* ";
//             printStar.push(star);
//             console.log(star)
//         }else{
//             // printStar.push(printStar[(2*n-1)-i+1])
//            console.log(printStar[(2*n-2)-i])
            
//         }
            
//     }
//     return printStar;
// }


// patternPrintingII(5)
// let str  = "the quick Brown fox jumps over The lazy dog.";

// capitalise(str);


// recurssion:

function printNumbers(n){
    if(n==0 || n==1){
        // console.log(n)
        return n;
    }
   return printNumbers(n-2) + printNumbers(n-1);
}

console.log(printNumbers(6))