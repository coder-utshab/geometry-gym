// function calculateParallelogramArea() {
    // const baseInput = document.getElementById('parallelogram-base');
    // const baseText = baseInput.value;
    // const base = parseFloat(baseText);
    // console.log(base);


    // const  base = calculateParallelogramArea();
    // console.log(base);



//  }
//  function  getParallelogramBase(){
//  const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
//  }




function calculateParallelogramArea(){


    const base = getInputValueById('parallelogram-base');
    // console.log('base value', base);

    const height = getInputValueById('parallelogram-height')
    // console.log('height value',height);


    const area = base * height;
    console.log('area of the parallelogram is', area);


    setInnerTextById('parallelogram-area', area);
}


function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValuetext = inputField.value;
    const inputValue = parseFloat(inputValuetext);
    // console.log(inputField.value);
    return inputValue;
}


function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

//display triangle by area
// const triangleAreaSpan = document.getElementById('triangle-area');
// triangleAreaSpan.innerText = triangleAreaSpan;