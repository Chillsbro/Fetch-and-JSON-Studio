window.addEventListener("load", function () {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then((response) => {
    response.json().then((data) => {
      const container = document.getElementById("container");
      let count = data.length;
      container.innerHTML = `<h2>${count}</>`
      data.forEach((astro) => {
        container.innerHTML += `
        <div id="container">
        <div class="astronaut">
        <div class="bio">
        <h3>${astro.firstName} ${astro.lastName}</h3>
        <ul>
        <li>Hours in space: ${astro.hoursInSpace} </li>
        <li>Active: ${astro.active}</li>
        <li>Skills: ${astro.skills}</li>
        </ul>
        </div>
        <img src="${astro.picture}" class="avatar"/>
        </div>
      </div> `;
       
      });
    });
  });
});
