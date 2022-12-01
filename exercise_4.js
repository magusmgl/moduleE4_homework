function ElectricalAppliance(type, power) {
	this.type = type,
    this.power = power,
    this.plugIn = 'off'
}

ElectricalAppliance.prototype.plugApplianceIntoSocket = function () {
    this.plugIn = 'on';
    console.log(`The Appliances ${this.name} plug into a socket`)
    }


ElectricalAppliance.prototype.unplugApplianceIntoSocket = function () {
    this.plugIn = 'off';
	console.log(`The Appliances ${this.name} unplug into a socket`)
	}


function Iron(type, power, name, waterTankVolume, steamBoostSpeed){
  this.type = type,
  this.name = name,
  this.power = power,  
  this.waterTankVolume = waterTankVolume,
  this.steamBoostSpeed = steamBoostSpeed
}

Iron.prototype = new ElectricalAppliance()

Iron.prototype.turnOnSteam = function() {
	console.log( this.name + ' steam on')
}

Iron.prototype.setHeatingLevel = function (heatingLevel) {
	console.log(`heating level is set on ${heatingLevel}`)
}

const ironDexp = new Iron('iron',
                      '120',
                      'Iron DEXP NS1600C', 
                      '200',
                      '40')


function Fridge(type, power, name, noiseLevel, volume) {
	this.type = type,
    this.name = name,
    this.power = power, 
	this.noiseLevel = noiseLevel,
	this.volume = volume
}

Fridge.prototype = new ElectricalAppliance()

Fridge.prototype.setFreezerTemperature = function(temperature) {
	console.log(`freezer temperature set to ${temperature} degrees Celsius`)
}

const fridgeLiebherr = new Fridge('Kitchen Appliances',
                                  '100',
                                  'Fridge Liebherr CTPesf 3016',
                                  '39db',
                                  '286'
                                  )

console.log(ironDexp)                                 
ironDexp.setHeatingLevel(20)
ironDexp.turnOnSteam()
ironDexp.plugApplianceIntoSocket()
console.log(ironDexp.plugIn)

fridgeLiebherr.plugApplianceIntoSocket()
fridgeLiebherr.setFreezerTemperature(-20)
console.log(fridgeLiebherr)

