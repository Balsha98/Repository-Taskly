export const encodeAndSave = function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

export const fetchAndDecode = function (key) {
    return JSON.parse(localStorage.getItem(key));
};
