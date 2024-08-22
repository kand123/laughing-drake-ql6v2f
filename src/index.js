import "./styles.css";

// initial todos
// DO NOT EDIT THIS ARRAY
// You may add props to objects if needed.
let todos = [
  {
    todoID: 0,
    todoText: "Finish Homework",
    todoComplete: false,
  },
  {
    todoID: 1,
    todoText: "Walk the dog",
    todoComplete: true,
  },
  {
    todoID: 2,
    todoText: "Clean my room",
    todoComplete: false,
  },
];

let buttonEvent = document.getElementById("inputButton");
buttonEvent.addEventListener("click", appendList);

let appendList = function () {
  let inputElement = document.getElementById("inputFieldBlank");
  let todoInput = inputElement.value;
  let newValue = {};

  newValue.todoID = todos.length;
  newValue.todoText = todoInput;
  newValue.todoComplete = false;

  todos.push(newValue);
  document
    .getElementByClassName("todoList")
    .getElementsByTagName("li").innerHTML = todoInput;
};
