const homePage  = document.getElementById("home-page");
const worksPage = document.getElementById("works-page");
const aboutPage = document.getElementById("about-page");

const pageIndicators = document.querySelectorAll("header>ul>li");

const works = document.getElementById("works");
const scrollHint = document.getElementById("scroll-hint");

const languages = ["pt", "en"];
const setLanguage = (lang) => {
    if (!languages.includes(lang)) {
        throw new Error("invalid language: " + lang);
    }
    const all = document.querySelectorAll(`[lang]`);
    for (const e of all) {
        e.style.display = "none";
    }
    const elements = document.querySelectorAll(`[lang="${lang}"]`);
    for (const e of elements) {
        e.style.display = "block";
    }
}

const yearsSince = (date) => {
    const diff = Date.now() - date;
    const year = new Date(diff).getUTCFullYear();
    return Math.abs(year - 1970);
}

const worksCanScroll = () => {
    const child = works.children[0];
    if (child === undefined) return false;
    const worksRect = works.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    return worksRect.height < childRect.height * works.children.length;
}

const selectPage = (element, page) => {
    const cls = "t-h";
    for (const indicator of pageIndicators) {
        indicator.classList.remove(cls);
    }
    element.classList.add(cls);

    switch (page) {
        case "home": {
            homePage.classList.remove("hidden");
            worksPage.classList.add("hidden");
            aboutPage.classList.add("hidden");
        } break;
        case "works": {
            homePage.classList.add("hidden");
            worksPage.classList.remove("hidden");
            aboutPage.classList.add("hidden");
            if (!worksCanScroll()) {
                scrollHint.classList.add("hidden");
            }
        } break;
        case "about": {
            homePage.classList.add("hidden");
            worksPage.classList.add("hidden");
            aboutPage.classList.remove("hidden");
        } break;
        default:
            return false;
    }
    return true;
}

const getCurrentPage = () => {
    if (!homePage.classList.contains("hidden")) {
        return "home";
    }
    if (!worksPage.classList.contains("hidden")) {
        return "works";
    }
    if (!aboutPage.classList.contains("hidden")) {
        return "about";
    }
    return "";
}

const createWork = ({
    name,
    description,
    reference,
}) => {
    const e = document.createElement("div");
    works.appendChild(e);

    const link = document.createElement("a");
    e.appendChild(link);

    link.style.color = "white";
    link.href = reference;

    const title = document.createElement("h3");
    link.appendChild(title);

    title.innerHTML = name;

    const desc = document.createElement("p");
    link.appendChild(desc);

    desc.innerHTML = description;
}

const age = yearsSince(new Date(2005, 0, 28));
for (const e of document.querySelectorAll(".age")) {
    e.innerText = age;
}

setLanguage(document.querySelector("#lang-button").value);

createWork({
    name: "Elmor",
    description:
    "A color-selector written in Elm (A language that compiles to javascript).",
    reference: "https://nathan2801.github.io/elmor/", 
});

createWork({
    name: "Auto Wordle",
    description: "A bot written in python and selenium that plays wordle!",
    reference: "https://github.com/Nathan2801/auto-wordle/"
});
