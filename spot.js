document.addEventListener("DOMContentLoaded", function () {
    const playlistItemsContainer = document.getElementById("playlist-items");
    const audioPlayer = document.getElementById("audio-player");
    const repeatButton = document.getElementById("repeat-button");
    const loginButton = document.getElementById("login-button");
    const signInButton = document.getElementById("signin-button");
   /* let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    let searchBtn = document.querySelector(".bx-search");*/

    // Sample playlist data (replace with your own)
    const playlistData = [
    { name: "Chill Vibes", image: "chill-vibes.jpg", audio: "audio/chill-vibes.mp3" },
    { name: "Workout Beats", image: "workout-beats.jpg",audio: "audio/workout-beats.mp3" },
    { name: "Party Anthems", image: "party-anthem.jpeg" ,audio:"audio/party-anthem.mp3"},
    { name: "Focus Flow", image: "focus-flow.jpeg" },
    { name: "Late Night Jazz", image: "late-night-jazz.jpeg" },
    { name: "Rock Classics", image: "rock-classic.webp" },
    { name: "Focus Flow", image: "focus-flow.jpeg" },
    { name: "Late Night Jazz", image: "late-night-jazz.jpeg" },
    { name: "Rock Classics", image: "rock-classic.webp" },
    { name: "Punjabi Hits", image: "punjabi.jpg", audio:"audio/punjabi-hits.mp3" },
    { name: "Bollywood Hits", image: "bollywood-hits.jpg", audio:"audio/punjabi-hits.mp3" },
    { name: "Pahadi Hits", image: "pahadi-hits.jpg", audio:"audio/punjabi-hits.mp3" },
    { name: "90's Hits", image: "90s-hits.jpg", audio:"audio/punjabi-hits.mp3" },
    { name: "Bhojpuri Hits", image: "bhojpuri-hits.jpg", audio:"audio/punjabi-hits.mp3" },
        // Add more playlist items as needed
    ];
    let isRepeating = false;
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

        playlistItem.addEventListener("click", function () {
            console.log("Clicked on playlist item:", item.name);
            audioPlayer.src = item.audio;
            audioPlayer.play();
        });

        playlistItemsContainer.appendChild(playlistItem);
    });
    if (playlistData.length > 0) {
        audioPlayer.src = playlistData[0].audio;
    }
    function toggleRepeat() {
        isRepeating = !isRepeating;
        audioPlayer.loop = isRepeating; // Set the loop attribute of the audio element
        updateRepeatButtonLabel();
    }

    // Update the label of the repeat button based on the current state
    function updateRepeatButtonLabel() {
        repeatButton.textContent = isRepeating ? "🔁* " : "🔁 ";
    }

    // Assign the function to the button's onclick event
    repeatButton.onclick = toggleRepeat;
    function login() {
        alert("Login clicked! Implement your login logic here.");
    }

    function signIn() {
        alert("Sign In clicked! Implement your sign-in logic here.");
    }

    // Assign the functions to the buttons' onclick events
    loginButton.onclick = login;
    signInButton.onclick = signIn;
    // Placeholder for logout logic
function logout() {
    alert("Logout successful!");
    // Redirect to the login page after logout
    window.location.href = "login.html";
}

// Placeholder for play track logic
function playTrack(trackUrl) {
    // Pause any currently playing track
    const allAudioElements = document.querySelectorAll('.track-audio');
    allAudioElements.forEach(audioElement => audioElement.pause());

    // Play the selected track
    const selectedAudioElement = event.currentTarget.querySelector('.track-audio');
    selectedAudioElement.play();
}
closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });
    
});