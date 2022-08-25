
let tasks;

if(localStorage.getItem('task') != null) {
    tasks= JSON.parse(localStorage.getItem('task'));
}
else {
    tasks=[];
}


let cards=document.getElementById("form");
cards.addEventListener("submit",formLocal);
function formLocal(e){
    let select =document.getElementById("taskDrop").value;
    let title = document.getElementById("taskTitle").value;
    let desc = document.getElementById("taskDesc").value;
    e.preventDefault()
    let task = {
        title : title,
        priority : select,
        description : desc,

    }
    

    
    tasks.push(task);
    localStorage.setItem("task" , JSON.stringify(tasks))
    
   document.forms[0].reset();
}


