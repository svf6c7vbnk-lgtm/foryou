const clickMe = document.getElementById("clickMe");
const startScreen = document.getElementById("startScreen");
const content = document.getElementById("content");
const effects = document.getElementById("effects");
const music = document.getElementById("music");

clickMe.addEventListener("click", function () {

  // Hide Click Me
  startScreen.style.display = "none";

  // Show content
  content.classList.remove("hidden");

  // Start Music
  music.play().catch(function(error) {
    console.log("Music could not start:", error);
  });

  // -------------------------
  // I LOVE U TEXT
  // -------------------------

  for (let i = 0; i < 35; i++) {

    const text = document.createElement("div");

    text.classList.add("love-text");

    text.innerHTML = "I Love U ❤️";

    text.style.left =
      Math.random() * 100 + "vw";

    text.style.fontSize =
      Math.random() * 12 + 14 + "px";

    text.style.animationDuration =
      Math.random() * 5 + 5 + "s";

    text.style.animationDelay =
      Math.random() * 4 + "s";

    effects.appendChild(text);

    setTimeout(() => {
      text.remove();
    }, 12000);
  }


  // -------------------------
  // BUBBLES
  // -------------------------

  for (let i = 0; i < 30; i++) {

    const bubble = document.createElement("div");

    bubble.classList.add("bubble");

    const size =
      Math.random() * 25 + 10;

    bubble.style.width =
      size + "px";

    bubble.style.height =
      size + "px";

    bubble.style.left =
      Math.random() * 100 + "vw";

    bubble.style.animationDuration =
      Math.random() * 5 + 5 + "s";

    bubble.style.animationDelay =
      Math.random() * 3 + "s";

    effects.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 11000);
  }


  // -------------------------
  // HEARTS
  // -------------------------

  for (let i = 35; i > 0; i--) {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.fontSize =
      Math.random() * 25 + 15 + "px";

    heart.style.animationDuration =
      Math.random() * 5 + 5 + "s";

    heart.style.animationDelay =
      Math.random() * 3 + "s";

    effects.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 11000);
  }

});
