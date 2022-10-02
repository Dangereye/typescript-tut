// Interfaces
import { HasFormatter } from "./interfaces/HasFormatter.js";

// Modules
import { Invoice } from "./modules/Invoice.js";
import { Payment } from "./modules/Payment.js";
import { ListTemplate } from "./modules/ListTemplate.js";

// Form
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// List
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

// Events
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, +amount.value);
  } else {
    doc = new Payment(toFrom.value, details.value, +amount.value);
  }
  list.render(doc, type.value, "end");
});
