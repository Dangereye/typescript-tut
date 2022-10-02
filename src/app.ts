// Interfaces
import { HasFormatter } from "./interfaces/HasFormatter.js";

// Modules
import { Invoice } from "./modules/Invoice.js";
import { Payment } from "./modules/Payment.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 300);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.format());
});

// Form
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// Events
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, +amount.value);
});
