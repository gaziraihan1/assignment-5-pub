document.getElementById('theme-changer').addEventListener('click',function () {
    themeChanger();
});
// Time set in header
const newDate = new Date();
const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const dayName = days[newDate.getDay()];
const day = newDate.getDate();
const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
const month = months[newDate.getMonth()];
const year = newDate.getFullYear();
document.getElementById('date').innerText = `${dayName}  ,`;
document.getElementById('full-date').innerText = `${month} ${day} ${year}`;
//Main page to blog page
document.getElementById('blog-page').addEventListener('click', function () {
  window.location.href = 'blog.html';
});
