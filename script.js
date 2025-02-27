const TaskInput = document.querySelector("#taskInput");
const taskAddBtn = document.querySelector("#taskAddBtn");
const taskFilter = document.querySelector("#taskFilter");
const taskContainer = document.querySelector(".taskContainer");


function Task(value){
    const Task = document.createElement("div");
    Task.classList.add("task","listContainer");
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
        checkBox.parentElement.classList.toggle("complete");
    })

    editBtn.addEventListener("click",() => {
        const editInput = inputBox.disabled = !inputBox.disabled;
        if(!editInput){
            inputBox.focus();
            editBtn.textContent = "Save"
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