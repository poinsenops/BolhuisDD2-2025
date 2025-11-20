const mediaCard = (i) => {
    const mediaItem = document.createElement('div');
        mediaItem.className = 'bg-white rounded-lg shadow-md overflow-hidden max-h-64';
        mediaItem.innerHTML = `
            <img src="https://placeholder.pics/svg/300/DEDEDE/555555/Media%20Image%20${i}" alt="Media Image ${i}" class="w-full h-1/2 object-cover">
            <div class="p-3 h-1/2 justify-center flex flex-col">
                <h3 class="text-lg font-semibold mb-2">Media Item Title ${i}</h3>
                <p class="text-gray-600 text-sm mb-4">A brief description or excerpt from the media item to give readers an idea of the content.</p>
                <a href="#" class="text-koper hover:underline text-sm">Read More &gt;</a>
            </div>
        `;
    return mediaItem;
}

export default mediaCard;