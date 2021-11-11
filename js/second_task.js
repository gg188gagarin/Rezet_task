const array = [
    [1, 2, 3, 1, 2],
    [4, 5, 6, 4, 5],
    [7, 8, 9, 7, 8]
];

function checkMatrix(matrix) {
    const latGroupStart = matrix[0].length - 3;

    for (let i = 0; i <= latGroupStart; i++) {
        const section = matrix.flatMap(row => row.slice(i, i + 3));
        const uniqueDigits = new Set(section);
        if(uniqueDigits.size < 9) return false;
    }

    return true;
}

console.log(checkMatrix(array));


//в данном случае мы можем воспользоваться
// и более простым, для понимания, способом.
// он заключается в том, что если первый участок 3х3 выполняет условия,
// то достаточно проверять на соответствие следующие (четвертые) столбцы
// с первыми. то есть "новые" столбцы должны содержать те же цифры, что
// и "уходящие" столбцы, при передвижении сетки 3х3 вдоль массива.







// ------------------
//
// var inputValX,
//     inputValY,
//     button = document.getElementById('button'),
//     xArr = [],
//     yArr = [],
//     zArr = [],
//     tArr=[];
// let i=0;
//
// button.addEventListener('click', function() {
//     inputValX = document.getElementById('xArray').value;
//     xArr = inputValX.split(',');
//     inputValY = document.getElementById('yArray').value;
//     yArr = inputValY.split(',');
//     inputValY = document.getElementById('zArray').value;
//     zArr = inputValY.split(',');
//     i=xArr.length;
//     console.log(i);
// });

// while (i<xArr.length ){
//         tArr.push(xArr[i], xArr[i+1], xArr[i+2]);
//         tArr.push(yArr[i], yArr[i+1], yArr[i+2]);
//         tArr.push(zArr[i], zArr[i+1], zArr[i+2]);
//     console.log(tArr);
//     i++;
//
// }


//Array [  ] Array [  ]