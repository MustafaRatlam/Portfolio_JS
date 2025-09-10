let count = 0;
const countEl = document.getElementById("count");


document.getElementById("inc").onclick = () => {
count++;
countEl.textContent = count;
};


document.getElementById("dec").onclick = () => {
count--;
countEl.textContent = count;
};


document.getElementById("reset").onclick = () => {
count = 0;
countEl.textContent = count;
};