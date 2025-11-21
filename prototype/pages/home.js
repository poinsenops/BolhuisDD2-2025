import Ons from "../components/jesse/wie-zijn-wij.js";
import Hero from "../components/jesse/hero.js";
import blogSectionHome from "../components/jesse/blogSectionHome.js";
import kiekje from "../components/jesse/kiekje.js";
import komBijOnsLangs from "../components/jesse/kom-bij-ons-langs.js";
import contact from "../components/jesse/contact.js";

const Home = (app) => {
    document.title = "Bolhuis || Home";

    const section = document.createElement('section');

    const container = document.createElement('div');

    const heroEl = Hero();
    container.appendChild(heroEl);

    const onsEl = Ons();
    container.appendChild(onsEl);

    const kiekjeSection = kiekje();
    container.appendChild(kiekjeSection);

    const komBijOnsLangsSection = komBijOnsLangs();
    container.appendChild(komBijOnsLangsSection);

    const blogSection = blogSectionHome("Door de ogen van de Kweker");
    container.appendChild(blogSection);

    const newsSection = blogSectionHome("In de Media", "media", "#/in-de-media", "https://placeholder.pics/svg/300/DEDEDE/555555/media%20foto");
    container.appendChild(newsSection);

    const contactSection = contact();
    container.appendChild(contactSection);


    section.appendChild(container);

    app.appendChild(section);
    return section;
}

export default Home;