document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  const ratingDisplay = document.getElementById("current-rating");
  let currentRating = 0;

  // Function to update the stars display
  function updateStars(rating, hover = false) {
    stars.forEach((star) => {
      const starRating = parseInt(star.dataset.rating);

      // Remove all classes first
      star.classList.remove("active", "hover");

      if (starRating <= rating) {
        // If we're hovering, add hover class, otherwise add active
        star.classList.add(hover ? "hover" : "active");
      }
    });

    // Only update the display text if this is not a hover action
    if (!hover) {
      ratingDisplay.textContent = rating;
      currentRating = rating;
    }
  }

  // Add event listeners for each star
  stars.forEach((star) => {
    // Click event to set the rating
    star.addEventListener("click", function () {
      const rating = parseInt(this.dataset.rating);
      updateStars(rating);
    });

    // Mouseover event to preview the rating
    star.addEventListener("mouseover", function () {
      const rating = parseInt(this.dataset.rating);
      updateStars(rating, true);
    });

    // Mouseout event to revert to the current rating
    star.addEventListener("mouseout", function () {
      updateStars(currentRating);
    });
  });
});
