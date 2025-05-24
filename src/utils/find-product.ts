import allWatches from "../data/watches.json";

export default function findProduct(id: string) {
    return allWatches.find((watch) => watch.id === Number(id));
}
