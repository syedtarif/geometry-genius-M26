// function calculateParallelogramArea() {
//     const baseInput = document.getElementById('parallelogram-base');
//     const base = parseFloat(baseInput.value);

//     const heightInput = document.getElementById('parallelogram-height');
//     const height = parseFloat(heightInput.value);

//     // total area
//     const area = base * height;

//     // display the area
//     const displayAreaText = document.getElementById('parallelogram-area');
//     displayAreaText.innerText = area;
// }

function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');

    const height = getInputValue('parallelogram-height');

    const area = base * height;

    displayText('parallelogram-area', area);

    // displayText('parallelogram-area').innerText = area;

    // console.log(area, 'this is form 18no line', 'function:', displayText('parallelogram-area'));
}

function getInputValue(inputId) {
    const getInput = document.getElementById(inputId);
    const inputValue = parseFloat(getInput.value);
    return inputValue;
}

function displayText(inputId, area) {
    const displayAreaText = document.getElementById(inputId);
    displayAreaText.innerText = area;
}