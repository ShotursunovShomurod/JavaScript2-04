import { USERS } from "../db/server.js";

const btnOpen = document.querySelector(".btn__open");
const btnClose = document.querySelector(".btn__close");
const popap = document.querySelector(".popap");
const overlay = document.querySelector(".overlay");

const model = document.querySelector(".model");
const modelName = document.querySelector(".model__name");
const modelUsername = document.querySelector(".model__username-modal");
const modelPassword = document.querySelectorAll(".model__password")[1];
const modelPasswordConfirm = document.querySelector(".model__password-confirm");


const wrapper = document.querySelector(".wrapper")

function creatElement(date){
while(wrapper.firstChild){
  wrapper.firstChild.remove( )
}
  date.forEach(user => {
    let card = document.createElement("div")
    card.innerHTML = `
    <div class ="card__circle"></div>
    <h3>${user.name}</h3>
    <p>${user.username}</p>
    <p>${user.password}</p>`
    wrapper.appendChild(card)
  })
}
creatElement(USERS)


model.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = modelName.value;
    let username = modelUsername.value;
    let password = modelPassword.value;
    let passwordConfirm = modelPasswordConfirm.value;

    // Clear previous error borders
    modelPassword.style.border = "";
    modelPasswordConfirm.style.border = "";

    let existUser = USERS.findIndex((user) => user.username === username);
    if (existUser >= 0) {
        return alert("Bu username mavjud");
    }
    if (password !== passwordConfirm) {
        modelPassword.style.border = "1px solid red";
        modelPasswordConfirm.style.border = "1px solid red";
        return alert("Parol bir xil emas");
    }

    let newUser = {
        id: new Date().getTime(),
        name,
        username,
        password,
    };

    USERS.push(newUser);
    console.log(USERS);

    model.reset();
    popap.style.display = "none";
    creatElement(USERS)
});

btnOpen.addEventListener("click", () => {
    popap.style.display = "flex";
});

btnClose.addEventListener("click", () => {
    popap.style.display = "none";
});

overlay.addEventListener("click", () => {
    popap.style.display = "none";
});
