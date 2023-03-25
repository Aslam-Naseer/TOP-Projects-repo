import "./styles/menu.css";

function createDiv(name, price) {
  const div = document.createElement("div");

  const nameDiv = document.createElement("div");
  const priceDiv = document.createElement("div");
  nameDiv.textContent = name;
  priceDiv.textContent = `$${price}`;

  div.appendChild(nameDiv);
  div.appendChild(priceDiv);
  return div;
}

function foodObject(name, price, description) {
  const div = document.createElement("div");
  div.classList.add("food-item");

  div.appendChild(createDiv(name, price));
  const descDiv = document.createElement("div");
  descDiv.textContent = description;
  div.appendChild(descDiv);
  return div;
}

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Menu";
  menu.appendChild(title);

  menu.appendChild(
    foodObject(
      "Beary Tea",
      3,
      "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request."
    )
  );
  menu.appendChild(
    foodObject(
      "Honey Tea",
      2,
      "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!"
    )
  );
  menu.appendChild(
    foodObject(
      "Toast and Jam",
      1,
      "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam"
    )
  );
  menu.appendChild(
    foodObject(
      "Fresh Fruits",
      3,
      "A small bowl of fresh fruit, whatever we find at the market for the day."
    )
  );
  menu.appendChild(
    foodObject(
      "Pancakes",
      4,
      "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup."
    )
  );
  menu.appendChild(
    foodObject(
      "French Toast",
      5,
      "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup."
    )
  );
  menu.appendChild(
    foodObject(
      "Beary Veggie Sandwitch",
      6,
      "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up."
    )
  );
  menu.appendChild(
    foodObject(
      "BLT",
      8,
      "Interested in the Beary Veggie Sandwich but also love bacon? Say no more."
    )
  );
  menu.appendChild(
    foodObject(
      "Bagel and Lox",
      8,
      "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon."
    )
  );
  menu.appendChild(
    foodObject(
      "Honeycomb",
      6,
      "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal."
    )
  );
  menu.appendChild(
    foodObject(
      "Beary Bowl",
      7,
      "Get a big ole bowl of our berries! Side of honey is $1 extra."
    )
  );
  menu.appendChild(
    foodObject(
      "The Beary Best Porridge",
      5,
      "Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back."
    )
  );

  return menu;
}

export default function () {
  const main = document.querySelector("#main");
  main.innerText = "";
  main.appendChild(createMenu());
}
