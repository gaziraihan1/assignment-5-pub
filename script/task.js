const getTaskBtn = document.querySelectorAll('.task-btn');

for (let btn of getTaskBtn) {
    btn.addEventListener('click', () => {
        btn.setAttribute("disabled", "true");
        btn.classList.add('bg-gray-500');
        btn.classList.remove('cursor-pointer');
        getAssignedNumber('assigned-number', 'total-checked');
        alert('Board updated successfully')
    });
}

function getAssignedNumber(id1,id2) {
    const assignedNumber = document.getElementById(id1).innerText;
    const assigned = document.getElementById(id2).innerText;
    const assigned2 = parseInt(assigned);
    const convertNumber = parseInt(assignedNumber);

    document.getElementById(id1).innerText = convertNumber - 1;
    document.getElementById(id2).innerText = assigned2 + 1;
    
}