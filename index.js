document.e = (id) => {
    return document.getElementById(id);
};

document.hide = (element) => {
    element.classList.add('hidden');
};

document.unhide = (element) => {
    element.classList.remove('hidden');
};

document.forChildren = (f) => {
    return (parent) => {
        for (const children of parent.children) {
            f(children);
        }
    };
};

document.hideChildren = (parent) => {
    document.forChildren(document.hide)(parent);
};

document.addClass = (name) => {
    return (element) => {
        element.classList.add(name);
    };
};

document.addClassForChildrens = (name) => {
    return (parent) => {
        document.forChildren(document.addClass(name))(parent);
    };
};

document.removeClass = (name) => {
    return (element) => {
        element.classList.remove(name);
    };
};

document.removeClassForChildrens = (name) => {
    return (parent) => {
        document.forChildren(document.removeClass(name))(parent);
    };
};

const ageBornedAt = (day, month, year) => {
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
};

document.getElementById("age").innerHTML = ageBornedAt(28, 0, 2005);
