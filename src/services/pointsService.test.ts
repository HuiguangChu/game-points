import {
    calculateBonuses,
    calculatePointsForEachItem,
    calculateTotalPoints,
    calculateTotalScoreWithoutBonus,
    ItemType,
} from './pointsService';
import { ItemsCollection } from '../redux/dashboard/reducer';

describe('pointsService test', () => {
    const itemsCollectionMock: ItemsCollection = {
        [ItemType.A]: 3,
        [ItemType.B]: 2,
        [ItemType.C]: 1,
        [ItemType.D]: 1,
    };

    describe('calculatePointsForEachItem function', () => {
        it('should return 0 if the item is not defined', () => {
            const points: number = calculatePointsForEachItem(2, 'E' as ItemType);
            expect(points).toEqual(0);
        });

        it('should return 200  if the item is A and itemQuantity is 3', () => {
            const points: number = calculatePointsForEachItem(3, ItemType.A);
            expect(points).toEqual(200);
        });

        it('should return 100 if the item is A and itemQuantity is 2', () => {
            const points: number = calculatePointsForEachItem(2, ItemType.A);
            expect(points).toEqual(100);
        });
    });

    describe('calculateTotalPoints function', () => {
        it('should return 0 if no items collected', () => {
            const totalPoints: number = calculateTotalPoints({});
            expect(totalPoints).toEqual(0);
        });

        it('should return correct value if has items collected', () => {
            const totalPoints: number = calculateTotalPoints(itemsCollectionMock);
            expect(totalPoints).toEqual(325);
        });
    });

    describe('calculateTotalScoreWithoutBonus function', () => {
        it('should return 0 if no items collected', () => {
            const totalPointsWithoutBonus: number = calculateTotalPoints({});
            expect(totalPointsWithoutBonus).toEqual(0);
        });

        it('should return totalPoint without bonus if items collected', () => {
            const totalPointsWithoutBonus: number = calculateTotalScoreWithoutBonus(itemsCollectionMock);
            expect(totalPointsWithoutBonus).toEqual(245);
        });
    });

    describe('calculateBonuses function', () => {
        it('should return 0 if no items collected', () => {
            const bonuses: number = calculateBonuses({});
            expect(bonuses).toEqual(0);
        });

        it('should return correct bonuses bonus if items collected', () => {
            const bonuses: number = calculateBonuses(itemsCollectionMock);
            const totalPointsWithoutBonus: number = calculateTotalScoreWithoutBonus(itemsCollectionMock);
            const totalPoints: number = calculateTotalPoints(itemsCollectionMock);

            expect(bonuses).toEqual(totalPoints - totalPointsWithoutBonus);
        });
    });
});
