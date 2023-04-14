const form = document.querySelector(".header-form");
const locationInput = form.querySelector(".search-box");

const setText = (node, text) => (node.textContent = text);

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

const ambient = document.querySelector(".ambient");
const locName = document.querySelector(".loc-name");
const temp = document.querySelector(".temp");

const setDOM = (data) => {
  ambient.textContent = data.current.condition.text;
  locName.textContent = data.location.name;
  temp.textContent = `${data.current.temp_c} C`;
};

const setError = (err) => {
  ambient.textContent = err;
  locName.textContent = "";
  temp.textContent = "";
};

const editForm = async (e) => {
  e.preventDefault();
  try {
    const data = await fetchData();
    console.log(data);
    setDOM(data);
  } catch (err) {
    setError(err);
  }
};

form.addEventListener("submit", editForm);
