const kiekje = (app) => {
    document.title = "Bolhuis || Reserveer een Kiekje";

    const section = document.createElement('section');
    section.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8';
    section.innerHTML = `
        <div class="flex flex-col md:flex-row items-start gap-6">
            <div class="md:w-1/2">
                <img src="https://placeholder.pics/svg/300/DEDEDE/555555/familie%20kerst%20foto" alt="Voorbeeldfoto kerstboomgaard" class="w-full h-auto rounded-lg shadow-md object-cover">
            </div>
            <div class="md:w-1/2 bg-white rounded-lg p-6 shadow">
                <h2 class="text-2xl font-semibold mb-2">Reserveer een familie kiekje</h2>
                <p class="text-sm text-gray-600 mb-4">Vul het formulier in om een fotosessie op onze kerstboomgaard te reserveren.</p>

                <form class="space-y-4" action="#" method="post" novalidate>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Naam *</label>
                        <input required name="naam" type="text" placeholder="Bijv. Jan de Vries" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">E-mailadres *</label>
                            <input required name="email" type="email" placeholder="voorbeeld@email.com" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Telefoon</label>
                            <input name="telefoon" type="tel" placeholder="+31 6 12345678" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Aantal personen</label>
                            <input name="aantal" type="number" min="1" max="50" value="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Voorkeursdatum *</label>
                            <input required name="datum" type="date" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Voorkeurstijd</label>
                        <input name="tijd" type="time" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Opmerkingen</label>
                        <textarea name="opmerkingen" rows="3" placeholder="Bijv. speciale wensen, kinderwagen, huisdier..." class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"></textarea>
                    </div>

                    <div class="flex items-center gap-2">
                        <input id="akkoord" name="akkoord" type="checkbox" required class="h-4 w-4 text-green-600 border-gray-300 rounded" />
                        <label for="akkoord" class="text-sm text-gray-700">Ik ga akkoord met de voorwaarden en het privacybeleid *</label>
                    </div>

                    <div class="border border-cred border-3 w-fit rounded-sm shadow-lg transform transition-transform duration-150 hover:scale-[1.05] hover:shadow-xl">
                        <button type="submit" class="font-bitter inline-flex justify-center py-2 px-4 border border-white border-2 text-sm font-medium rounded-sm text-white bg-cred focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-koper">
                            Reserveer afspraak
                        </button>
                    </div>

                    <p class="text-xs text-gray-500">Na verzending nemen wij contact op om de reservering te bevestigen.</p>
                </form>
            </div>
        </div>
    `;
    app.appendChild(section);
}

export default kiekje;
