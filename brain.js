const popover = document.getElementById("moreA");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

function toggleBlur() {
    document.body.classList.toggle("blurred", popover.matches(":popover-open"));
}

// Event listeners to apply/remove blur
openBtn.addEventListener("click", () => {
    setTimeout(toggleBlur, 10); // Delay to wait for popover to open
});

closeBtn.addEventListener("click", () => {
    setTimeout(toggleBlur, 10); // Delay to wait for popover to close
});

function goToPage() {
    window.location.href = "photo.html";
}

function goToPage1() {
    window.location.href = "personal.html";
}

function goToPage2() {
    window.location.href = "video.html";
}

function goToPage3() {
    window.location.href = "10b.html";
}

function toggleBulb() {
    var section = document.getElementById("bulbSection");
    if (section.style.display === "none") {
      section.style.display = "block";
      section.classList.add("centered"); // Move to center
    } else {
      section.style.display = "none";
      section.classList.remove("centered"); // Reset to original position
    }
  }

  document.querySelectorAll('.snap, .pf').forEach(img => {
    img.addEventListener('click', function() {
        this.classList.toggle('zoomed');
    });
});

function openImage(imgElement) {
    window.location.href = "viewImage.html?src=" + encodeURIComponent(imgElement.src);
}

// Function to highlight the target div with a border color
function highlightTargetDiv() {
    // Get the hash from the URL (e.g., #001, #003, etc.)
    const targetId = window.location.hash;

    if (targetId) {
        // Find the target div using the ID
        const targetDiv = document.querySelector(targetId);

        if (targetDiv) {
            // Add a temporary border color
            targetDiv.style.border = "3px solid #ff0000"; // Red border for example

            // Remove the border after 3 seconds
            setTimeout(() => {
                targetDiv.style.border = ""; // Remove the border
            }, 3000); // 3000 milliseconds = 3 seconds
        }
    }
}

// Call the function when the page loads
window.onload = highlightTargetDiv;


