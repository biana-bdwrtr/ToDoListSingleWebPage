const clock = document.querySelector("h2#clock");

clock.innerHTML = "00:00:00"; //시:분:초, 각 2자리

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock(); //최초 초기화
setInterval(getClock, 1000); // 1초마다 갱신