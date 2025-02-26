document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default anchor behavior

          let targetSection = this.getAttribute("data-target");
          let section = document.querySelector(`section[data-section="${targetSection}"]`);

          if (section) {
              window.scrollTo({
                  top: section.offsetTop - 0, // Adjust for fixed navbar
                  behavior: "smooth"
              });
          }
      });
  });
});
