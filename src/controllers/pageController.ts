import { Request, Response } from "express";
import {createMenuObj} from '../helpers/createMenuObj';
import {pet} from '../models/pet'


export const home = (req: Request, res: Response) => {
    res.render("pages/page", {
        menu: createMenuObj('all'),
        list: pet.getAll(),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
    });
}
export const dogs = (req: Request, res: Response) => {
    let list = pet.getFromType("dog");
    
    res.render("pages/page", {
        menu: createMenuObj('dog'),
        list: pet.getFromType('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
    });
}
export const cats = (req: Request, res: Response) => {
    let list = pet.getFromType("cat");
    
    res.render("pages/page", {
        menu: createMenuObj('cat'),
        list: pet.getFromType('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
    });
}
export const fishes = (req: Request, res: Response) => {
    let list = pet.getFromType("fish")
    
    res.render("pages/page", {
        menu: createMenuObj('fish'),
        list: pet.getFromType('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
    });
}