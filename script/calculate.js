function evenClick() {
  const oddSection = document.getElementById("even");
  const evenSection = document.getElementById("odd");
  oddSection.removeAttribute("hidden");
  evenSection.setAttribute("hidden", true);
}
function oddClick() {
  const oddSection = document.getElementById("even");
  const evenSection = document.getElementById("odd");
  evenSection.removeAttribute("hidden");
  oddSection.setAttribute("hidden", true);
}

// Odd number calculate related function
function btn() {
  const inputNumber1 = inputAndValueinitTypeNumber("inputOdd1");
  const inputNumber2 = inputAndValueinitTypeNumber("inputOdd2");
  const array = [];
  for (let i = inputNumber1; i <= inputNumber2; i++) {
    if (i % 2 === 1) {
      console.log(i);
      array.push(i);
    }
  }
  const oddNumber = array.length;
  let sum = 0;
  for (let arra of array) {
    sum = sum + arra;
  }

  document.getElementById("oddNumbers").innerText = array;
  document.getElementById("odds").innerText = oddNumber;
  document.getElementById("oddsSum").innerText = sum;
}

// Even number calculate related function;

function evenBtn() {
  const inputNumber1 = inputAndValueinitTypeNumber("inputEven1");
  const inputNumber2 = inputAndValueinitTypeNumber("inputEven2");
  const array = [];
  for (let i = inputNumber1; i <= inputNumber2; i++) {
    if (i % 2 === 0) {
      console.log(i);
      array.push(i);
    }
  }
  const oddNumber = array.length;
  let sum = 0;
  for (let arra of array) {
    sum = sum + arra;
  }

  document.getElementById("evenNumbers").innerText = array;
  document.getElementById("evens").innerText = oddNumber;
  document.getElementById("evensSum").innerText = sum;
}

function inputAndValueinitTypeNumber(id) {
  const input = document.getElementById(id).value;
  const inputNumber = parseInt(input);
  return inputNumber;
}
