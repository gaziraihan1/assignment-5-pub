const getTaskBtn = document.querySelectorAll('.task-btn');
let nullVar = null;
const times = new Date();
let hour = times.getHours();
const minute = times.getMinutes();
const second = times.getSeconds();
const amPm = hour >= 12 ? 'PM' : 'AM';
for (let btn of getTaskBtn) {
    btn.addEventListener('click', function () {
        btn.setAttribute("disabled", "true");
        btn.classList.add('bg-gray-500', 'text-gray-300');
        btn.classList.remove('cursor-pointer');
        getAssignedNumber('assigned-number', 'total-checked');
        alert('Board updated successfully');
        if(btn === getTaskBtn[getTaskBtn.length - 1]){
            alert('Congrats!!! You have completed all the current task')
        }
        const parentDiv = btn.parentElement;
        const getHeading = parentDiv.previousElementSibling.previousElementSibling;
        const h1 = getHeading.innerText;
        activityFunction('history-container','p',`You have complete the task ${h1} at ${hour}:${minute}:${second} ${amPm}`);
       
    });
};
function getAssignedNumber(id1,id2) {
    const assignedNumber = document.getElementById(id1).innerText;
    const assigned = document.getElementById(id2).innerText;
    const assigned2 = parseInt(assigned);
    const convertNumber = parseInt(assignedNumber);
    document.getElementById(id1).innerText = convertNumber - 1;
    document.getElementById(id2).innerText = assigned2 + 1; 
};

