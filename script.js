const homePage  = document.getElementById("home-page");
const worksPage = document.getElementById("works-page");

const pageIndicators = document.querySelectorAll("header>ul>li");

const selectPage = (target) => {
    const page = target.innerHTML;
    switch (page) {
        case "home": {
            homePage.classList.remove("hidden");
            worksPage.classList.add("hidden");
        } break;
        case "works": {
            homePage.classList.add("hidden");
            worksPage.classList.remove("hidden");
        } break;
        case "about": {
            throw "not impelemnted";
        } break;
        default: {
            throw `invalid page: ${page}`;
        }
    }
    paintPageIndicator(page);
}

const getCurrentPage = () => {
    if (!homePage.classList.contains("hidden")) {
        return "home";
    }
    if (!worksPage.classList.contains("hidden")) {
        return "works";
    }
    return "";
}

const paintPageIndicator = (page) => {
    for (const pageIndicator of pageIndicators) {
        pageIndicator.classList.remove("selected-page");
    }
    switch (page) {
        case "home": {
            pageIndicators[0].classList.add("selected-page");
        } break;
        case "works": {
            pageIndicators[1].classList.add("selected-page");
        } break;
        case "about": {
            throw "not impelemnted";
        } break;
        default: {
            throw "unreachable"
        }
    }
}
