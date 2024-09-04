const Page = {
    pages: (n) => n === undefined
        ? document.body.children
        : document.body.children[n],

    middleDistance: (pageNr) => {
        const y = window.scrollY;
        const h = window.innerHeight;
        return Math.abs(h*pageNr + h*0.5 - (y + h*0.5));
    },

    autoOpacity: () => {
        for (let i = 0; i < Page.pages().length; i++) {
            const page = Page.pages(i);
            const distance = Page.middleDistance(i);
            if (distance > window.innerHeight) {
                page.style.opacity = "0%";
            } else {
                const percentage = 100 - distance/window.innerHeight*100 + 50;
                page.style.opacity = percentage + "%";
            }
        }
    },
};

const Age = {
    bornAt: (day, month, year) => {
        const now = new Date();

        const dayDiff = now.getDate() - day;
        const yearDiff = now.getFullYear() - year;
        const monthDiff = now.getMonth() - month;

        if (monthDiff < 0) {
            return yearDiff - 1;
        } else if (monthDiff === 0) {
            if (dayDiff < 0) {
                return yearDiff - 1;
            } else {
                return yearDiff;
            }
        } else {
            return yearDiff;
        }
    },
};

const main = () => {
    //document.addEventListener("scroll", (_) => Page.autoOpacity());
    document.getElementById("age").innerHTML = Age.bornAt(28, 0, 2005);
};

main();
