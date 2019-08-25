import CardAction from '../models/card-action.model'

/**
 * Service for printing card action's text.
 */
export default class ActionTextPrinterService {
    /**
     * Assembles text of an action.
     * @param action   CardAction
     * @returns        action text
     */
    static getActionText = (action: CardAction) :string => {
        let fillers: any = {};
        action.params.forEach(param => fillers[param.name] = param.value);
        switch (action.type) {
            case 'CREATE':
                return `${fillers.target} creates ${fillers.drawNumber} cards.`;
            case 'DEAL_DAMAGE':
                return `Deals ${fillers.damageValue} damage.`;
            default: return 'Doing it\'s best at doing nothing.';
        }
    }
}