import "./styles/contact.css";

function createDiv(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div;
}

function createContact(name, role, phone, email) {
  const div = document.createElement("div");
  div.classList.add(name);

  div.appendChild(createDiv(`${name} Bear`));
  div.appendChild(createDiv(role));
  div.appendChild(createDiv(phone));
  div.appendChild(createDiv(email));
}

function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const title = document.createElement("div");
  title.textContent = "Contact us";
  title.classList.add("title");

  contact.appendChild(title);
  contact.appendChild(
    createContact(
      "Mama",
      "Chef",
      "555-555-5554",
      "totallyRealEmail@notFake.com"
    )
  );
  contact.appendChild(
    createContact(
      "Papa",
      "Manager",
      "555-555-5555",
      "perfectlyRealEmail@notFake.com"
    )
  );
  contact.appendChild(
    createContact(
      "Baby",
      "Waiter",
      "555-555-5556",
      "totallyRealEmail@notFake.com"
    )
  );

  return contact;
}

export default function () {
  const main = document.querySelector("#main");
  main.innerText = "";
  main.appendChild(createContact());
}
