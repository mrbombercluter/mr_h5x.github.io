document.addEventListener('DOMContentLoaded', () => {
  // Function to open the Tyroneware website on button click
  const button = document.getElementById('tyrone-button');
  button.addEventListener('click', () => {
    window.open('https://tyroneware.cc', '_blank');
  });

  // Adding tooltips for the Discord and Cheap NFA buttons for fun interaction
  const discordButton = document.getElementById('discord-button');
  const cheapNfaButton = document.getElementById('cheap-nfa-button');

  discordButton.addEventListener('mouseover', () => {
    discordButton.title = "Discord where you can find other configs for other cheats";
  });

  cheapNfaButton.addEventListener('mouseover', () => {
    cheapNfaButton.title = "Cheap NFA's for cs2";
  });
});
