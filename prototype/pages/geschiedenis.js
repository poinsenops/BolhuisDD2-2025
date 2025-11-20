const geschiedenis = () => {
    const page = document.createElement("section");

    page.innerHTML = `
        <div class="flex flex-col gap-12 my-8">
            <div class="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                <div class="space-y-4">
                    <h2 class="text-2xl font-bold text-den">Hoe wij zijn begonnen</h2>
                    <p class="text-gray-700 leading-relaxed  ">
                        De kwekerij werd in 1923 opgericht door Popke Bolhuis, in 1956 overgenomen door
                        Edze Bolhuis en in 1992 door Jaap Bolhuis. In de eerste 57 jaar teelden we uiteenlopende
                        groenten zoals spinazie, bloemkool, rabarber, komkommers en meloenen.
                    </p>
                    <p class="text-gray-700 leading-relaxed  ">
                        In 1980 plantten we de eerste kerstboompjes aan — een groot succes onder zowel consumenten
                        als handelaren. Dankzij de leemrijke grond op de flanken van de Hondsrug groeien onze bomen
                        met een sterke kluit en een prachtige natuurlijke vorm.
                    </p>
                </div>

                <div class="w-full h-80 md:h-96 overflow-hidden shadow-xl">
                    <img
                        src="public/images/010-IMGP4579.jpg"
                        alt="Kerstbomen veld"
                        class="w-full h-full object-cover scale-105"
                    />
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                <div class="order-2 md:order-1 w-full h-80 md:h-96 overflow-hidden shadow-xl">
                    <img
                        src="public/images/DSC05934-450x450.jpg"
                        alt="Kerstboomveld ontwikkeling"
                        class="w-full h-full object-cover scale-105"
                    />
                </div>

                <div class="order-1 md:order-2 space-y-4">
                    <h2 class="text-2xl font-bold text-den">Door de jaren heen</h2>
                    <p class="text-gray-700 leading-relaxed  ">
                        Vanaf 1980 groeide het kerstbomenareaal snel. De markt verschoof van gezaagde fijnsparren
                        naar bomen met kluit en later bomen in pot. Hierdoor werd de kwaliteit van plantmateriaal
                        steeds belangrijker.
                    </p>
                    <p class="text-gray-700 leading-relaxed  ">
                        In de beginjaren werden mindere bomen simpelweg hoger afgezaagd, maar al snel bleek regulier
                        plantgoed niet voldoende voor volmaakte kerstbomen met een consistente vorm.
                    </p>
                    <p class="text-gray-700 leading-relaxed  ">
                        Daarom zijn we volledig overgestapt op plantgoed dat vanaf het begin in pot wordt opgekweekt –
                        met zichtbaar betere kwaliteit.
                    </p>
                </div>
            </div>

            <div class="bg-den shadow-xl w-full">
                <div class="rounded-2xl p-10 shadow-xl text-white max-w-7xl mx-auto">
                    <h2 class="text-2xl font-bold mb-6">Onze missie vandaag</h2>
                    <p class="leading-relaxed">
                        Doordat we het volledige proces — van zaaien tot verkoop — zelf uitvoeren, kunnen we kerstbomen
                        van de hoogste kwaliteit garanderen.
                    </p>
                    <p class="leading-relaxed">
                        De herkomst van het zaaigoed bepaalt de uiteindelijke vorm en kwaliteit van de boom. Dankzij jaren
                        van onderzoek en experimenteren met herkomsten uit verschillende landen hebben we varianten gevonden
                        die perfect gedijen in het Nederlandse klimaat.
                    </p>
                    <p class="leading-relaxed">
                        Dit experimenteren kost tijd: pas na enkele jaren is te zien hoe een boom zich ontwikkelt. Maar door
                        ons onderzoek beschikken we nu over meerdere herkomsten die uitstekend geschikt zijn voor de teelt.
                    </p>
                    <p class="leading-relaxed">
                        Op onze kwekerij zijn we 365 dagen per jaar bezig met kerstbomen – bij ons is het eigenlijk altijd kerst!
                    </p>
                </div>
            </div>
    `;

    return page;
};

export default geschiedenis;