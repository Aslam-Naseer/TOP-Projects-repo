const form = document.querySelector(".header-form");

const DOMstuff = (() => {
  const ambient = document.querySelector(".ambient");
  const locName = document.querySelector(".loc-name");
  const temp = document.querySelector(".temp");
  const feels = document.querySelector(".feels");
  const wind = document.querySelector(".wind");
  const humidity = document.querySelector(".humidity");

  const setDOM = (data) => {
    ambient.textContent = data.current.condition.text;
    locName.textContent = data.location.name;
    temp.textContent = `${data.current.temp_c} c`;
    feels.textContent = `${data.current.feelslike_c} c`;
    wind.textContent = `${data.current.wind_kph} kph`;
    humidity.textContent = data.current.humidity;
  };

  const setError = (err) => {
    ambient.textContent = err;
    locName.textContent = "";
    temp.textContent = "";
    console.error(err);
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

  return { editForm };
})();

form.addEventListener("submit", appLogic.editForm);
