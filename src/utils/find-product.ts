import type { WatchType } from "./filter-list";

let allWatches: WatchType[] = [];

// This function is called by the Main component when watches are loaded
export function setWatchesData(watches: WatchType[]) {
  allWatches = [...watches];
}

export default function findProduct(id: string): WatchType | undefined {
  return allWatches.find((watch) => watch.id === Number(id));
}
