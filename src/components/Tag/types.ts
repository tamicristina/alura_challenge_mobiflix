export enum Categories {
  Action = "Action",
  Family = "Family",
  Magic = "Magic",
  Horror = "Horror",
  Adventure = "Adventure"
}
export type CategoriesColorType = string;

export type TypesContainer = { [key in Categories]: CategoriesColorType };

export const colors: TypesContainer = {
  [Categories.Action]: "#19940F",
  [Categories.Family]: "#7B61FF",
  [Categories.Magic]: "#2478DF",
  [Categories.Horror]: "#D82D2D",
  [Categories.Adventure]: "#95a868",
};
