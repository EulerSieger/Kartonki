class Generator {
    HEALTH;
    DAMAGE;
    names;
    prefixes;
    notations;

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
     * Generates Card object.
     * @returns CardInfo
     */
    createCard() {
        let newCard = new CardInfo();
        newCard.setHealth(this.generateNumber(this.HEALTH.MIN, this.HEALTH.MAX));
        newCard.setDamage(this.generateNumber(this.DAMAGE.MIN, this.DAMAGE.MAX));
        newCard.setName(this.generateArrayElement(this.names));
        newCard.setPrefixes(this.generateArrayElement(this.prefixes));
        newCard.setNotations(this.generateArrayElement(this.notations));
        newCard.setImage(this.generateImage(query));
        // ...
        return newCard;
    };

    /**
     * Generates random number inbetween passed min and max number values.
     * @min - number value
     * @max - number value
     * @returns number
     */
    generateNumber(min, max) {
        return min + Math.floor(Math.random() * (max - min));
    };

    /**
     * Generate random array element.
     * @array - array to pick random element from
     * @returns array element
     */
    generateArrayElement(array) {
        return this.array[this.generateNumber(0, array.length)];
    };
    generateImage(query) {
        // complex implementation
    };
};