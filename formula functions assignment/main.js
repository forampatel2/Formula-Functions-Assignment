// Farenheit into Celsius

//HTML Elements
let calcBtnEl = document.getElementById("calcSlope-btn");
let x1InEl = document.getElementById("x1In");
let x2InEl = document.getElementById("x2In");
let y1InEl = document.getElementById("y1In");
let y2InEl = document.getElementById("y2In");
let slopeOutEl = document.getElementById("slope-out");

// Event Listener
calcBtnEl.addEventListener("click", calcSlope);

// Event Function
function calcSlope(){
    // Input
     let x1In = +x1InEl.value;
     let x2In = +x2InEl.value;
     let y1In = +y1InEl.value;
     let y2In = +y2InEl.value;

// Output
     slopeOutEl.innerHTML = slopeFormula(x1In, y1In, x2In, y2In)
}

// Calculate and return the slope
function slopeFormula(x1, y1, x2, y2) {
    return(y2 - y1) / (x2 - x1);

}

