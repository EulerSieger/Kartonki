class CardInfo {
    constructor(params) {
        if (params) {
            for (let param in params) {
                this[param] = params[param];
            }
        }
    }

    health; // number - 0-12
    damage; // number - 0-12

    name; // string - e.g. "Berta"
    prefix; // string - e.g. "Fat"
    notation; // string - funny text
    image; // image

    actions; // Action[]
    power; // number - sum of all actions power

    getHealth() {
        return this.health;
    };
    setHealth(health) {
        this.health = health;
    };
    // same getters and setters for other fields
}