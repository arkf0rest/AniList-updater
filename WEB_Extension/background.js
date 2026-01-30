chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === "saw") {
        setSaw(msg.anime, msg.season, msg.episode)
    }

    if (msg.action === "favorite") {
        setFav(msg.anime, msg.season)
    }
});

function setSaw (animeName, season, episode) {
    console.log(`
        ---- Set Saw ----
        Anime : ${animeName}
        Season : ${season}
        Episode : ${episode}
        `)
}

function setFav (animeName, season) {
    console.log(`
        ---- Set Fav ----
        Anime : ${animeName}
        Season : ${season}
        `)
}