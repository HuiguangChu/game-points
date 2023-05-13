import { ItemsCollection } from '../redux/dashboard/reducer';

export enum ItemType {
    A ='A',
    B ='B',
    C ='C',
    D ='D',
    E = 'E',
}

export const itemsDefinition: {[key in ItemType]: Item} = {
    [ItemType.A]: {
        unitPoints: 50,
        specialBonus: 200,
        numberOfItemsForSpecialBonus: 3,
    },
    [ItemType.B]: {
        unitPoints: 30,
        specialBonus: 90,
        numberOfItemsForSpecialBonus: 2,
    },
    [ItemType.C]: {
        unitPoints: 20,
    },
    [ItemType.D]: {
        unitPoints: 15,
    },
    [ItemType.E]: {
        unitPoints: 0,
    },
};

export interface Item {
    unitPoints: number;
    specialBonus?: number;
    numberOfItemsForSpecialBonus?: number
}

export const calculatePointsForEachItem = (itemQuantity: number, itemType: ItemType): number => {
    if (!Object.keys(itemsDefinition).includes(itemType)) {
        return 0;
    }

    const { specialBonus, numberOfItemsForSpecialBonus, unitPoints } = itemsDefinition[itemType];

    if (specialBonus) {
        return Math.floor(itemQuantity / numberOfItemsForSpecialBonus) * specialBonus + (itemQuantity % numberOfItemsForSpecialBonus)
            * unitPoints;
    }
    return itemQuantity * unitPoints;
};

export const calculateTotalPoints = (itemsCollection: ItemsCollection): number => {
    let totalScore = 0;

    Object.keys(itemsCollection).forEach((key: ItemType): void => {
        totalScore += calculatePointsForEachItem(itemsCollection[key], key);
    });

    return totalScore;
};

export const calculateTotalScoreWithoutBonus = (itemsCollection: ItemsCollection): number => {
    let totalWithoutBonus = 0;

    Object.keys(itemsCollection).forEach((key: ItemType): void => {
        const { unitPoints } = itemsDefinition[key];

        totalWithoutBonus += itemsCollection[key] * unitPoints;
    });

    return totalWithoutBonus;
};

export const calculateBonuses = (itemsCollection: ItemsCollection): number => {
    let bonuses = 0;
    const totalScores: number = calculateTotalPoints(itemsCollection);

    if (totalScores > 0) {
        const totalScoresWithoutBonus: number = calculateTotalScoreWithoutBonus(itemsCollection);

        bonuses = totalScores - totalScoresWithoutBonus;
    }

    return bonuses;
};
