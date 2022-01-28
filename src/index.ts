/*
* This program is a vehicle class.
*
* @author Malcolm Tompkins
* @version 1.0
* @since   2021-12-25
*/

import { Truck } from './Truck'
import { Bike } from './Bike'

const bmx = new Bike('Purple', 5)

console.log('Created Bmx bike.\nStatus:\n')
bmx.status()

console.log('Set the cadense to 10\n')
bmx.cadense = 10
bmx.status()

console.log('\nAccelerate by 15:')
bmx.accelerate(15)
bmx.status()

console.log('\nRing bell.')
bmx.ringBell()

console.log('\nReturn number of tires:')
console.log(bmx.tireNum)

const bigTruck = new Truck('Green', 10, 'HGC-34K6F')

console.log('Created a Truck.\nStatus:\n')
bigTruck.status()
