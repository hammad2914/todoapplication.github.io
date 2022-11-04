var tasklist= document.getElementById("tasklist");



function addtask(){
    var task = document.getElementById("task");
    var li = document.createElement("li")
    var newtask = document.createTextNode(task.value)
    li.appendChild(newtask)

    var todos ={
        todo : task.value
    }
    console.log(todos)



    task.value=""
    
    var span = document.createElement("SPAN")

    var delbtn = document.createElement("button")
    var del = document.createTextNode("Delete")
    delbtn.appendChild(del)
    delbtn.setAttribute("onclick","deltask(this)")
    delbtn.setAttribute("class","btn")
    
    
    var editbtn = document.createElement("button")
    var edit = document.createTextNode("Edit")
    editbtn.appendChild(edit)
    editbtn.setAttribute("onclick","edittask(this)")
    editbtn.setAttribute("class","btn")
    span.appendChild(editbtn)
    span.appendChild(delbtn)
    li.appendChild(span)
    tasklist.appendChild(li)

    
    
    
    
}

function deltask(a){
    a.parentNode.parentNode.remove()
}

function edittask(a){
    var newtask= prompt("Edit Task",a.parentNode.parentNode.firstChild.nodeValue);
    a.parentNode.parentNode.firstChild.nodeValue = newtask
}

function Deleteall(){
    tasklist.innerHTML=""
}