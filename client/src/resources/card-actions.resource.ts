import CardAction from "../models/card-action.model";

// Note: keep polarizing parameters at the end, otherwise action weight would be calculated incorrectly
// Polarizing parameters turn action into negative/positive actions, like "Deal damage to self/opponent"
let requiredStateParam = {
    name: 'requiredState',
    ranges: ['Attack', 'Defence', 'Idle'],
    weight: null
};

export const CardActionsResource: CardAction[] = [{
    type: "CREATE", // {Target} creates {number} cards
    params: [requiredStateParam, {
        name: 'drawNumber',
        ranges: {MIN: 1, MAX: 3},
        weight: 2
    }, {
        name: 'player',
        ranges: ['Owner', 'Opponent'],
        weight: [1, -1]
    }],
    baseWeight: 3,
    textFiller: (action) => `${action.params[2].value} creates ${action.params[1].value} cards on ${action.params[0].value}.`
}, {
    type: "DEAL_DAMAGE", // Deals {value} damage.
    params: [requiredStateParam, {
        name: 'damageNumber',
        ranges: {MIN: 1, MAX: 4},
        weight: 3
    }],
    baseWeight: 4,
    textFiller: (action) => `Deals ${action.params[1].value} damage on ${action.params[0].value}.`
}];