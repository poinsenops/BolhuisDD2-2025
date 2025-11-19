import Navbar from "./components/navbar.js";
import Hero from "./components/hero.js";
import Footer from "./components/footer.js";
import Home from "./components/home.js";

const root = document.getElementById('root');

// insert navbar once (Navbar() should return an Element)
if (root && !document.getElementById('site-navbar')) {
    const navEl = Navbar();
    if (!navEl.id) navEl.id = 'site-navbar';
    root.insertAdjacentElement('beforebegin', navEl);
}

root.insertAdjacentHTML('afterend', Footer());

// ensure main app container exists
function ensureApp() {
    let app = document.getElementById('root');
    if (!app) {
        app = document.createElement('main');
        app.id = 'root';
        document.body.appendChild(app);
    }
    return app;
}

// simple render helpers — replace contents with your real components
function renderHome() {
    const app = ensureApp();
    app.innerHTML = '';

    const heroEl = Hero();
    app.appendChild(heroEl);

    const homeEl = Home();
    app.appendChild(homeEl);}

function renderAanmelden() {
    const app = ensureApp();
    app.innerHTML = '<h1>Aanmelden</h1><p>Sign-up form or component goes here.</p>';
}

function renderWebshop() {
    const app = ensureApp();
    app.innerHTML = '<h1>Webshop</h1><p>Webshop content goes here.</p>';
}

function renderGame() {
    const app = ensureApp();
    app.innerHTML = '<h1>Game</h1><p>Game content goes here.</p>';
}

function renderGeschiedenis() {
    const app = ensureApp();
    app.innerHTML = '<h1>Geschiedenis</h1><p>History content goes here.</p>';
}
function renderKiekje() {
    const app = ensureApp();
    app.innerHTML = '<h1>Kiekje</h1><p>Kiekje content goes here.</p>';
}
function renderInDeMedia() {
    const app = ensureApp();
    app.innerHTML = '<h1>In de Media</h1><p>In de Media content goes here.</p>';
}
function renderKweker() {
    const app = ensureApp();
    app.innerHTML = '<h1>Door de ogen van de kweker</h1><p>Content goes here.</p>';
}

function renderNotFound() {
    const app = ensureApp();
    app.innerHTML = '<h1>404</h1><p>Page not found.</p>';
}

// routes mapped by normalized hash (no leading # or /)
const routes = {
    '': renderHome,
    'aanmelden': renderAanmelden,
    'webshop': renderWebshop,
    'game': renderGame,
    'geschiedenis': renderGeschiedenis,
    'kiekje': renderKiekje,
    'in-de-media': renderInDeMedia,
    'door-de-ogen-van-de-kweker': renderKweker,
    '404': renderNotFound
};

function router() {
    // location.hash examples: "", "#/", "#/aanmelden"
    const raw = location.hash || '#/';
    const name = raw.replace(/^#\/?/, ''); // '' for '#/' or '' for ''
    const fn = routes[name] || routes['404'];
    fn();
}

window.addEventListener('hashchange', router);

document.addEventListener('DOMContentLoaded', () => {
    // convert absolute links ("/path") into hash links ("#/path")
    document.querySelectorAll('a[href^="/"]').forEach(a => {
        const href = a.getAttribute('href');
        // remove leading slash and avoid double hashes
        const cleaned = href.replace(/^\//, '');
        a.setAttribute('href', '#/' + cleaned);
    });

    router();
});
