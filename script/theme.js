function themeChanger() {
    const randomNumber = Math.floor((Math.random() * 10) + 1);
    const fullLayout = document.getElementById('body');
    if(randomNumber === 1){
        fullLayout.style.backgroundColor = '#434343';
    }
    else if(randomNumber === 2) {
        fullLayout.style.backgroundColor = '#121212';

    }
    else if(randomNumber === 3) {
        fullLayout.style.backgroundColor = '#e286b5';
    }
    else if(randomNumber === 4) {
        fullLayout.style.backgroundColor = '#e0e0e0';
    }
    else if(randomNumber === 5) {
        fullLayout.style.backgroundColor = '#898989';
    }
    else if(randomNumber === 6) {
        fullLayout.style.backgroundColor = '#2f2f99';
    }
    else if(randomNumber === 7) {
        fullLayout.style.backgroundColor = '#6f6f6f';
    }
    else if(randomNumber === 8){
        fullLayout.style.backgroundColor = '#767600';
    }
    else if(randomNumber === 9) {
        fullLayout.style.backgroundColor = '#53254252';
    }
    else if(randomNumber === 10) {
        fullLayout.style.backgroundColor = '#b0b0b0';
    }
};

