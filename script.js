window.addEventListener('resize', function() {
    const profileNameElement = document.getElementById('profile-name');
    const screenWidth = window.innerWidth;

    // Ha az ablak szélessége kisebb mint 600px, változtassa a nevet rövidítésre
    if (screenWidth < 600) {
        profileNameElement.textContent = 'ROCK';
    } else {
        profileNameElement.textContent = 'Roffi Civilek Közössége';
    }
});

// Azonnal alkalmazza a logikát a betöltéskor is
window.addEventListener('load', function() {
    const profileNameElement = document.getElementById('profile-name');
    const screenWidth = window.innerWidth;

    if (screenWidth < 600) {
        profileNameElement.textContent = 'ROCK';
    } else {
        profileNameElement.textContent = 'Roffi Civilek Közössége';
    }
});
