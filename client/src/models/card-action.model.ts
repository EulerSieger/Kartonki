export default class CardAction {
    type: string;           // 'DRAW', 'DAMAGE', 'HEAL'
    params: CardActionParam[];
    basePower: number;
    actionIndex?: number;    // Index within card, kind of ID
}

export class CardActionParam { // [{requiredState: 'ATTACK'}, {drawNumber: 3}, {player: 'OWNER'}]
    name: string;
    ranges: any;    // either object with MIN & MAX values, or an array
    power: any;     // either number or number array
    value?: any;
}