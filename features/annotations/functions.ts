const add = (a: number, b: number): number => {
  return a + b
}

const subtract = (a: number, b: number) => {
  // no error because there is no return annotation
  // so this is a void function
  a - b
}

function divide(a: number, b: number): number {
  return a / b
}

const multiply = function (a: number, b: number): number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message)
}

const throwError = (message: string): never => {
  // if we never expect a function to return

  // not works
  // if (!message) {
  //   throw new Error(message)
  // }

  throw new Error(message)
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

const logWeather2 = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)
