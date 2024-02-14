//-------------------------all files are calculated here by the help of function..............
/**triangle part calculation---------------------------- */
function calculateTriangleArea() {
    const base = getInputId('triangle-base');
    const height = getInputId('triangle-height');

    console.log(typeof base, base)
    console.log(typeof height, height);
    if (isNaN(base) === true || isNaN(height) === true) {
        return alert('number is accepted only')
    }

    const area = 0.5 * base * height;
    console.log(typeof area, area)

    displayResult('triangle-area', area);
}

/**rectangle part calculation---------------------------- */
function calculateRectangleArea() {
    const width = getInputId('rectangle-width');
    const length = getInputId('rectangle-length');
    const area = width * length;

    displayResult('rectangle-area', area);
}

/**parallelogram part calculation---------------------------- */
function calculateParallelogramArea() {
    const base = getInputId('parallelogram-base');
    const height = getInputId('parallelogram-height');

    const area = base * height;

    displayResult('parallelogram-area', area);
}

//common function for getting the id
function getInputId(idName) {
    const getId = document.getElementById(idName);
    const inputValue = parseFloat(getId.value);
    getId.value = '';

    return inputValue;
}

// common function for displaying the total
function displayResult(inputId, area) {
    const getDisplayId = document.getElementById(inputId);
    getDisplayId.innerText = area;
}