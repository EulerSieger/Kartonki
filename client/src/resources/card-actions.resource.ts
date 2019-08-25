import CardAction, {CardActionParam} from "../models/card-action.model";

// Note: keep polarizing parameters at the end, otherwise action power would be calculated incorrectly
// Polarizing parameters turn action into negative/positive actions, like "Deal damage to self/opponent"
let requiredStateParam: CardActionParam = {
    name: 'requiredState',
    ranges: ['Attack', 'Defence', 'Idle'],
    power: null
};

export const CardActionsResource: CardAction[] = [{
    type: "CREATE",
    params: [requiredStateParam, {
        name: 'drawNumber',
        ranges: {MIN: 1, MAX: 5},
        power: 2
    }, {
        name: 'target',
        ranges: ['Owner', 'Opponent'],
        power: [1, -1]
    }],
    basePower: 3,
}, {
    type: "DEAL_DAMAGE", // Deals {value} damage.
    params: [requiredStateParam, {
        name: 'damageValue',
        ranges: {MIN: 1, MAX: 5},
        power: 3
    }],
    basePower: 4,
}];