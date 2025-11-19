const kiekje = () => {
    const section = document.createElement('section');
    section.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <img src="https://placeholder.pics/svg/300x150/DEDEDE/555555/familie%20kerst%20foto" alt="Kijkje in de kwekerij" class="w-full h-auto shadow-lg object-cover">
                </div>
                <div>
                    <h2 class="font-bold text-xl md:text-2xl mb-4">kiek de kerst in</h2>
                    <p class="text-sm md:text-base leading-relaxed mb-4">
                        kiek de kerst in is een service die wij geven waar een profesionele fotograaf kerst familie foto's maakt op ons terrein
                    </p>
                    <a href="#/kiekje" class="hover:underline text-koper inline-block text-sm md:text-base">boek een kiekje &gt;</a>
                </div>
                
            </div>
        </div>
    `;
    return section;
}

export default kiekje;