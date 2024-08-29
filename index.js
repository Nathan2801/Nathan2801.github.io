const PAGES = 4;

const state = {
    scrolling: false,
};

function scrollToNextPage(deltaY) {
    return () => {
        const height = window.innerHeight;

        const page = Math.floor(window.scrollY/window.innerHeight);
        const next = (deltaY > 0)
            ? page + 1
            : page;

        if (next < 0 || next >= PAGES) {
            state.scrolling = false;
            return;
        }

        const distance = next * height - window.scrollY;

        if (Math.abs(distance) < 5) {
            state.scrolling = false;
            window.scrollTo(0, next * height);
        } else {
            window.scrollTo(0, window.scrollY + distance * 0.2);
            window.requestAnimationFrame(scrollToNextPage(deltaY));
        }
    }
}

document.addEventListener("mousewheel", (e) => {
    if (!state.scrolling) {
        state.scrolling = true;
        window.requestAnimationFrame(scrollToNextPage(e.deltaY));
    }
});
