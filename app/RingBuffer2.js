export default class RingBuffer{
  constructor(slots){
    this.unreadSlots = slots
    this.slots = []
    for (let i = 0; i < slots; i++) {
      this.slots[i] = null
    }
    this.iterator=0
    this.readSlot=0
  }
  count(){
    return this.unreadSlots
  }
  read(){
    // console.log(this.iterator)
    // this.iterator++

    // const num = this.iterator  this.slots.length
    // if(this.slots.length % this.iterator )
    // console.log(this.iterator)
    console.log((this.iterator % this.slots.length))
    console.log(this.slots)
    // return num
    // let slot = this.iterator % this.slots.length
    // console.log(this.slots[slot + 1])
  }
  write(val){
    // console.log(this.iterator % this.slots.length)
    let slot = this.iterator % this.slots.length
    this.slots[slot] = val
    this.iterator++
  }
}
