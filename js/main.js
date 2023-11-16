let addTaskBtn = document.querySelector("#btn-submit") ; 
let taskInput = document.querySelector(".card .card-body .form-group input") ; 
let allTasks = document.querySelector(".card-2 .card-body-2 .all-tasks") ; 



addTaskBtn.addEventListener("click" , function () {
    let task  = taskInput.value ; 

    let taskLength = taskInput.value.length ; 

    if ( task.trim() == ""  || taskLength <3  || taskLength>30) {
        if (taskLength <3) {
            Swal.fire({
                icon: "error",
                text:" You Must Enter more than 3 cha"  ,
            });
        }

        if (taskLength >30 ) {
            Swal.fire({
                icon: "error",
                text:" You must enter less than thirty characters "  ,
            });
        }

        if ( task.trim() == "") {
            Swal.fire({
        icon: "error",
        text:" You Must Enter Data"  ,
    });

        }
    
    } else {
        allTasks.innerHTML += ` <div class = 'alert alert-info'> ${task} 
        <i class="delete float-right fa-solid fa-rectangle-xmark"></i> 
        </div>` ; 
    }



})


document.addEventListener("click" , function (e) {
    if (e.target.classList.contains('delete') ) {
        e.target.parentElement.remove()  ; 
    }
    
})

