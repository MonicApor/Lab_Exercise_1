function addListItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("todo").value;
    var t = document.createTextNode(inputValue);
    li.append(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("list").appendChild(li);
    }

    document.getElementById("todo").value = "";
}