document.addEventListener("DOMContentLoaded", function () {
    const playlistItemsContainer = document.getElementById("playlist-items");

    // Sample playlist data (replace with your own)
    const playlistData = [
        { name: "Chill Vibes", image: "chill-vibes.jpg" },
        { name: "Workout Beats", image: "workout-beats.jpg" },
        // Add more playlist items as needed
    ];

    // Populate the playlist
    playlistData.forEach(item => {
        const playlistItem = document.createElement("div");
        playlistItem.classList.add("playlist-item");

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;

        const name = document.createElement("p");
        name.textContent = item.name;

        playlistItem.appendChild(img);
        playlistItem.appendChild(name);

        playlistItemsContainer.appendChild(playlistItem);
    });
});
