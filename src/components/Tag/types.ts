
export enum Categories {
  'Ação',
  'Family',
  'Magia',
  'Terror'
}
export type CategoriesColorType = { color: string }

export type TypesContainer = { [key in Categories]: CategoriesColorType }

export const colors: TypesContainer = {
  [Categories.Ação]: {
    color: '#19940F',
   
  },
  [Categories.Family]: {
    color: '#7B61FF',
   
  },
  [Categories.Magia]: {
    color: '#2478DF',
   
  },
  [Categories.Terror]: {
    color: '#D82D2D',
   
  },
 
}