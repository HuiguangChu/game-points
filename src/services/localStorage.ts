import { ItemsCollection } from '../redux/dashboard/reducer';

enum localStorageKey {
    ITEMS_COLLECTION = 'itemsCollection'
}

export const storeItemsCollectionFromLocalStorage = (itemsCollection: ItemsCollection) => {
    localStorage.setItem(localStorageKey.ITEMS_COLLECTION, JSON.stringify(itemsCollection));
};

export const removeItemsCollectionFromLocalStorage = () => {
    localStorage.removeItem(localStorageKey.ITEMS_COLLECTION);
};

export const getItemsCollectionFromLocalStorage = (): ItemsCollection => {
    const itemsCollectionInLocal: string = localStorage.getItem(localStorageKey.ITEMS_COLLECTION);

    if (itemsCollectionInLocal) {
        return JSON.parse(itemsCollectionInLocal);
    }

    return {};
};
