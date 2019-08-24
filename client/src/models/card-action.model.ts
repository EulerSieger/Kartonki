export default class CardAction {
    type: string;           // 'DRAW', 'DAMAGE', 'HEAL'
    params: {               // [{requiredState: 'ATTACK'}, {drawNumber: 3}, {player: 'OWNER'}]
        name: string,
        ranges: any,
        weight: any
        value?: any,
    }[];
    baseWeight: number;
    textFiller: (action) => string;
    actionIndex?: number;    // Index within card, kind of ID
}