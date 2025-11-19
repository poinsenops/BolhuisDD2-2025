import blogCard from "./blogCard.js";

const blogSectionHome = (name, type = "post", hrefSeeMore = "#/door-de-ogen-van-de-kweker", imgSrc = 'https://placeholder.pics/svg/300/DEDEDE/555555/blog%20post%20image') => {
    const section = document.createElement('section');
    section.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8';
    section.innerHTML = `
        <div class="flex justify-between items-center">
            <h2 class="font-bold text-2xl mb-6">${name}</h2>
            <a href="${hrefSeeMore}" class="hover:underline text-koper inline-block text-sm md:text-base mb-6">Bekijk alle ${type} &gt;</a>
        </div>
        <div id="blog-cards" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        </div>
    `;
    const blogCardsContainer = section.querySelector('#blog-cards');
    for (let i = 0; i < 3; i++) {
        const card = blogCard(undefined, imgSrc);
        blogCardsContainer.appendChild(card);
    }
    return section;
}

export default blogSectionHome;