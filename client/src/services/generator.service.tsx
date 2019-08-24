import * as React from 'react';
import GameCard from '../components/gameCard/game-card.component';
// models
import CardInfo from '../models/card-info.model';
import CardAction from '../models/card-action.model';
// resources
import {CardNamesResource} from '../resources/card-names.resource';
import {CardPrefixesResource} from '../resources/card-prefixes.resource';
import {CardNotationsResource} from '../resources/card-notations.resource';
import {CardActionsResource} from '../resources/card-actions.resource';

/**
 * Card & Actions Generator Service
 */
export class Generator {
    private readonly HEALTH: {
        MIN: number,
        MAX: number
    } = { MIN: 1, MAX: 12 };
    private readonly DAMAGE: {
        MIN: number,
        MAX: number
    } = { MIN: 0, MAX: 12 };
    private readonly names: string[] = CardNamesResource;
    private readonly prefixes: string[] = CardPrefixesResource;
    private readonly notations: string[] = CardNotationsResource;
    private readonly actions: CardAction[] = CardActionsResource;
    private readonly actionsWeightAnchor: number = 12;
    private cardId: number = 0;
    /**
     * Generates CardInfo object, skeleton of <GameCard />.
     * @returns CardInfo
     */
    generateCardInfo = () => new CardInfo({
        cardId: this.cardId++,
        health: this.generateNumber(this.HEALTH.MIN, this.HEALTH.MAX),
        damage: this.generateNumber(this.DAMAGE.MIN, this.DAMAGE.MAX),
        name: this.getRandomArrayElement(this.names),
        prefix: this.getRandomArrayElement(this.prefixes, 0.6),
        notation: this.getRandomArrayElement(this.notations),
        image: this.generateImage(),
        actions: this.generateActions()
    })

    /**
     * Generates GameCard.
     * @returns <GameCard />
     */
    generateGameCard = () => <GameCard info={this.generateCardInfo()}/>

    /**
     * Generates random number in between passed min and max number values.
     * @min         number value
     * @max         number value
     * @returns     random number
     */
    generateNumber = (min: number, max: number) => min + Math.floor(Math.random() * (max - min))

    /**
     * Generates random array element, optionally can set a chance of empty roll
     * @array          array to pick random element from
     * @emptyChance    chance of null, between 0 & 1
     * @returns        array element || null
     */
    getRandomArrayElement = (array: any[], emptyChance: number = -1) => Math.random() > emptyChance ? array[this.generateNumber(0, array.length)] : null;

    /**
     * Generates actions for CardInfo.
     * Keeps generating actions until actionWeight would be 
     * higher than this.actionsWeightAnchor
     * @returns CardAction[]
     */
    generateActions = () => {
        let actions: CardAction[] = [];
        let actionsWeight = 0;
        let action: CardAction;
        let actionIndex = 0;
        while (actionsWeight < this.actionsWeightAnchor) {
            action = this.assembleAction();
            action.actionIndex = actionIndex++;
            actionsWeight += this.getActionWeight(action);
            actions.push(action);
        }
        return actions;
    }

    /**
     * Assembles CardAction, randomizing it's parameters.
     * @returns CardAction
     */
    assembleAction = () => {
        let action: CardAction = this.getRandomArrayElement(this.actions);
        action.params.forEach((param) => {
            if (Array.isArray(param.ranges)) {
                param.value = this.getRandomArrayElement(param.ranges);
            } else {
                param.value = this.generateNumber(param.ranges.MIN, param.ranges.MAX);
            }
        });
        return action;
    }

    /**
     * Calculates weight of a CardAction
     * @param   action
     * @returns number weight
     */
    getActionWeight = (action: CardAction) => {
        let weight = 0;
        weight += action.baseWeight;
        action.params.forEach(param => {
            if (param.weight !== null) {
                if (Array.isArray(param.weight)) { // is polarized action
                    weight *= param.weight[param.ranges.indexOf(param.value)];
                } else {
                    weight += param.value * param.weight;
                }
            }
        });
        return weight;
    }

    generateImage = () => {
        // complex implementation
    };
};