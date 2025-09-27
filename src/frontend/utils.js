export function formatTimeFancy(dateStr) {
    const date = new Date(dateStr);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
}
export function formatDateFancy(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    // Get ordinal suffix
    const j = day % 10, k = day % 100;
    let suffix = 'th';
    if (j === 1 && k !== 11) suffix = 'st';
    else if (j === 2 && k !== 12) suffix = 'nd';
    else if (j === 3 && k !== 13) suffix = 'rd';
    return `${day}${suffix} ${month} ${year}`;
}

export function getLoggedInUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return null;
    try {
        const raw = JSON.parse(userString);
        const user = {
            ...raw,
            dateOfBirth: new Date(raw.dateOfBirth)  // convert string to Date object
        };
        return user;
    } catch {
        return null;
    }
}

export function getScores() {
    const scoresString = localStorage.getItem("scores");
    if (!scoresString) return null;
    try {
        const raw = JSON.parse(scoresString);
        const scores = raw.map(s => ({
            ...s,
            dateOfScore: new Date(s.dateOfScore)
        }));
        return scores;
    } catch {
        return null;
    }
}

export function capitalise(str) {
    if (!str || typeof str !== 'string') return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isLoggedIn() {
    return !!localStorage.getItem('user');
}
