const attach = document.getElementsByClassName('flex flex-wrap justify-start bg-slate-900 bg-opacity-70 rounded')[0];


function displaySawBtn () {
    const div = document.createElement("div");
    div.id = "sawDiv"
    div.className = "nav-episode-btn"

    div.innerHTML = `
    <button id=sawBtn> Saw </button>
    `

    attach.appendChild(div)

    div.addEventListener("click", () => {        
        console.log("bouton saw pressed")

        const currentDatas = getCurrentDatas();
        const currentAnime = currentDatas.currentAnime;
        const currentSeason = currentDatas.currentSeason;
        const currentEpisode = currentDatas.currentEpisode;

        chrome.runtime.sendMessage({
          action: "saw",
          anime: currentAnime,
          season: currentSeason,
          episode: currentEpisode
        });
    });
};

function displayFavBtn () {
    const div = document.createElement("div");
    div.id = "favDiv"
    div.className = "nav-episode-btn"

    div.innerHTML = `
    <button id=favBtn> Set as Fav </button>
    `

    attach.appendChild(div)

    div.addEventListener("click", () => {
        console.log("bouton fav pressed")

        const currentDatas = getCurrentDatas();
        const currentAnime = currentDatas.currentAnime;
        const currentSeason = currentDatas.currentSeason;

        chrome.runtime.sendMessage({
          action: "favorite",
          anime: currentAnime,
          season: currentSeason
        });
    });
};

function getCurrentDatas () {
    const currentAnime = document.getElementById('titreOeuvre').innerHTML;
    const currentSeason = document.getElementById("avOeuvre").innerHTML;
    const linkOeuvre = window.location.pathname;

    const savedEpNb = parseInt(localStorage.getItem('savedEpNb'+linkOeuvre), 10) || 0;
    const currentEpisode = savedEpNb;


    return {
        currentAnime: currentAnime,
        currentSeason: currentSeason,
        currentEpisode: currentEpisode,
    }
};

displaySawBtn()
displayFavBtn()

