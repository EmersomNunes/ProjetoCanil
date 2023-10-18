"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const createMenuObj_1 = require("../helpers/createMenuObj");
const pet_1 = require("../models/pet");
const home = (req, res) => {
    res.render("pages/page", {
        menu: (0, createMenuObj_1.createMenuObj)('all'),
        list: pet_1.pet.getAll(),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = pet_1.pet.getFromType("dog");
    res.render("pages/page", {
        menu: (0, createMenuObj_1.createMenuObj)('dog'),
        list: pet_1.pet.getFromType('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = pet_1.pet.getFromType("cat");
    res.render("pages/page", {
        menu: (0, createMenuObj_1.createMenuObj)('cat'),
        list: pet_1.pet.getFromType('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    let list = pet_1.pet.getFromType("fish");
    res.render("pages/page", {
        menu: (0, createMenuObj_1.createMenuObj)('fish'),
        list: pet_1.pet.getFromType('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
    });
};
exports.fishes = fishes;
