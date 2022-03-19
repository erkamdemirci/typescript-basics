let carMakers: string[] = []
carMakers = ['ford', 'toyota', 'chevy']

// const carsByMake: string[][]
const carsByMake = [['f150'], ['corolla'], ['camaro']]

// Help with inference when extracting values
const car = carMakers[0] // const car: string
const myCar = carMakers.pop() // const myCar: string

// Prevent incompatible values
carMakers.push(100) // type error

// Help with 'map'
carMakers.map((car: string): string => {
  return car
})

//************************************************************************************************ */

const dates = [new Date(), new Date()] // const dates: Date[]

// Flexible types
const importantDates = [new Date(), '2030-10-10'] // const importantDates: (string | Date)[]
importantDates.push('2022-11-11')
importantDates.push(new Date())
