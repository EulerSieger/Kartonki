import CardAction from "./card-action.model";

export default class CardInfo {
    constructor(params = {}) {
        for (let param in params) {
            if (params.hasOwnProperty(param)) {
                this[param] = params[param];
            }
        }
    }

    cardId: number; // ID within session

    health: number;
    damage: number;

    name: string;       // "Berta"
    prefix: string;     // "Fat"
    notation: string;   // funny text
    image: any;         // <image> ?

    actions: CardAction[];
    actionsPower: number; // sum of all actions power

    getFullName = () => ((this.prefix || '') + ' ' + this.name).trim()
}