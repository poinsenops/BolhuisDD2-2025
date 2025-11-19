const komBijOnsLangs = () => {
    const section = document.createElement('section');
    section.className = 'bg-den sm:mt-8 mt-2 text-gray-200 font-inter shadow-lg';
    section.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 lg:px-6 lg:px-8 lg:py-0 py-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 class="font-bold text-2xl mb-4">Kom bij ons langs</h2>
                    <p class="leading-relaxed">
                        Bezoek onze kwekerij en ervaar zelf de magie van kerstbomen geteeld met passie en vakmanschap.
                        Ontdek ons uitgebreide assortiment, leer meer over onze duurzame teeltmethoden en geniet van een warme ontvangst in onze gezellige omgeving.
                        Of je nu op zoek bent naar de perfecte kerstboom of gewoon nieuwsgierig bent naar ons bedrijf, wij heten je van harte welkom!
                    </p>
                    <p class="mt-2">Onze Locatie Is: <a href="https://www.google.com/maps/dir//Rijksstraatweg+tegenover+no.14,+9752+AA+Haren/@53.1852251,6.5871783,19.11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47c82d082f2b55cd:0x3bd820ac17fc4bf9!2m2!1d6.587015!2d53.185084?entry=ttu&g_ep=EgoyMDI1MTExNi4wIKXMDSoASAFQAw%3D%3D" class="hover:underline text-koper inline-block text-sm md:text-base">Rijksstraatweg tegenover no.14, 9752 AA Haren</a>
                </div>
                <div>
                    <img src="public/images/DSC02880.JPG" alt="Bezoek onze kwekerij" class="w-full h-auto shadow-lg object-cover">
                </div>
            </div>
        </div>
    `;
    return section;
}

export default komBijOnsLangs;