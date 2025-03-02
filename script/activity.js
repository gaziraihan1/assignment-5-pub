document.getElementById('clear-history').addEventListener('click', function() {
    const container = document.getElementById('history-container');
    container.innerHTML = '';
});

//ACTIVITY PAGE TASK
function activityFunction(id,createElement,heading) {
    const activityContainer = document.getElementById(id);
    const p = document.createElement(createElement);
    p.classList.add('text-base', 'mt-9', 'mx-5', 'bg-gray-100', 'p-3' ,'rounded-lg', 'font-normal');
    p.innerText = heading;
    activityContainer.appendChild(p);
}