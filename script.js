//your JS code here. If required.

 const openBtn = document.getElementById("openModal");
    const modal = document.getElementById("myModal");
    const closeBtn = document.querySelector(".close-modal");

    // Open modal
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    // Close modal using close button
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
