export default class RingBuffer{
  constructor(slots){
    this.unreadSlots = 0
    this.slots = []
    for (let i = 0; i < slots; i++) {
      this.slots[i] = null
    }
    this.iterator=0
    this.readSlot=0
    this.firstCycle=0
    this.readInc = 0
  }
  count(){
    return this.unreadSlots
  }
  read(){

    this.readInc++
    console.log('===========')
    console.log(this.slots)
    if (this.iterator <= this.slots.length && this.firstCycle <= this.slots.length) {
      this.readSlot = this.firstCycle
      this.firstCycle++
    } else{
      // console.log((this.slots.length-1) - this.readSlot)
      // let a1 = this.iterator % this.readSlot
      // let a2 = this.readInc % this.readSlot
      // let a3 = this.slots.length % this.readSlot
      // let a4 = a3 % this.slots.length
      // console.log(a1,a2,a3,a4)
      this.readSlot = (this.readInc % this.slots.length)
    }
    if (this.unreadSlots > 0) {
      this.unreadSlots--
    }
    const num = this.slots[this.readSlot]
    this.slots[this.readSlot] = null
    console.log('readslot idx: ', this.readSlot)
    return num

  }
  write(val){
    // console.log(this.iterator % this.slots.length)
    let slot = this.iterator % this.slots.length
    this.slots[slot] = val
    this.iterator++
    // this.readSlot = this.iterator % this.slots.length
    if (this.unreadSlots !== this.slots.length) {
      this.unreadSlots++
    }
  }
}
