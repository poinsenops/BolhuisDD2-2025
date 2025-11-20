const game = (app) => {
    const section = document.createElement('section');
    section.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8';
    section.innerHTML = `
        <h1 class="text-3xl font-bold mb-4">Game</h1>
        <div class="w-full rounded-lg bg-gray-50 border border-dashed border-gray-300 flex flex-col items-center justify-center p-8 min-h-[60vh]">
            <svg class="w-16 h-16 text-gray-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <rect x="2" y="5" width="20" height="14" rx="2" ry="2" stroke-width="1.5" />
                <path d="M8 12h.01M12 12h.01M16 12h.01" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <p class="text-lg font-medium text-gray-700 mb-1">Game iframe coming soon</p>
            <p class="text-sm text-gray-500">This placeholder fills the page until the game iframe is available.</p>
        </div>
    `;
    app.appendChild(section);
}

export default game;