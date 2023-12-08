/* -- Glow effect -- */

const blob = document.getElementById("blob");

// Function to move the blob to a random position
const moveBlobRandomly = () => {
  blob.animate(
    {
      left: `${Math.random() * window.innerWidth}px`,
      top: `${Math.random() * window.innerHeight}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

// Trigger blob movement every 5 seconds
setInterval(moveBlobRandomly, 5000);

/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const name = document.querySelector(".name");

// Function to change text randomly
const changeTextRandomly = () => {
  let iteration = 0;

  const interval = setInterval(() => {
    name.innerText = name.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return name.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= name.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};

// Trigger text change every 8 seconds
setInterval(changeTextRandomly, 2000);
