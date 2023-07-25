window.addEventListener("load", function () {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (data) {
      let sortedAstronatus = data.sort((a,b) =>  b.hoursInSpace - a.hoursInSpace);
      const container = document.getElementById("container");
      let count = data.length;
      container.innerHTML = `<h3>${count}</h3>`;
      console.log(sortedAstronatus);
      sortedAstronatus.forEach((astro) => {
        container.innerHTML += `
                  <div class="astronaut">
                  <div class="bio">
                  <h3>${astro.firstName} ${astro.lastName}</h3>
                  <ul>
                  <li>Hours in space: ${astro.hoursInSpace} </li>
                  <li>Active:${astro.active}</li>
                  <li>Skills: ${astro.skills}</li>
                  </ul>
                  </div>
                  <img src="${astro.picture}" class="avatar"/>
                  </div>
                  `;
      });
    });
  });
});
