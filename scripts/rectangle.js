function calculateRectangleArea() {
    const widthInput = document.getElementById('rectangle-width');
    const width = parseFloat(widthInput.value);

    const lengthInput = document.getElementById('rectangle-length');
    const length = parseFloat(lengthInput.value);

    // total area 
    const area = width * length;

    // display the area
    const displayAreaText = document.getElementById('rectangle-area');
    displayAreaText.innerText = area;
}