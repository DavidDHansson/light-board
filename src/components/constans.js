export function getColor() {
    return {
        white: "#ffffff",
        main: "#5603ad",
        mainFade: "#8367c7",
        second: "#b3e9c7",
        secondFade: "#c2f8cb",
        gray: "rgb(160, 160, 160)",
        lightGray: "rgb(238, 241, 247)"
    }
}

export function getAsset(id) {
    return `http://4hansson.dk/api/tek/assets/${id}.jpg`
}

export function getMonth() {
    const current = new Date().getMonth();
    const months = [
        "Januar", "Februar", "Marts",
        "April", "Maj", "Juni",
        "Juli", "August", "September",
        "Oktober", "November", "December"
    ];

    return months[current]
}

export function getDayName() {
    const current = new Date().getDay();
    const days = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"]

    return days[current]
}

export function getHomeContent() {
    return fetch("http://4hansson.dk/api/tek/home.json")
        .then(res => res.json())
}