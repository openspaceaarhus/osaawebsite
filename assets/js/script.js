document.addEventListener("DOMContentLoaded", function () {
  fetch("https://spaceapi.osaa.dk/status/json")
  .then(response => response.json())
  .then(data => {
    if (data.state && data.state.open === true) {
      document.getElementById("statusBox").style.display = "block";
    }
  })
  .catch(error => console.error("Error fetching space status:", error));
});