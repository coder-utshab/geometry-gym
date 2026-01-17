/**
 * objective: get  base, height of a triangle . calculate the are by  using the provided 
 * formula. and then display they area.
 * 
 * step-1 get base value of the triangle,
 * step-2 added an id in the base input field
 * step-3 uses getelement by id to access the input field
 * step-4 get value the input field.(value is string now)
 * step-5 convert the value  to a number. use parseFloat
 */

function calculateTriangleArea(){
    //get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseInput)
    console.log(base)

    // console.log(base)

    //get triangle height value
const triangleHeightInput = document.getElementById('triagle-height');
// const triangleHeightText = triangleHeightInput.value;
const triangleHeightText = triangleHeightInput.value;
const height = parseFloat(triangleHeightText)
console.log(height);
}