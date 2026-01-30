# ![WIP](https://img.shields.io/badge/status-WIP-orange) Work In Progress.

# Anime Tracker Extension

A lightweight browser extension that integrates with your favorite anime site to track watched episodes, mark favorites, and sync progress with your own local storage or the server. Also integrates with the AniList API to fetch additional anime metadata.

## Features

* Mark episodes as watched directly from the site.
* Track your current episode per anime and season.
* Mark anime as favorite or add to watchlist.
* Fetch additional metadata from AniList API using the anime title.
* Stylish, responsive buttons that blend with the site’s design.

## Installation

1. Clone or download this repository.
2. Open Chrome → `Extensions` → Enable `Developer mode`.
3. Click `Load unpacked` and select the project folder.
4. Open your anime site and the extension will automatically inject functionality.

## Usage

1. Navigate to any anime page.
2. Use the **“Saw”** button to mark an episode as watched.
3. Use the **“Fav”** button to add the anime to your favorites list.

## File Structure

```
/anime-tracker-extension
│
├─ manifest.json          # Extension manifest
├─ background.js          # Handles background messaging and API calls
├─ content.js             # Injects buttons and reads site data
└─ README.md              # Project documentation
```

## Notes

* Currently, I am only working on integration with Anime-Sama.
Work In Progress.
