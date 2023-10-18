"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObj = void 0;
const createMenuObj = (activeMenu) => {
    let returnObj = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    if (activeMenu != '') {
        returnObj[activeMenu] = true;
    }
    return returnObj;
};
exports.createMenuObj = createMenuObj;
