const form = document.querySelector(".header-form");

const DOMstuff = (() => {
  const ambient = document.querySelector(".ambient");
  const locName = document.querySelector(".loc-name");
  const temp = document.querySelector(".temp>span");
  const feels = document.querySelector(".feels>span");
  const wind = document.querySelector(".wind>span");
  const humidity = document.querySelector(".humidity>span");

  const setDOM = (data) => {
    ambient.textContent = data.current.condition.text;
    locName.textContent = `${data.location.name}, ${data.location.country}`;
    temp.textContent = `${data.current.temp_c}`;
    feels.textContent = `${data.current.feelslike_c}`;
    wind.textContent = `${data.current.wind_kph} KPH`;
    humidity.textContent = `${data.current.humidity} %`;
  };

  const setError = (err) => {
    ambient.textContent = err;
    locName.textContent = "";
    temp.textContent = "";
    feels.textContent = "";
    wind.textContent = "";
    humidity.textContent = "";
  };

  return { setDOM, setError };
})();

const appLogic = (() => {
  const form = document.querySelector(".header-form");
  const locationInput = form.querySelector(".search-box");

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

  const editForm = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchData();
      console.log(data);
      DOMstuff.setDOM(data);
    } catch (err) {
      DOMstuff.setError(err);
    }
  };

  const initForm = async () => {
    locationInput.value = "London";
    const data = await fetchData();
    DOMstuff.setDOM(data);
  };

  return { editForm, initForm };
})();

form.addEventListener("submit", appLogic.editForm);
window.addEventListener("load", appLogic.initForm);
