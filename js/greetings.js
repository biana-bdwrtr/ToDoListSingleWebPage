const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); //h1

const HIDDEN_CLASS_NAME = "hidden"; //CSS => display: none;
const USER_NAME_KEY = "userName";  //localStorage key

//#login-form submit callback
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    localStorage.setItem(USER_NAME_KEY, loginInput.value);
    paintGreetings();
}

//로그인 화면 표시
function paintGreetings() {
    const savedUsername = localStorage.getItem(USER_NAME_KEY);
    greeting.innerHTML = `Hello, ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
}

const savedUsername = localStorage.getItem(USER_NAME_KEY);

//localStorage에 USER_NAME_KEY 유무로 로그인 처리
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
    loginForm.classList.add(HIDDEN_CLASS_NAME);
}