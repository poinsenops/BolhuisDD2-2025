const Navbar = () => {
    const nav = document.createElement("nav");
    nav.innerHTML = `
        <nav class="bg-den shadow">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16 items-center">
                    <div class="flex items-center">
                        <a href="" class="flex items-center text-xl font-semibold text-gray-800">
                            <img src="public/images/logo/Bolhuis-Kerstbomen-LOGO-wit.png" alt="Bolhuis logo" class="h-16 w-auto mr-3">
                        </a>
                        <div class="hidden sm:flex sm:space-x-4 font-bitter sm:ml-auto items-center">
                            <a href="/" class="text-white hover:bg-koper hover:text-white transition-colors duration-150 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="/geschiedenis" class="text-white hover:bg-koper hover:text-white transition-colors duration-150 px-3 py-2 rounded-md text-sm font-medium">geschiedenis</a>

                            <!-- Desktop dropdown for Media -->
                            <div class="relative group">
                                <button type="button" class="text-white inline-flex items-center hover:bg-koper hover:text-white transition-colors duration-150 px-3 py-2 rounded-md text-sm font-medium focus:outline-none" aria-haspopup="true" aria-expanded="false">
                                    Media
                                    <svg class="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </button>
                                <div class="absolute right-0 mt-2 w-56 bg-den text-white rounded-md shadow-lg py-1 hidden group-hover:block z-20">
                                    <a href="/door-de-ogen-van-de-kweker" class="block px-4 py-2 text-sm hover:bg-koper">door de ogen van de kweker</a>

                                    <a href="/in-de-media" class="block px-4 py-2 text-sm hover:bg-koper">in de media</a>
                                </div>
                            </div>
                            <a href="/kiekje" class="text-white hover:bg-koper hover:text-white transition-colors duration-150 px-3 py-2 rounded-md text-sm font-medium">Kiek de Kerst in</a>

                            <a href="/webshop" class="text-white hover:bg-koper hover:text-white transition-colors duration-150 px-3 py-2 rounded-md text-sm font-medium">Webshop</a>
                            <a href="/game" class="text-white hover:bg-koper hover:text-white transition-colors duration-150 px-3 py-2 rounded-md text-sm font-medium">Game</a>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <button id="mobile-menu-button" class="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-cred hover:text-cred hover:bg-koper transition-colors duration-150" aria-label="Toggle menu" aria-controls="mobile-menu" aria-expanded="false">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, hidden by default -->
            <div id="mobile-menu" class="hidden sm:hidden">
                <div class="px-2 pt-2 pb-3 space-y-1 font-bitter text-left">
                    <a href="/" class="block text-white hover:bg-koper hover:text-white transition-colors duration-150 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                    <a href="/geschiedenis" class="block text-white hover:bg-koper hover:text-white transition-colors duration-150 px-3 py-2 rounded-md text-sm font-medium">geschiedenis</a>

                    <!-- Mobile: Media with nested links -->
                    <div class="block text-white px-3 py-2 rounded-md">
                        <div class="flex items-center justify-start text-sm font-medium text-white">Media</div>
                        <div class="mt-2 space-y-1 pr-4">
                            <a href="/door-de-ogen-van-de-kweker" class="block text-white hover:bg-koper hover:text-white transition-colors duration-150 px-3 py-2 rounded-md text-sm">door de ogen van de kweker</a>
                            <a href="/in-de-media" class="block text-white hover:bg-koper hover:text-white transition-colors duration-150 px-3 py-2 rounded-md text-sm">in de media</a>
                        </div>
                    </div>

                    <a href="/kiekje" class="block text-white hover:bg-koper hover:text-white transition-colors duration-150 px-3 py-2 rounded-md text-sm font-medium">Kiek de Kerst in</a>
                    <a href="/webshop" class="block text-white hover:bg-koper hover:text-white transition-colors duration-150 px-3 py-2 rounded-md text-sm font-medium">Webshop</a>
                </div>
            </div>
        </nav>
    `;

    // Toggle mobile menu visibility
    const menuButton = nav.querySelector("#mobile-menu-button");
    const mobileMenu = nav.querySelector("#mobile-menu");
    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            const expanded = menuButton.getAttribute("aria-expanded") === "true";
            menuButton.setAttribute("aria-expanded", (!expanded).toString());
        });
    }

    // Desktop: make the "Media" dropdown toggleable, keyboard accessible, and close on outside click
    const mediaBtn = nav.querySelector('button[aria-haspopup="true"]');
    const mediaMenu = mediaBtn ? mediaBtn.nextElementSibling : null;

    if (mediaBtn && mediaMenu) {
        mediaMenu.classList.add("hidden");
        mediaBtn.setAttribute("aria-expanded", "false");

        mediaBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const open = !mediaMenu.classList.contains("hidden");
            mediaMenu.classList.toggle("hidden", open);
            mediaBtn.setAttribute("aria-expanded", (!open).toString());
            if (!open) {
                const first = mediaMenu.querySelector("a");
                if (first) first.focus();
            }
        });

        // Close when clicking outside the dropdown
        document.addEventListener("click", (e) => {
            if (!mediaMenu.classList.contains("hidden")) {
                if (!mediaBtn.parentElement.contains(e.target)) {
                    mediaMenu.classList.add("hidden");
                    mediaBtn.setAttribute("aria-expanded", "false");
                }
            }
        });

        // Keyboard support: Escape to close, ArrowDown to open and focus first item
        mediaBtn.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                mediaMenu.classList.add("hidden");
                mediaBtn.setAttribute("aria-expanded", "false");
                mediaBtn.focus();
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                mediaMenu.classList.remove("hidden");
                mediaBtn.setAttribute("aria-expanded", "true");
                const first = mediaMenu.querySelector("a");
                if (first) first.focus();
            }
        });
    }

    // Mobile: make the "Media" section collapsible/toggleable
    const mobileMenuEl = nav.querySelector("#mobile-menu");
    if (mobileMenuEl) {
        const mobileMediaBlock = Array.from(
            mobileMenuEl.querySelectorAll("div")
        ).find((el) => el.querySelector(".mt-2") && /Media/.test(el.textContent));
        if (mobileMediaBlock) {
            const header =
                mobileMediaBlock.querySelector(".flex.items-center") ||
                mobileMediaBlock.firstElementChild;
            const links = mobileMediaBlock.querySelector(".mt-2");
            if (header && links) {
                // Start collapsed for better UX on mobile
                links.classList.add("hidden");
                header.setAttribute("role", "button");
                header.setAttribute("tabindex", "0");
                header.setAttribute("aria-expanded", "false");

                header.addEventListener("click", (e) => {
                    e.stopPropagation();
                    const open = !links.classList.contains("hidden");
                    links.classList.toggle("hidden", open);
                    header.setAttribute("aria-expanded", (!open).toString());
                });

                header.addEventListener("keydown", (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        header.click();
                    } else if (e.key === "Escape") {
                        links.classList.add("hidden");
                        header.setAttribute("aria-expanded", "false");
                        header.focus();
                    }
                });
            }
        }
    }

    return nav;
};

export default Navbar;
