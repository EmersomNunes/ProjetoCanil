"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const createMenuObj_1 = require("../helpers/createMenuObj");
const pet_1 = require("../models/pet");
const search = (req, res) => {
    let query = req.query.q;
    if (!query) {
        res.redirect('/');
        return;
    }
    res.render('pages/page', {
        menu: (0, createMenuObj_1.createMenuObj)(''),
        list: pet_1.pet.getFromName(query),
        query
    });
};
exports.search = search;
