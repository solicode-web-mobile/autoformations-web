document.addEventListener("DOMContentLoaded", function () {
    const sideBar = document.querySelector(".side-bar");
    const mainContent = document.querySelector(".main");
    const mainHeader = document.querySelector(".main-header");

    if (!sideBar || !mainContent || !mainHeader) {
        return;
    }

    // Create the toggle button
    const toggleBtn = document.createElement("button");
    // Reuse text-size-button class for similar visual style
    toggleBtn.className = "text-size-button sidebar-toggle-btn";
    toggleBtn.setAttribute("aria-label", "Basculer la barre latérale");
    toggleBtn.title = "Afficher/Masquer le menu";
    toggleBtn.style.marginRight = "auto";
    toggleBtn.style.display = "inline-flex";
    toggleBtn.style.alignItems = "center";
    toggleBtn.style.justifyContent = "center";
    
    // Icon (sidebar toggle SVG)
    toggleBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
        </svg>
    `;

    // Insert the button at the beginning of the main-header
    mainHeader.insertBefore(toggleBtn, mainHeader.firstChild);

    // Retrieve saved state
    const isHidden = localStorage.getItem("sidebar_hidden") === "true";
    if (isHidden) {
        sideBar.classList.add("sidebar-hidden");
        mainContent.classList.add("sidebar-hidden-main");
    }

    // Handle click
    toggleBtn.addEventListener("click", function () {
        const willHide = !sideBar.classList.contains("sidebar-hidden");
        
        if (willHide) {
            sideBar.classList.add("sidebar-hidden");
            mainContent.classList.add("sidebar-hidden-main");
            localStorage.setItem("sidebar_hidden", "true");
        } else {
            sideBar.classList.remove("sidebar-hidden");
            mainContent.classList.remove("sidebar-hidden-main");
            localStorage.setItem("sidebar_hidden", "false");
        }
    });
});
