const TaskInput = document.querySelector("#taskInput");
const taskAddBtn = document.querySelector("#taskAddBtn");
const taskContainer = document.querySelector(".taskContainer");

const taskArr = JSON.parse(localStorage.getItem("Task")) || [];

const num = 4;
const data = taskArr.find((el) => el.taskId === num);

console.log(data);

taskArr.map((el) => {
    Task(el.taskValue,el.taskId)
})

function addObj(TaskData,id){
    const obj = {
        taskValue:TaskData,
        taskId:id,
        taskComplete:false
    }
    taskArr.push(obj);
    localStorage.setItem("Task",JSON.stringify(taskArr));
    console.log(taskArr);
}


function Task(value,ID){
    const Task = document.createElement("div");
    Task.classList.add("task","listContainer");
    Task.dataset.taskId = ID;
    const checkBox = document.createElement("div");
    checkBox.classList.add("checkbox");
    const inputBox = document.createElement("input");
    inputBox.value = value;
    inputBox.setAttribute("disabled","true");

    const editBtn = document.createElement("button");
    editBtn.setAttribute("id","editBtn");
    editBtn.textContent = "Edit";
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id","deleteBtn");
    deleteBtn.textContent = "Delete";

    taskContainer.appendChild(Task);
    Task.appendChild(checkBox);
    Task.appendChild(inputBox);
    Task.appendChild(editBtn);
    Task.appendChild(deleteBtn);

    checkBox.addEventListener("click",() => {
        // checkBox.parentElement.classList.toggle("complete");
        const key = checkBox.parentElement.dataset.taskId;
        const checkboxDetail = taskArr.find((el) => el.taskId == key);
        if(!checkboxDetail.taskComplete){
            checkboxDetail.taskComplete = true;
            // checkBox.parentElement.classList.add("complete");
            console.log(checkboxDetail);
            localStorage.setItem("Task",JSON.stringify(taskArr));
        }else{
            checkboxDetail.taskComplete = false;
            // checkBox.parentElement.classList.remove("complete");
            console.log(checkboxDetail);
            localStorage.setItem("Task",JSON.stringify(taskArr));
        }
    })

    editBtn.addEventListener("click",() => {
        const editInput = inputBox.disabled = !inputBox.disabled;
        if(!editInput){
            inputBox.focus();
            editBtn.textContent = "Save";
        }else{
            editBtn.textContent = "Edit";
        }
    })

    deleteBtn.addEventListener("click", () => {
        deleteBtn.parentElement.remove();
    })

}

Task("This is demo task")

taskAddBtn.addEventListener("click",() => {
    if(!TaskInput.value){
        console.log("Input Value is Empty");
    }else{
        Task(TaskInput.value)
        addObj(TaskInput.value,taskArr.length+1)
        TaskInput.value = "";
    }             
})

TaskInput.addEventListener("keydown",(e) => {
    if(e.key == "Enter"){
        if(!TaskInput.value){
            console.log("Input Value is Empty");
        }else{
            Task(TaskInput.value); 
            TaskInput.value = "";
        }
    }
})

taskFilter.addEventListener("change",(e) => {
    console.log(e.target.value);
})

document.addEventListener("keydown",(e) => {
    console.log(e.key);
})