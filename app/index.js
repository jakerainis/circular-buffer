import {RingBuffer, RingReader} from './RingBuffer3'

// const ring = new RingBuffer(2)
// ring.write(1)
//
// const readerA = new RingReader(ring)
// const readerB = new RingReader(ring)
//
// console.log(readerA.read())
// console.log(readerB.read())

// (function(){
//
// console.log('Test 6')
//
// const ring = new RingBuffer(2)
// ring.write(1)
//
// const readerA = new RingReader(ring)
// const readerB = new RingReader(ring)
//
// expect(readerA.read()).toBe(1)
// expect(readerB.read()).toBe(1)
//
// ring.write(2)
//
// expect(readerA.read()).toBe(2)
// expect(readerB.read()).toBe(2)
//
// console.log('Test passed.')
//
// }())


//===================

//
// const cb = new RingBuffer(4)
// cb.write(10)
// cb.write(9)
// cb.write(8)
// cb.write(7)
// cb.write(6)
// cb.write(5)
// cb.write(5)
// // cb.write(4)
// // cb.write(3)
// // cb.write(2)
// // cb.write(1)
// cb.read()
// cb.read()
// cb.read()
// cb.read()
// cb.read()
// // cb.write('x')
// // cb.write('y')
// // cb.write('z')
// // cb.read()
// // cb.read()
// // cb.read()



//===================

//
// (function(){
//
// console.log('Test 1')
//
// const ring = new RingBuffer(4)
// ring.write(5)
// ring.write(4)
// ring.write(3)
// expect(ring.read()).toBe(5)
// expect(ring.read()).toBe(4)
// expect(ring.read()).toBe(3)
//
// console.log('Test passed.')
//
// }());
//
// (function(){
//
// console.log('Test 2')
//
// const ring = new RingBuffer(4)
//
// ring.write(5)
// ring.write(4)
// ring.write(3)
// ring.write(2)
// ring.write(1)
//
// expect(ring.read()).toBe(4)
// expect(ring.read()).toBe(3)
// expect(ring.read()).toBe(2)
// expect(ring.read()).toBe(1)
// expect(ring.read()).toBe(null)
//
// console.log('Test passed.')
//
// }());
//
// (function(){
//
// console.log('Test 3')
//
// // Test the count(), with a random capacity between 1-1000
// const min = 1,
// max = 1000,
// random_capacity = Math.floor(Math.random() * (max - min + 1)) + min
//
// const ring = new RingBuffer(random_capacity)
//
// // Fill must fill the random capacity
// for ( let x = 0; x < random_capacity; x ++){
// ring.write(x)
// }
//
// console.log('current count:' + ring.count())
//
// expect(ring.count()).toBe(random_capacity)
//
// console.log('Test passed.')
//
// }());
//
// (function(){
//
// console.log('Test 4')
//
// const ring = new RingBuffer(2)
// ring.write(5)
// ring.write(4)
// ring.write(3)
// expect(ring.read()).toBe(4)
// expect(ring.read()).toBe(3)
//
// ring.write(7)
// ring.write(8)
//
// expect(ring.read()).toBe(7)
// expect(ring.read()).toBe(8)
//
// console.log('Test passed.')
//
// }());
//
// (function(){
//
// console.log('Test 5')
//
// const ring = new RingBuffer(10)
//
// ring.write(1)
// ring.write(2)
// ring.write(3)
// ring.write(4)
// ring.write(5)
// ring.write(6)
// ring.write(7)
// ring.write(8)
// ring.write(9)
// ring.write(10)
//
// expect(ring.read()).toBe(1)
// expect(ring.read()).toBe(2)
// expect(ring.read()).toBe(3)
// expect(ring.read()).toBe(4)
// expect(ring.read()).toBe(5)
//
// ring.write('x')
// ring.write('y')
// ring.write('z')
//
// expect(ring.read()).toBe(6)
// expect(ring.read()).toBe(7)
// expect(ring.read()).toBe(8)
// expect(ring.read()).toBe(9)
// expect(ring.read()).toBe(10)
// expect(ring.read()).toBe('x')
// expect(ring.read()).toBe('y')
// expect(ring.read()).toBe('z')
// expect(ring.read()).toBe(null)
//
// console.log('Test passed.')
//
// }());
// //
// (function(){
//
// console.log('Test 6')
//
// const ring = new RingBuffer(2)
// ring.write(1)
//
// const readerA = new RingReader(ring)
// const readerB = new RingReader(ring)
//
// expect(readerA.read()).toBe(1)
// expect(readerB.read()).toBe(1)
//
// ring.write(2)
//
// expect(readerA.read()).toBe(2)
// expect(readerB.read()).toBe(2)
//
// console.log('Test passed.')
//
// }())

// (function(){
// //
// // console.log('Test 7')
// //
// //
// // const ring = new RingBuffer(2)
// // ring.write(1)
// // ring.write(2)
// //
// // const readerA = new RingReader(ring)
// //
// // expect(readerA.read()).toBe(1)
// // expect(readerA.read()).toBe(2)
// //
// // const readerB = new RingReader(ring)
// //
// // expect(readerB.read()).toBe(1)
// // expect(readerB.read()).toBe(2)
// //
// // console.log('Test passed.')
// //
// // }());
// //
// // (function(){
// //
// // console.log('Test 8')
// //
// // const ring = new RingBuffer(2)
// // ring.write(1)
// // ring.write(2)
// //
// // const readerA = new RingReader(ring)
// //
// // expect(readerA.read()).toBe(1)
// // expect(readerA.read()).toBe(2)
// //
// // ring.write(3)
// //
// // const readerB = new RingReader(ring)
// //
// // expect(readerB.read()).toBe(2)
// // expect(readerB.read()).toBe(3)
// //
// // expect(readerA.read()).toBe(3)
// //
// // console.log('Test passed.')
// //
// // }());
//
(function(){

console.log('Load test 9.')

// Load test, read in order, with a random capacity between 9mm-10mm
const min = 10000000,
max = 10000000,
random_capacity = Math.floor(Math.random() * (max - min + 1)) + min

const ring = new RingBuffer(random_capacity)

const start = new Date().getTime()

// Fill must fill the random capacity
for ( let x = 0; x < random_capacity; x ++){
ring.write(x)
}

// Read the random capacity, in order
for ( let y = 0; y < random_capacity; y ++){
expect(ring.read()).toBe(y)
}

const end = new Date().getTime()
console.log('Test passed, ' + random_capacity + ' executions in ' + (end - start) + 'ms' )

}())
