
const todoDaily = [];
const todoWeekly = [];

function addBtn () {
    let inputValue = document.getElementById("todo-input").value;
    todoDaily.push(inputValue);
    alert("Do you want Daily or Weekly?");
    inputValue = "";

    for (let i = 0; i < todoDaily.length; i++) {
        console.log(todoDaily[i]);
    }
}

/*
    Need addBtn() and a renderList() function. 
    Render needs to be done with DOM.
*/