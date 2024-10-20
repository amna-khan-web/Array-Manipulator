let array = [];

function displayArray(){
    let displaySec = document.getElementById("array-display");
    displaySec.innerHTML = '';
    for(let i = 0; i < array.length; i++){
        let element = document.createElement('div');
        element.className = "array-item";
        element.textContent = array[i];
        displaySec.appendChild(element);
    }
}

function addElement(){
    let arrayInput = document.getElementById("input").value;
    if(arrayInput){
        array.push(arrayInput);
        displayArray();
        document.getElementById('input').value = "";
    }
}

function push(){
    array.push(prompt("Write element to push in array.."));
    displayArray();
    document.getElementById("sign-show").textContent =
    "push() array method adds an element at the end.";
}

function pop(){
    array.pop();
    displayArray();
    document.getElementById("sign-show").textContent =
    "pop() array method removes the last element.";
}

function shift(){
    array.shift();
    displayArray();
    document.getElementById("sign-show").textContent =
    "shift() array method removes the first element.";
}

function unshift(){
    array.unshift(prompt("Write element to unshift in array.."));
    displayArray();
    document.getElementById("sign-show").textContent =
    "unshift() array method adds an element at the start.";
}

function slice(){
    let start = parseInt(prompt("Enter start index for slice:"));
    let end = parseInt(prompt("Enter end index for slice:"));
    let slicedArray = array.slice(start, end);
    alert("Sliced Array: " + slicedArray);
}

function splice(){
    let index = parseInt(prompt("Enter index to splice:"));
    let count = parseInt(prompt("Enter number of elements to remove:"));
    let removedItems = array.splice(index, count);
    alert("Removed Items: " + removedItems);
    displayArray();
}
