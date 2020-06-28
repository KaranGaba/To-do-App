let textField, addTaskBtn, Tasks;
textField = document.querySelector(".textField");
addTaskBtn = document.querySelector(".addTask");
Tasks = document.querySelector(".Tasks");

addTaskBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let text = textField.value;
  addTask(text);
});
Tasks.addEventListener("click", function (e) {
  let item = e.target;
  if (item.classList.contains("compBtn")) {
    item.parentElement.classList.toggle("completed");
  } else if (item.classList.contains("trashBtn")) {
    item.parentElement.remove();
  }
});

function addTask(text) {
  // create div
  let div = document.createElement("div");
  div.classList.add("theTask");
  Tasks.appendChild(div);
  //add li
  let li = document.createElement("li");
  li.classList.add("taskText");
  li.innerText = text;
  div.appendChild(li);
  //add comp btn
  let compBtn = document.createElement("button");
  compBtn.classList.add("compBtn");
  compBtn.innerHTML = "<i class='fas fa-check-square'></i>";
  div.appendChild(compBtn);
  //add trash btn
  let trashBtn = document.createElement("button");
  trashBtn.classList.add("trashBtn");
  trashBtn.innerHTML = "<i class='fas fa-trash'></i>";
  div.appendChild(trashBtn);
  //clear and focus textField
  textField.value = "";
  textField.focus();
}
