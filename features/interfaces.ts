interface Reportable {
  summary(): string
}

interface Vehicle {
  name: string
  year: number
  broken: boolean
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}, Year: ${this.year}, Broken: ${this.broken}`
  }
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has: ${this.sugar} grams of sugar.`
  }
}

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary())
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printVehicle(oldCivic)
printSummary(oldCivic)
printSummary(drink)
