const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

const pepsi = ['brown', true, 40] // const pepsi: (string,boolean,number)[]
pepsi[0] = 40

// specific order of types of elements inside tuple
const sprite: [string, boolean, number] = ['clear', true, 40]
sprite[0] = 40 // error -> first element should be a string

// Type alias
type Drink = [string, boolean, number]
const tea: Drink = ['brown', false, 0]
tea[0] = 40 // error -> first element should be a string

//************************************************************************************************ */

const carSpecs: [number, number] = [400, 3354]

const carStats = {
  horsepower: 400,
  weight: 3354
}
