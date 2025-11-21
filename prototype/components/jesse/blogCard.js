const blogCard = (href = '#/door-de-ogen-van-de-kweker/sample-post', imgSrc = 'https://placeholder.pics/svg/300/DEDEDE/555555/blog%20post%20image') => {
    const card = document.createElement('a');
    card.href = href;
    card.className = 'bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-shadow duration-300';
    const title = card.dataset.title || 'Blog Title';
    const excerpt = card.dataset.excerpt || 'A brief excerpt from the blog post to give readers an idea of the content.';

    card.innerHTML = `
        <img src="${imgSrc}" alt="${title}" class="w-full h-48 object-cover">
        <div class="p-4">
            <h3 class="text-lg font-semibold mb-2">${title}</h3>
            <p class="text-gray-600 text-sm mb-4">${excerpt}</p>
            <a href="${href}" class="text-koper hover:underline text-sm">Read More &gt;</a>
        </div>
    `;
    return card;
}

export default blogCard;