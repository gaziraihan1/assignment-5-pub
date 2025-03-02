const getTaskBtn = document.querySelectorAll('.task-btn');
let nullVar = null;
const times = new Date();
let hour = times.getHours();
if(hour === 13) {
    hour = 1
}
else if(hour === 14) {
    hour = 2
}
else if(hour === 15) {
    hour = 3
}
else if(hour === 16) {
    hour = 4
}
else if(hour === 17) {
    hour = 5
}
else if(hour === 18) {
    hour = 6
}
else if(hour === 19) {
    hour = 7
}
else if(hour === 20) {
    hour = 8
}
else if(hour === 21) {
    hour = 9
}
else if(hour === 22) {
    hour = 10
}
else if(hour === 23) {
    hour = 11
}
else if(hour === 24) {
    hour = 12
}
else{
    hour = hour
};

const minute = times.getMinutes();
const second = times.getSeconds();
const amPm = hour >= 12 ? 'PM' : 'AM';
for (let btn of getTaskBtn) {
    btn.addEventListener('click', function (event) {
        btn.setAttribute("disabled", "true");
        btn.classList.add('bg-gray-500', 'text-gray-300');
        btn.classList.remove('cursor-pointer');
        getAssignedNumber('assigned-number', 'total-checked');
        alert('Board updated successfully');
        if(btn === getTaskBtn[getTaskBtn.length - 1]){
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

