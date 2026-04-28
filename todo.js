const list = document.createElement("ul");
const item1 = document.createElement("li");
item1.textContent = "item 1";
item1.id = "item-1";
item1.dataset.status = "pending";
const item2 = document.createElement("li");
item2.textContent = "item 2";
item2.id = "item-2";
item2.dataset.status = "pending";
const item3 = document.createElement("li");
item3.textContent = "item 3";
item3.id = "item-3";
item3.dataset.status = "pending";
list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);
document.body.appendChild(list);

const button = document.createElement("button");
button.textContent = "Add Item";
document.body.appendChild(button);

button.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `item ${list.children.length + 1}`;
  newItem.id = `item-${list.children.length + 1}`;
  newItem.dataset.status = "pending";
  list.appendChild(newItem);
});

list.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    console.log(e.target.textContent);
    if (e.target.dataset.status === "pending") {
      e.target.dataset.status = "done";
      e.target.style.textDecoration = "line-through";
      e.target.textContent += " (Completed)";
      if (e.target.dataset.status === "done") {
        setTimeout(() => {
          e.target.remove();
        }, 1000);
      }
    }
  }
});
