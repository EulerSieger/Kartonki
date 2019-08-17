export class CardAction {
    private type: string;                                               // 'DRAW', 'DAMAGE', 'HEAL'
    private parameters: {parameterName: string, parameterValue: any}[]; // [{requiredState: 'ATTACK'}, {drawNumber: 3}, {player: 'OWNER'}]

    getType = () => {
        return this.type;
    }

    setType = (type) => {
        this.type = type.toUpperCase();
    }

    getParameters = () => {
        return this.parameters;
    }

    setParameters = (parameters) => {
        this.parameters = parameters;
    }
}