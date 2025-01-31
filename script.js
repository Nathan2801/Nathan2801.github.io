const homePage  = document.getElementById("home-page");
const worksPage = document.getElementById("works-page");
const aboutPage = document.getElementById("about-page");

const pageIndicators = document.querySelectorAll("header>ul>li");

const works = document.getElementById("works");
const scrollHint = document.getElementById("scroll-hint");

const worksCanScroll = () => {
    const child = works.children[0];
    if (child === undefined) return false;
    const worksRect = works.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    return worksRect.height < childRect.height * works.children.length;
}

const selectPage = (page) => {
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
    paintPageIndicator(page);
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

const paintPageIndicator = (page) => {
    const cls = "t-h";
    for (const pageIndicator of pageIndicators) {
        pageIndicator.classList.remove(cls);
    }
    switch (page) {
        case "home": {
            pageIndicators[0].classList.add(cls);
        } break;
        case "works": {
            pageIndicators[1].classList.add(cls);
        } break;
        case "about": {
            pageIndicators[2].classList.add(cls);
        } break;
        default: {
            throw "unreachable"
        }
    }
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

createWork({
    name: "Elmor",
    description:
    "A color-selector written in Elm (A language that compiles to javascript).",
    reference: "https://nathan2801.github.io/elmor/", 
});
