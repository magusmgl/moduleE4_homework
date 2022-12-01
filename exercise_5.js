class ElectricalAppliance {
  constructor (type, power) {
  this.type = type,
  this.power = power,
  this.plugIn = 'off'
  }
  
  plugApplianceIntoSocket() {
  this.plugIn = 'on';
  console.log(`The Appliances plug into a socket`)
  }
  
  unplugApplianceIntoSocket() {
    this.plugIn = 'off';
	console.log(`The Appliances unplug into a socket`)
  }
}



class Iron extends ElectricalAppliance {
  constructor (name, waterTankVolume, steamBoostSpeed, type, power)
  {
    super(type, power)
    this.name = name,
    this.waterTankVolume = waterTankVolume,
    this.steamBoostSpeed = steamBoostSpeed 
  }
  
  
  turnOnSteam() {console.log( this.name + ' steam on')
  }
  
  setHeatingLevel(heatingLevel) {
	console.log(`heating level is set on ${heatingLevel}`)
  }
}


class Fridge extends ElectricalAppliance {
  constructor (name, noiseLevel, volume, type, power) {
    super(type, power),
    this.name = name,
	this.noiseLevel = noiseLevel,
	this.volume = volume 
  }
  
  setFreezerTemperature (temperature) {
	console.log(`freezer temperature set to ${temperature} degrees Celsius`)
  }
  
  plugApplianceIntoSocket() {
    this.plugIn = 'on';
    console.log(`The Appliances ${this.name} plug into a socket`)
  }
  
  unplugApplianceIntoSocket() {
    this.plugIn = 'off';
	console.log(`The Appliances ${this.name} unplug into a socket`)
  }
}

const ironDexp = new Iron('Iron DEXP NS1600C', 200, 40, 'iron', 120)
console.log(ironDexp)                                 
ironDexp.turnOnSteam()
ironDexp.plugApplianceIntoSocket()
console.log(ironDexp.plugIn)

const fridgeLiebherr = new Fridge('Fridge Liebherr CTPesf 3016','39db', 286,'Kitchen Appliances', 100) 
fridgeLiebherr.plugApplianceIntoSocket()
fridgeLiebherr.setFreezerTemperature(-20)
console.log(fridgeLiebherr)
