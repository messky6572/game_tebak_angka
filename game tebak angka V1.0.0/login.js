const login = document.getElementById("login-js");

login.addEventListener("click", () => {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.8 },
  });
});
