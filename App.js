let todoList = [
  {
    items: "Buy Milk",
    dueDate: "31/05/2024",
  },
  {
    items: "Buy Bread",
    dueDate: "31/05/2024",
  },
];
displayItems();

function addtodo() {
  let inputField = document.querySelector("#todo-input");
  let todoItems = inputField.value;

  let dateField = document.querySelector("#todo-date");
  let todoDate = dateField.value;

  todoList.push({ items: todoItems, dueDate: todoDate });
  inputField.value = "";
  dateField.value = "";
  displayItems();
}
function displayItems() {
  let containerItem = document.querySelector(".todo-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let { items, dueDate } = todoList[i];

    newHtml += `
        <span>${items}</span>
        <span>${dueDate}</span>
        <button id="btn-delete" onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
        `;
  }
  containerItem.innerHTML = newHtml;
}
