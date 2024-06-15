function calculate(operation) {
  const matrix1 = [
    [parseInt(document.getElementById('m1r1c1').value), parseInt(document.getElementById('m1r1c2').value), parseInt(document.getElementById('m1r1c3').value)],
    [parseInt(document.getElementById('m1r2c1').value), parseInt(document.getElementById('m1r2c2').value), parseInt(document.getElementById('m1r2c3').value)],
    [parseInt(document.getElementById('m1r3c1').value), parseInt(document.getElementById('m1r3c2').value), parseInt(document.getElementById('m1r3c3').value)]
  ];

  const matrix2 = [
    [parseInt(document.getElementById('m2r1c1').value), parseInt(document.getElementById('m2r1c2').value), parseInt(document.getElementById('m2r1c3').value)],
    [parseInt(document.getElementById('m2r2c1').value), parseInt(document.getElementById('m2r2c2').value), parseInt(document.getElementById('m2r2c3').value)],
    [parseInt(document.getElementById('m2r3c1').value), parseInt(document.getElementById('m2r3c2').value), parseInt(document.getElementById('m2r3c3').value)]
  ];

  const resultMatrixArray = [];

  for (let i = 0; i < 3; i++) {
    resultMatrixArray[i] = [];
    for (let j = 0; j < 3; j++) {
      let process = '';
      if (operation === 'add') {
        resultMatrixArray[i][j] = matrix1[i][j] + matrix2[i][j];
        process = `${matrix1[i][j]} + ${matrix2[i][j]}`;
      } else if (operation === 'subtract') {
        resultMatrixArray[i][j] = matrix1[i][j] - matrix2[i][j];
        process = `${matrix1[i][j]} - ${matrix2[i][j]}`; 
      } else if (operation === 'multiply') {
        let sum = 0;
        for (let k = 0; k < 3; k++) {
          sum += matrix1[i][k] * matrix2[k][j];
          if (k < 2) {
            process += `${matrix1[i][k]} * ${matrix2[k][j]} + `;
          } else {
            process += `${matrix1[i][k]} * ${matrix2[k][j]}`;
          }
        }
        resultMatrixArray[i][j] = sum;
      }
      document.getElementById(`result-${i * 3 + j + 1}`).value = resultMatrixArray[i][j];
      document.getElementById(`process-${i * 3 + j + 1}`).innerText = process;
    }
  }

  document.getElementById('result').style.display = 'table';
}

  function clearInputs() {
    const inputs = document.querySelectorAll('.input-matrix');
    inputs.forEach(input => {
      input.value = ''; 
    });
  
    // Clearing result inputs
    const resultInputs = document.querySelectorAll('#result input[type="number"]');
    resultInputs.forEach(resultInput => {
      resultInput.value = '';
    });
  
    // Clearing process results
    const processResults = document.querySelectorAll('#result span');
    processResults.forEach(process => {
      process.innerText = '';
    });
  }