function customizePage() {
  var userName = document.getElementById("name").value;
  var userMessage = document.getElementById("message").value;
  var bgColor = document.getElementById("color").value;

  if (userName != "") {
    document.getElementById("nameUser").innerHTML = "Hello " + userName + "!";
  }

  if (userMessage != "") {
    document.getElementById("messageUser").innerHTML = userMessage;
  }

  document.body.style.backgroundColor = bgColor;
}

function addtodo() {
  var todoText = document.getElementById("todo").value;

  if (todoText != "") {
    var newItem = document.createElement("li");
    newItem.innerHTML = todoText;
    document.getElementById("todoList").appendChild(newItem);

    document.getElementById("todoBox").value = "";
  }
}