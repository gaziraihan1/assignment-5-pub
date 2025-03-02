const getTaskBtn = document.querySelectorAll('.task-btn');
let buttonClicked = [];
const times = new Date();
let hour = ((times.getHours() % 12 || 12) < 10 ? '0' : '') + (times.getHours() % 12 || 12);
const minute = (times.getMinutes() < 10? '0':'') + times.getMinutes();
const second = (times.getSeconds() < 10? '0':'') + times.getSeconds();
const amPm = times.getHours() >= 12 ? 'PM' : 'AM';

for (let btn of getTaskBtn) {
    btn.addEventListener('click', function (event) {
        btn.setAttribute("disabled", "true");
        btn.classList.add('bg-gray-500', 'text-gray-300');
        btn.classList.remove('cursor-pointer');
        getAssignedNumber('assigned-number', 'total-checked');
        alert('Board updated successfully');
        if(!buttonClicked.includes(btn)){
            buttonClicked.push(btn)
        };
        if(buttonClicked.length === getTaskBtn.length){
            alert('Congrats!!! You have completed all the current task')
        }
        const parentDiv = event.target.parentNode.parentNode;
        const getHeading = parentDiv.querySelector('h1');
        const h1 = getHeading.innerText;
        activityFunction('history-container','p',`You have complete the task ${h1} at ${hour}:${minute}:${second} ${amPm}`);
       console.log(event.target)
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
function getLastBtn(){
    if(nullVar) {
        alert('Congrats!!! You have completed all the current task');
        return nullVar;
    }
}