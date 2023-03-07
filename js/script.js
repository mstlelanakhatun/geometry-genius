let serial = 0;

// Blog Section
document.getElementById('Blog-Btn').addEventListener('click', function () {
    window.location.href = 'blog.html'
})

// Card - 1
document.getElementById('card-1').addEventListener('mouseenter', function () {
    const id = document.getElementById('card-1');
    const randomColor = getRandomColor();
    id.style.background = randomColor;
})

document.getElementById('triangle-card').addEventListener('click', function () {
    const returnedValue = GetInputDataByID('triangle-input-field', 'triangle-input-field-Second');
    console.log(returnedValue)
    const total = 0.5 * returnedValue.firstInputValue * returnedValue.SecondInputValue;
    const card = cardByID('Triangle-name');
    (returnedValue.GetCallFirstInputValue).value = '';
    (returnedValue.GetCallSecondInputValue).value = '';
    if ((returnedValue.firstInputValue) <= 0 || (returnedValue.SecondInputValue) <= 0) {
        const alertForNumber = alert('Please Input Positive Number');
        return alertForNumber;
    }
    if (isNaN(total)) {
        const alertForNumber = alert('Please Input Positive Number');
        return alertForNumber;
    }
    serial += 1;
    displayData(card, total);
})

// Card - 2

document.getElementById('card-2').addEventListener('mouseenter', function () {
    const id = document.getElementById('card-2');
    const randomColor = getRandomColor();
    id.style.background = randomColor;
})

document.getElementById('Rectangle-card').addEventListener('click', function () {
    const returnedValue = GetInputDataByID('Rectangle-input-field', 'Rectangle-input-field-Second');
    const total = returnedValue.firstInputValue * returnedValue.SecondInputValue;
    const card = cardByID('Rectangle-name');
    (returnedValue.GetCallFirstInputValue).value = '';
    (returnedValue.GetCallSecondInputValue).value = '';
    if ((returnedValue.firstInputValue) <= 0 || (returnedValue.SecondInputValue) <= 0) {
        const alertForNumber = alert('Please Input Positive Number');
        return alertForNumber;
    }
    if (isNaN(total)) {
        const alertForNumber = alert('Please Input Positive Number');
        return alertForNumber;
    }
    serial += 1;
    displayData(card, total);
})

// Card - 3

document.getElementById('card-3').addEventListener('mouseenter', function () {
    const id = document.getElementById('card-3');
    const randomColor = getRandomColor();
    id.style.background = randomColor;
})

document.getElementById('Parallelogram-card').addEventListener('click', function () {
    const returnedValue = GetInputDataByID('Parallelogram-input-field', 'Parallelogram-input-field-Second');
    const total = returnedValue.firstInputValue * returnedValue.SecondInputValue;
    const card = cardByID('Parallelogram-name');
    (returnedValue.GetCallFirstInputValue).value = '';
    (returnedValue.GetCallSecondInputValue).value = '';
    if ((returnedValue.firstInputValue) <= 0 || (returnedValue.SecondInputValue) <= 0) {
        const alertForNumber = alert('Please Input Positive Number');
        return alertForNumber;
    }
    if (isNaN(total)) {
        const alertForNumber = alert('Please Input Positive Number');
        return alertForNumber;
    }
    serial += 1;
    displayData(card, total);
})

// Card - 4

document.getElementById('card-4').addEventListener('mouseenter', function () {
    const id = document.getElementById('card-4');
    const randomColor = getRandomColor();
    id.style.background = randomColor;
})

document.getElementById('Rhombus-card').addEventListener('click', function () {
    const returnedValue = GetInputDataByID('Rhombus-input-field', 'Rhombus-input-field-Second');
    const total = 0.5 * returnedValue.firstInputValue * returnedValue.SecondInputValue;
    const card = cardByID('Rhombus-name');
    (returnedValue.GetCallFirstInputValue).value = '';
    (returnedValue.GetCallSecondInputValue).value = '';
    if ((returnedValue.firstInputValue) <= 0 || (returnedValue.SecondInputValue) <= 0) {
        const alertForNumber = alert('Please Input Positive Number');
        return alertForNumber;
    }
    if (isNaN(total)) {
        const alertForNumber = alert('Please Input Positive Number');
        return alertForNumber;
    }
    serial += 1;
    displayData(card, total);
})

// Card - 5

document.getElementById('card-5').addEventListener('mouseenter', function () {
    const id = document.getElementById('card-5');
    const randomColor = getRandomColor();
    id.style.background = randomColor;
})

document.getElementById('Pentagon-card').addEventListener('click', function () {
    const returnedValue = GetInputDataByID('Pentagon-input-field', 'Pentagon-input-field-Second');
    const total = 0.5 * returnedValue.firstInputValue * returnedValue.SecondInputValue;
    const card = cardByID('Pentagon-name');
    (returnedValue.GetCallFirstInputValue).value = '';
    (returnedValue.GetCallSecondInputValue).value = '';
    if ((returnedValue.firstInputValue) <= 0 || (returnedValue.SecondInputValue) <= 0) {
        const alertForNumber = alert('Please Input Positive Number');
        return alertForNumber;
    }
    if (isNaN(total)) {
        const alertForNumber = alert('Please Input Positive Number');
        return alertForNumber;
    }
    serial += 1;
    displayData(card, total);
})

// Card - 6

document.getElementById('card-6').addEventListener('mouseenter', function () {
    const id = document.getElementById('card-6');
    const randomColor = getRandomColor();
    id.style.background = randomColor;
})

document.getElementById('Ellipse-card').addEventListener('click', function () {
    const returnedValue = GetInputDataByID('Ellipse-input-field', 'Ellipse-input-field-Second');
    const totalAndFixed = 3.14159 * returnedValue.firstInputValue * returnedValue.SecondInputValue;
    const total = totalAndFixed.toFixed(2);
    const card = cardByID('Ellipse-name');
    (returnedValue.GetCallFirstInputValue).value = '';
    (returnedValue.GetCallSecondInputValue).value = '';

    if ((returnedValue.firstInputValue) <= 0 || (returnedValue.SecondInputValue) <= 0) {
        const alertForNumber = alert('Please Input Positive Number');
        return alertForNumber;
    }
    if (isNaN(total)) {
        const alertForNumber = alert('Please Input Positive Number');
        return alertForNumber;
    }
    serial += 1;
    displayData(card, total);
})


// Input Data 

function GetInputDataByID(InputData, SecondInputData) {
    const GetCallFirstInputValue = document.getElementById(InputData);
    const firstInputValueString = document.getElementById(InputData).value;
    const firstInputValue = parseFloat(firstInputValueString);

    const GetCallSecondInputValue = document.getElementById(SecondInputData);
    const SecondInputValueString = document.getElementById(SecondInputData).value;
    const SecondInputValue = parseFloat(SecondInputValueString);
    const returnedValue = {
        GetCallFirstInputValue: GetCallFirstInputValue,
        GetCallSecondInputValue: GetCallSecondInputValue,
        firstInputValue: firstInputValue,
        SecondInputValue: SecondInputValue,
    };
    return returnedValue;
}
// Card  Text 
function cardByID(card) {
    const cards = document.getElementById(card).innerText;
    return cards;
}

// Display

function displayData(card, total) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${card}</td>
      <td>${total}<span>cm<sup>2</sup></span></td>
      <td>
      <button class=" text-white px-3 py-1 rounded bg-sky-500 ">Covert to m<sup>2</sup></button>
      </td>
    `;
    container.appendChild(tr);
}

//   Random Color Generator 

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
