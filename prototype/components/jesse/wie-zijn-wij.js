const Ons = () => {
    const section = document.createElement('section');
    section.className = 'bg-den sm:mt-8 mt-2 text-gray-200 font-inter shadow-lg';
    section.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 lg:px-6 lg:px-8 lg:py-0 py-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
                <div>
                    <h2 class="font-bold text-xl lg:text-2xl mb-4">Wie zijn wij</h2>
                    <p class="leading-relaxed">
                        Kwekerij Bolhuis, opgericht in 1923, begon als een groentekwekerij maar schakelde vanaf 1980 succesvol over op de teelt van kerstbomen. 
                        De leemrijke grond op de Hondsrug bleek ideaal voor kerstbomen met kluit, waardoor het areaal steeds verder uitbreidde. 
                        Door de stijgende vraag naar bomen met kluit en in pot ontwikkelde de kwekerij een eigen teeltsysteem met hoogwaardig plantgoed. 
                        <span class="md:block hidden">Jarenlang onderzoek naar zaaigoed uit verschillende landen leidde tot herkomsten die in het Nederlandse klimaat de mooiste kerstbomen opleveren. 
                        Zo werkt de kwekerij het hele jaar door aan het produceren van eersteklas kerstbomen.</span>
                    </p>
                    <a href="#/geschiedenis" class="hover:underline text-koper inline-block text-sm md:text-base">Meer over ons &gt;</a>
                </div>
                <div>
                    <img src="public/images/Bolhuis-kerstbomen.jpg" alt="Kerstbomen in de kwekerij" class="w-full h-auto shadow-lg object-cover">
                </div>
            </div>
        </div>
    `;
    return section;
}

export default Ons;