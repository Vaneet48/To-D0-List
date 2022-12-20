var listHead = document.querySelector("ol")

function addTask(text) {
    var item = document.createElement("li")
    item.className = "kaam"
    item.append(text)
    listHead.appendChild(item)
}

var farm = document.querySelector("form")

farm.addEventListener("submit", function(e) {
    e.preventDefault()
    var task = farm.elements.task
    addTask(task.value)
    task.value = ""
})

listHead.addEventListener("dblclick", function(e) {
    if(e.target.nodeName == "LI") {
        e.target.classList.add("strike")
    }
})


$(".clear").click(function() {
    $(".strike").remove()
})

$(".empty").click(function() {
    $(".kaam").remove();
})


$(".remove").click(function() {
    $("li")[$("li").length - 1].remove();
})