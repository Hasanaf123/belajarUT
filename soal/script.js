// Animasi scroll navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Tombol buka jawaban bisa dipakai
const buttons = document.querySelectorAll(".show-answer");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");
    const answer = document.getElementById("answer" + id);
    if (answer.style.display === "block") {
      answer.style.display = "none";
      button.textContent = "Tampilkan Jawaban";
    } else {
      answer.style.display = "block";
      button.textContent = "Sembunyikan Jawaban";
    }
  });
});

// ✅ Switch interaktif (seperti dark mode toggle)
const toggleCheckbox = document.getElementById("toggleAllCheckbox");
const toggleLabel = document.getElementById("toggleLabel");

toggleCheckbox.addEventListener("change", () => {
  const allAnswers = document.querySelectorAll(".answer");
  const allShowButtons = document.querySelectorAll(".show-answer");

  if (toggleCheckbox.checked) {
    allAnswers.forEach((a) => (a.style.display = "block"));
    allShowButtons.forEach((btn) => (btn.textContent = "Sembunyikan Jawaban"));
    // toggleLabel.textContent = "Buka";
    toggleLabel.style.color = "var(--primary)";
  } else {
    allAnswers.forEach((a) => (a.style.display = "none"));
    allShowButtons.forEach((btn) => (btn.textContent = "Tampilkan Jawaban"));
    toggleLabel.style.color = "#333";
    // toggleLabel.textContent = "Tutup";
  }
});
