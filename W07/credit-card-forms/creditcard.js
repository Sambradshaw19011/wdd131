const form = document.querySelector("#creditCardForm");
const message = document.querySelector("#formMessage");

function isExpired(month, year) {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear() % 100;

    if (year < currentYear) return true;
    if (year === currentYear && month < currentMonth) return true;
    return false;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    message.textContent = "";

    const cardNumber = document.querySelector("#cardNumber").value.trim();
    const cardHolder = document.querySelector("#cardHolder").value.trim();
    const month = document.querySelector("#month").value.trim();
    const year = document.querySelector("#year").value.trim();
    const cvc = document.querySelector("#cvc").value.trim();

    if (!/^\d{16}$/.test(cardNumber)) {
        message.textContent = "Card number must be 16 digits.";
        return;
    }

    if (cardNumber !== "1234123412341234") {
        message.textContent = "Card number is not valid.";
        return;
    }

    if (cardHolder === "") {
        message.textContent = "Card holder name is required.";
        return;
    }

    if (!/^\d{2}$/.test(month) || Number(month) < 1 || Number(month) > 12) {
        message.textContent = "Enter a valid expiration month.";
        return;
    }

    if (!/^\d{2}$/.test(year)) {
        message.textContent = "Enter a valid expiration year.";
        return;
    }

    if (isExpired(Number(month), Number(year))) {
        message.textContent = "Card is expired.";
        return;
    }

    if (!/^\d{3}$/.test(cvc)) {
        message.textContent = "CVC must be 3 digits.";
        return;
    }

    message.textContent = "Success! Payment submitted.";
    form.reset();
});