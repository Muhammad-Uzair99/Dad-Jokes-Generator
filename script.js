const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const myApiKey = "QB/YuIWjTjAPvVTzIZl1fw==l0sNSl6IzMGiPRp8";

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method: "Get",
    headers: {
        "X-Api-Key": myApiKey,
    }
}

async function genJoke() {

    try {
        jokeEl.textContent = "Generating...";
        btnEl.disabled = true;

        const response = await fetch(apiURL, options);
        const data =  await response.json();

        jokeEl.textContent = data[0].joke;
        btnEl.disabled = false;
    } catch (error) {
        jokeEl.innerText = "An Error Occured, Try After few Minutes";
        btnEl.disabled = false;
    }

}

btnEl.addEventListener("click", genJoke);
