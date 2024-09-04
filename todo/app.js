const addButton = document.querySelector(".main-section button");

let parentDiv = document.querySelector(".main-section");

let selectButton = document.querySelectorAll(".list-content");

let log = document.querySelector(".log-section ul");


console.log(selectButton);

//creates task element
function getElement(text) {
  let newDiv = document.createElement("div");
  newDiv.className = "list-item";

  let newPara = document.createElement("p");
  newPara.className = "list-content";
  newPara.innerText = text;

  newButton = document.createElement("button");
  newButton.innerText = "x";

  newDiv.appendChild(newPara);
  newDiv.appendChild(newButton);

  return newDiv;
}

//mark complete function
function markCompleted(element) {
  element.classList.toggle("list-content-completed");
  console.log("hi");
  saveData()
}
//delete function
function deleteTask(element){
    element.remove();
    saveData()
}




// to add a task
addButton.addEventListener("click", () => {
  let taskText = document.querySelector(".main-section input");
  newElement = getElement(taskText.value);
  log.appendChild(newElement);
  taskText.value='';
  saveData();
});

//to mark select and delete
document.querySelector(".log-section ul").addEventListener('click',(evt)=>{
    if(evt.target.classList.contains("list-content")){
        markCompleted(evt.target);
    }
    else if(evt.target.tagName==='BUTTON'){
        deleteTask(evt.target.parentElement);
    }
})


function saveData(){
    localStorage.setItem('data',log.innerHTML);
}

function showData(){
    log.innerHTML=localStorage.getItem('data');
}

showData();