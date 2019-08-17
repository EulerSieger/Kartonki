import {CardAction} from "./card-action.model";

export class CardInfo {
    constructor(params?) {
        if (params) {
            for (let param in params) {
                if (params.hasOwnProperty(param)) {
                    this[param] = params[param];
                }
            }
        }
    }

    private health: number;
    private damage: number;

    private name: string;       // "Berta"
    private prefix: string;     // "Fat"
    private notation: string;   // funny text
    private image: any;         // <image> ?

    private actions: CardAction[];
    private actionsPower: number; // sum of all actions power

    getActions = () => {
        return this.actions;
    }

    getAction = (index: number) => {
        return this.actions[index];
    }

    replaceAction = (index: number, action: CardAction) => {
        this.actions[index] = action;
        return this;
    }

    pushAction = (action: CardAction) => {
        this.actions.push(action);
        return this;
    }

    getHealth = () => {
        return this.health;
    }

    setHealth = (health) => {
        this.health = health;
        return this;
    }

    getDamage = () => {
        return this.damage;
    }

    setDamage = (damage) => {
        this.damage = damage;
        return this;
    }

    getName = () => {
        return this.name;
    }

    setName = (name) => {
        this.name = name;
        return this;
    }
    
    getPrefix = () => {
        return this.prefix;
    }

    setPrefix = (prefix) => {
        this.prefix = prefix;
        return this;
    }

    getNotation = () => {
        return this.notation;
    }

    setNotation = (notation) => {
        this.notation = notation;
        return this;
    }

    getImage = () => {
        return this.image;
    }

    setImage = (image) => {
        this.image = image;
        return this;
    }

    setActions = (actions) => {
        this.actions = actions;
        return this;
    }

    getActionsPower = () => {
        return this.actionsPower;
    }

    setActionsPower = (actionsPower) => {
        this.actionsPower = actionsPower;
        return this;
    }
}