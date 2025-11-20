import Navbar from "./components/jesse/navbar.js";
import Footer from "./components/jesse/footer.js";
import Home from "./pages/home.js";
import geschiedenis from "./pages/geschiedenis.js";
import BlogPage from "./pages/door-de-ogen-van-de-kweker.js";
import media from "./pages/in-de-media.js";
import game from "./pages/game.js";

const root = document.getElementById('root');

// insert navbar once (Navbar() should return an Element)
if (root && !document.getElementById('site-navbar')) {
    const navEl = Navbar();
    if (!navEl.id) navEl.id = 'site-navbar';
    root.insertAdjacentElement('beforebegin', navEl);
}

root.insertAdjacentHTML('afterend', Footer());

document.documentElement.classList.add('h-full');
document.body.classList.add('min-h-screen', 'flex', 'flex-col');

const footer = document.getElementById('footer');
if (footer) {
    footer.classList.add('mt-auto', 'w-full');
}

function ensureApp() {
    let app = document.getElementById('root');
    if (!app) {
        app = document.createElement('main');
        app.id = 'root';
        document.body.appendChild(app);
    }
    return app;
}

function renderHome() {
    const app = ensureApp();
    app.innerHTML = '';
    Home(app);
}

function renderWebshop() {
    const app = ensureApp();
    app.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1>Webshop</h1><p>Webshop content goes here.</p>
    </div>`;
}

function renderGame() {
    const app = ensureApp();
    app.innerHTML = '';
    game(app);
}

function renderGeschiedenis() {
    const app = ensureApp();
    app.innerHTML = '';

    const geschiedenisEl = geschiedenis();
    app.appendChild(geschiedenisEl);
}
function renderKiekje() {
    const app = ensureApp();
    app.innerHTML = '<h1>Kiekje</h1><p>Kiekje content goes here.</p>';
}
function renderInDeMedia() {
    const app = ensureApp();
    app.innerHTML = '';
    media(app);
}
function renderKweker() {
    const app = ensureApp();
    app.innerHTML = '';
    BlogPage(app);
}
function renderSamplePost() {
    const app = ensureApp();
    app.innerHTML = '<h1>Sample Blog Post</h1><p>This is a sample blog post content.</p>';
}

function renderNotFound() {
    const app = ensureApp();
    app.innerHTML = '<h1>404</h1><p>Page not found.</p>';
}

// routes mapped by normalized hash (no leading # or /)
const routes = {
    '': renderHome,
    'webshop': renderWebshop,
    'game': renderGame,
    'geschiedenis': renderGeschiedenis,
    'kiekje': renderKiekje,
    'in-de-media': renderInDeMedia,
    'door-de-ogen-van-de-kweker': renderKweker,
    'door-de-ogen-van-de-kweker/sample-post': renderSamplePost,
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
