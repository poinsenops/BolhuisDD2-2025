import mediaCard from '../components/jesse/mediaCard.js';

const media =  (app) => {
    document.title = "Bolhuis || In de Media";
    const section = document.createElement('section');
    section.className = 'bg-den sm:mt-8 mt-2 text-gray-200 font-inter shadow-lg';
    section.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 class="text-3xl font-bold mb-4">In de Media</h1>
            <p class="mb-4">Welkom op onze "In de Media" pagina! Hier vind je een verzameling van artikelen, nieuwsberichten en andere media-uitingen waarin onze kerstboomkwekerij is uitgelicht. We zijn trots op de erkenning die we hebben ontvangen voor ons werk en onze toewijding aan kwaliteit en duurzaamheid.</p>
            <p class="mb-4">Blader door de verschillende media-items om meer te weten te komen over onze geschiedenis, onze teeltmethoden en de mensen achter onze kwekerij. We hopen dat deze verhalen je een dieper inzicht geven in wat ons drijft en waarom we zo gepassioneerd zijn over het leveren van de beste kerstbomen voor jouw feestdagen.</p>
            <p class="mb-4">Veel leesplezier!</p>
        </div>
    `;
    
    app.appendChild(section);

    const mediaList = document.createElement('div');
    mediaList.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8';
    const mockVideo = document.createElement('div');
    mockVideo.className = 'col-span-1 h-auto flex items-center justify-center text-white font-bold';
    mockVideo.innerHTML = `<iframe class="w-full h-64 mb-auto rounded-lg" src="https://www.youtube.com/embed/jdM3dhs89dk?si=mhtnb10w5RD2HzIG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    mediaList.appendChild(mockVideo);

    for (let i = 1; i <= 8; i++) {
        const mediaItem = mediaCard(i);
        mediaList.appendChild(mediaItem);
    }

    app.appendChild(mediaList);
}

export default media;