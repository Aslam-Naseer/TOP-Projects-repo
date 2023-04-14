const form = document.querySelector(".header-form");
const locationInput = form.querySelector(".search-box");

function fnc() {
  throw new Error("LL");
}

const fetchData = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=ec6f8969587147e9bcb134400230804&q=${locationInput.value}`
    );

    const data = await response.json();

    if (!data.error) {
      console.log(data);
      locationInput.value = "";
    } else {
      throw new Error("unnamed location");
    }
  } catch (err) {
    console.error(`error: ${err}`);
  }
};

form.addEventListener("submit", fetchData);
