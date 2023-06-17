import "./styles/home.css";

function createDiv(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div;
}

function createPar(className) {
  const div = document.createElement("div");
  div.classList.add(className);
  return div;
}

function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const title = document.createElement("div");
  title.textContent = "Beary's Breakfast";
  title.classList.add("title");

  const about = createPar("about");
  about.appendChild(
    createDiv(
      "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    )
  );
  about.appendChild(createDiv("Goldilocks"));

  const hours = createPar("hours");
  hours.appendChild(createDiv("Hours"));
  hours.appendChild(createDiv("Sunday: 8am - 8pm"));
  hours.appendChild(createDiv("Monday: 6am - 6pm"));
  hours.appendChild(createDiv("Tuesday: 6am - 6pm"));
  hours.appendChild(createDiv("Wednesday: 6am - 6pm"));
  hours.appendChild(createDiv("Thursday: 6am - 10pm"));
  hours.appendChild(createDiv("Friday: 6am - 10pm"));
  hours.appendChild(createDiv("Saturday: 8am - 10pm"));

  const location = createPar("loc");
  location.appendChild(createDiv("Location"));
  location.appendChild(createDiv("523 Forest Drive, Forestville, Maine"));

  home.appendChild(title);
  home.appendChild(about);
  home.appendChild(hours);
  home.appendChild(location);

  return home;
}

export default function () {
  const main = document.querySelector("#main");
  main.innerText = "";
  main.appendChild(createHome());
}
