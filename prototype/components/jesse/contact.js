const contact = () => {
    const section = document.createElement('section');
    section.className = 'py-12 bg-white';
    section.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 font-inter">
            <div class="w-1/2">
                <h2 class="text-3xl font-extrabold text-gray-900 mb-6">Contacteer Ons</h2>
                <form class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                        <label for="first-name" class="block text-sm font-medium text-gray-700">Voornaam</label>
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-koper focus:border-koper sm:text-sm">
                    </div>
                    <div>
                        <label for="last-name" class="block text-sm font-medium text-gray-700">Achternaam</label>
                        <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-koper focus:border-koper sm:text-sm">
                    </div>
                    <div class="sm:col-span-2">
                        <label for="email" class="block text-sm font-medium text-gray-700">E-mailadres</label>
                        <input type="email" name="email" id="email" autocomplete="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-koper focus:border-koper sm:text-sm">
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block text-sm font-medium text-gray-700">Bericht</label>
                        <textarea id="message" name="message" rows="4" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-koper sm:text-sm"></textarea>
                    </div>
                    <div class="sm:col-span-2">
                        <div class="border border-cred border-3 w-fit rounded-sm shadow-lg transform transition-transform duration-150 hover:scale-[1.05] hover:shadow-xl">
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-white border-2 text-sm font-medium rounded-sm text-white bg-cred  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-koper">
                                Verstuur Bericht
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="mt-8">
                <h3 class="text-lg font-inter font-medium font-bold text-gray-900 mb-4">of contacteer ons via:</h3>
                <p class="text-gray-600">Adres: Rijksstraatweg tegenover no.14, 9752 AA Haren</p>
                <p class="text-gray-600">Telefoon: <a href="tel:+31503612345" class="hover:underline text-koper">+31 50 361 2345</a></p>
                <p class="text-gray-600">E-mail: <a href="mailto:info@example.com" class="hover:underline text-koper">info@example.com</a></p>
            </div>
        </div>
    `;
    return section;
}

export default contact;