/**steps.........
 * objectives: get the value of b and h, then calculate the area by using the given formula. finally, display the result of area.
 * step 1: get the base value of triangle
 * step 2: added an id in the base input field
 * step 3: use the getElementById to access the input field
 * step 4: get value form the input field (this stage input value remains as a string value)
 * step 5: convert the value to number using paseFloat
 * 
 */

function calculateTriangleArea() {
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(typeof base, 'base =', base);

    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const height = parseFloat(triangleHeightInput.value);
    console.log(typeof height, 'height =', height);

    // calculate triangle area
    const area = 0.5 * base * height;
    // console.log('total area is:', area);

    // display triangle area
    const displayTriangleArea = document.getElementById('triangle-area');
    displayTriangleArea.innerText = area;
}