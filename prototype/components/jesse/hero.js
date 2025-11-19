const hero = () => {
    const heroSection = document.createElement("section");
    heroSection.innerHTML = `
    <div class="bg-hero-pattern bg-center flex items-end justify-center w-full h-auto overflow-hidden shadow-lg">
        <img src="public/images/DSC02941.avif" alt="Bolhuis Logo" class="w-full h-full object-cover">
    </div>
    `;
    return heroSection;
}

export default hero;