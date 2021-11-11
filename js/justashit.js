function createMatrixInputs(node, width, height) {
    var matrixInputs = []
    for (var i = 0; i < height; i += 1) {
        var row = node.insertRow()
        var inputsRow = []
        matrixInputs.push(inputsRow)
        for (var j = 0; j < width; j += 1) {
            var cell = row.insertCell()
            var input = document.createElement('input')
            inputsRow.push(input)
            input.type = 'text'
            input.style.width = '2em'
            cell.appendChild(input)
        }
    }
    return matrixInputs
}

function getMatrixValues(matrixInputs) {
    var res = []
    for (var i = 0; i < matrixInputs.length; i += 1) {
        var inputsRow = matrixInputs[i]
        var valuesRow = []
        for (var j = 0; j < inputsRow.length; j += 1) {
            var input = inputsRow[j]
            var valueNum = parseFloat(input.value)
            if (isNaN(valueNum)) { // те строковые значения, которые не смог распарсить в число заменяю на 0
                valueNum = 0
            }
            valuesRow.push(valueNum)
        }
        res.push(valuesRow)
    }
    return res
}

// Само приложение
var submitButton = document.querySelector('button')
var matrixInputs = createMatrixInputs(document.querySelector('.matrix-inputs'), 10, 6)
submitButton.addEventListener('click', function() {
    var matrix = getMatrixValues(matrixInputs)
    console.log('matrix', matrix)
}, false)


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
