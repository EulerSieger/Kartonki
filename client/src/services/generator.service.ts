import {CardInfo} from "../models/card-info.model";

/**
 * Card & Actions generator
 */
export class Generator {
    private readonly HEALTH: {
        MIN: number,
        MAX: number
    };
    private readonly DAMAGE: {
        MIN: number,
        MAX: number
    };
    // TODO externalize names to separate .js file
    private readonly names: string[];
    // TODO externalize prefixed to separate .js file
    private readonly prefixes: string[];
    // TODO externalize notations to separate .js file
    private readonly notations: string[];
    private query: string; // query for getting an image

    constructor() {
        this.HEALTH = { MIN: 0, MAX: 12 };
        this.DAMAGE = { MIN: 0, MAX: 12 };
        this.names = ['Berta', 'Zoz', 'Grog'];
        this.prefixes = ['Fat', 'Sneaky', 'Mildly Retarded'];
        this.notations = [
            'also is an ocean, tho a red one',
            '20 bucks is 20 bucks',
            'who has stolen my meme?',
            'sponsored by speedwagons fund',
            'aggro is not homo, unless...'
        ];
    };

    /**
     * Generates CardInfo object, skeleton of <GameCard />.
     * @returns CardInfo
     */
    generateCardInfo() {
        let newCardInfo = new CardInfo();
        newCardInfo.setHealth(this.generateNumber(this.HEALTH.MIN, this.HEALTH.MAX));
        newCardInfo.setDamage(this.generateNumber(this.DAMAGE.MIN, this.DAMAGE.MAX));
        newCardInfo.setName(this.generateArrayElement(this.names));
        newCardInfo.setPrefix(this.generateArrayElement(this.prefixes));
        newCardInfo.setNotation(this.generateArrayElement(this.notations));
        newCardInfo.setImage(this.generateImage(this.query));
        return newCardInfo;
    };

    /**
     * Generates random number in between passed min and max number values.
     * @min - number value
     * @max - number value
     * @returns number
     */
    generateNumber(min: number, max: number) {
        return min + Math.floor(Math.random() * (max - min));
    };

    /**
     * Generate random array element.
     * @array - array to pick random element from
     * @returns array element
     */
    generateArrayElement(array: string[]) {
        return array[this.generateNumber(0, array.length)];
    };

    generateImage(query) {
        // complex implementation
    };
};