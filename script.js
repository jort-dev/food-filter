const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const startSlider = document.getElementById("monthRangeStart");
const endSlider = document.getElementById("monthRangeEnd");
const rangeDisplay = document.getElementById("rangeDisplay");

function updateRange() {
    let start = parseInt(startSlider.value);
    let end = parseInt(endSlider.value);

    if (start > end) {
        [start, end] = [end, start]; // Ensure start is always before end
    }

    rangeDisplay.textContent = `${months[start - 1]} - ${months[end - 1]}`;
}

startSlider.addEventListener("input", updateRange);
endSlider.addEventListener("input", updateRange);

updateRange();
