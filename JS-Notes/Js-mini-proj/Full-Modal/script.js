document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const modal = document.getElementById("fullScreenModal");
  const openBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");

  // Function to open modal
  function openModal() {
    modal.classList.add("open");
    document.body.classList.add("modal-open");
  }

  // Function to close modal
  function closeModal() {
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
  }

  // Event listeners
  openBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);

  // Close modal when clicking outside the modal content
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  // Optional: Function to dynamically set modal content
  window.setModalContent = function (title, content) {
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = "";

    const modalTitle = document.createElement("h2");
    modalTitle.textContent = title;

    const modalContent = document.createElement("div");
    modalContent.innerHTML = content;

    modalBody.appendChild(modalTitle);
    modalBody.appendChild(modalContent);

    openModal();
  };
});
