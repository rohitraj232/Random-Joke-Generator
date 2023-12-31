const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let getJoke = async() => {
    let respose = await fetch(url);
    let data = await respose.json();
    // console.log(data);
    jokeContainer.innerText = `${data.joke}`;
}
btn.addEventListener("click", getJoke);
getJoke();