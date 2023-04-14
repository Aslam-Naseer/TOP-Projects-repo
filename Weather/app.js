const form = document.querySelector(".header-form");
const locationInput = form.querySelector(".search-box");

function fnc() {
  throw new Error("LL");
}

const fetchData = async () => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=ec6f8969587147e9bcb134400230804&q=${locationInput.value}`
    );

    if (response.ok) {
      const data = await response.json();
      locationInput.value = "";

      return data;
    } else {
      throw new Error("unnamed location");
    }
  } catch (err) {
    throw err;
  }
};

const setDOM = (data) => {};

const editForm = async (e) => {
  e.preventDefault();
  try {
    const data = await fetchData();
    console.log(data);
    setDOM(data);
  } catch (err) {
    console.error(err);
  }
};

form.addEventListener("submit", editForm);
