// Modules
import { Invoice } from "./modules/Invoice.js";
import { Payment } from "./modules/Payment.js";
// Form
const form = document.querySelector(".new-item-form");
// Inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// Events
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, +amount.value);
    }
    else {
        doc = new Payment(toFrom.value, details.value, +amount.value);
    }
    console.log(doc);
});
