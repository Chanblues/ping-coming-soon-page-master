console.log("Helo World!");

let form = document.getElementById('form');
let userinput = document.getElementById('uinput');
let error = document.getElementById('err');

let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let fitered_uinput = userinput.value.trim();

    if (fitered_uinput.match(regEx)) {
        error.innerHTML = "";
        userinput.style.borderColor = 'hsl(223, 100%, 88%)';   
    } else {
        userinput.style.borderColor = 'hsl(354, 100%, 66%)';
        userinput.placeholder = 'example@email/com';
        userinput.classList.add('black');
        error.innerHTML = "Please provide a vaid email address";
    }
})


 
