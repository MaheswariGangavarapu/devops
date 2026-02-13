let count = 0;
const limit = 10;

const counter = document.getElementById("counter");
const message = document.getElementById("message");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", function () {
    if (count < limit) {
        count++;
        counter.textContent = count;
        message.textContent = "";
    } else {
        message.textContent = "Limit reached (10)";
    }
});

decreaseBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
        counter.textContent = count;
        message.textContent = "";
    }
});

resetBtn.addEventListener("click", function () {
    count = 0;
    counter.textContent = count;
    message.textContent = "";
});
