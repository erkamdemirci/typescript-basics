/*
public ->       This method can be called any where, any time
private -> This method can only be called by other methods in this class.
protected ->    This method can be called by other methods in this class, or by other methods in child classes
*/

class Vehicle {
  // short constructor definition
  constructor(public color: string) {}

  // public drive(): void {
  //   console.log('dat daat')
  // }

  protected honk(): void {
    console.log('biip')
  }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)
// vehicle.drive() // dat daat -> error because the method is private
// vehicle.honk() // biip -> error because the method is protected

class Car extends Vehicle {
  // color is not public because it belongs to Vehicle
  constructor(public wheels: number, color: string) {
    super(color) // child should contain parent constructor
  }

  private drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive()
  }
}

const car = new Car(4, 'red')
car.startDrivingProcess() // wroom
// car.honk() // biip -> error because the method in Vehicle is protected
