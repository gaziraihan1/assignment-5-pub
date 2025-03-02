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

/// Blog page redirection
document.getElementById('blog-page').addEventListener('click', function () {
  console.log("Redirecting to blog page");
  window.location.href = 'blog.html';
});

// Main page redirection
document.getElementById('home-page').addEventListener('click', function() {
  window.location.href = 'index.html';
})