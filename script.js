const messages = [
  "You are really short 💖✨",
  "You the only monkey in ma tree ",
  "Stop being cute for no reason ",
  "ik u call otherppl kukur me no special",
  "Certified goofball ",
  "You're kinda a dumbass ngl",
  "Still short tho ",
  "I love ya>:D",
  "are u mine or am i urs?",
  "lusty lesbian girl"
];

let lastIndex = -1;

function showLove() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * messages.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;
  document.getElementById("hiddenMessage").innerHTML = messages[randomIndex];
}