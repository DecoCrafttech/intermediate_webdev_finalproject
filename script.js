document.getElementById("calculateBtn").addEventListener("click", calculateInterest);

function calculateInterest() {
    const principal = Number(document.getElementById("principal").value);
    const rate = Number(document.getElementById("rate").value);
    const time = Number(document.getElementById("time").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById("result").textContent = "Please enter valid numbers";
        return;
    }

    const interest = (principal * rate * time) / 100;
    document.getElementById("result").textContent =
        `Simple Interest is ₹${interest}`;
}

module.exports = calculateInterest;
