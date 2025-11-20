import blogCard from "../components/jesse/blogCard.js";

const BlogPage = (app) => {
    const section = document.createElement('section');
    section.innerHTML = `
        <div class="bg-den sm:mt-8 mt-2 text-gray-200 font-inter shadow-lg">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 class="text-3xl font-bold mb-4">Door de ogen van de Kweker</h1>
                <p class="mb-4">Welkom bij onze speciale blogpagina "Door de ogen van de Kweker". Hier nemen we je mee op een reis door de fascinerende wereld van kerstboomkwekerijen, gezien vanuit het perspectief van degenen die dagelijks met deze prachtige bomen werken.</p>
                <p class="mb-4">Onze kwekers delen hun passie, kennis en ervaringen over het telen van kerstbomen, van de eerste zaailing tot de uiteindelijke verkoop. Je zult inzicht krijgen in de uitdagingen en vreugden van het kweken van kerstbomen, evenals tips voor het kiezen en verzorgen van jouw perfecte boom tijdens de feestdagen.</p>
                <p class="mb-4">Blijf op de hoogte van onze nieuwste blogposts, verhalen en foto's die je een uniek kijkje geven in het leven van een kerstboomkweker. We hopen dat je geniet van deze reis door de ogen van onze toegewijde kwekers!</p>
            </div>
        </div>
    `;

    const blogPost = document.createElement('div');
    blogPost.className = 'max-w-7xl mx-auto px-4 sm:px-6 :px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8';
    const headline = document.createElement('div');
    headline.className = 'col-span-1 sm:col-span-2 md:col-span-3';
    headline.appendChild(blogCard(undefined, 'https://placeholder.pics/svg/600/DEDEDE/555555/Featured%20Blog%20Image'));
    blogPost.appendChild(headline);
    for (let i = 1; i <= 10; i++) {
        blogPost.appendChild(blogCard(undefined,`https://placeholder.pics/svg/300/DEDEDE/555555/Blog%20Image%20${i}`));
        section.appendChild(blogPost);
    }

    app.appendChild(section);
}

export default BlogPage;