import { IItems, IPizzaInfo } from "../types/cart";

export const itemsToArray = (items: IItems) => {
    let itemsArray: Array<IPizzaInfo> = []
    for (let size in items) {
        for (let type in items[size]) {
            for (let id in items[size][type]) {
                itemsArray.push({
                    _id: id,
                    name: items[size][type][id].name,
                    type: type,
                    size: size,
                    count: items[size][type][id].count,
                    img: items[size][type][id].img,
                    price: items[size][type][id].price
                });
            }
        }
    }
    return itemsArray;
}
