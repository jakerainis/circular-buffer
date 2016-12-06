export default class RingBuffer{
  constructor(slots){
    this.slots = []
    for (let i = 0; i < slots; i++) {
      this.slots[i] = null
    }
    this.currentRead = 0
    this.currentWrite = 0
    this.unreadSlots = slots
  }
  count(){
    return this.unreadSlots
  }
  read(){

    // console.log(this.currentRead)
    console.log('===================')
    console.log('current slots:', this.slots)
    console.log('current read: index ', this.currentRead)
    console.log('unread: ' +  this.unreadSlots)

    let num

    if(this.currentRead === this.slots.length){
      console.log('looped')
      this.currentRead = 0
      num = this.slots[this.currentRead]
      this.slots[this.currentRead] = null
    }else{
      num = this.slots[this.currentRead]
      this.currentRead++
    }
    if(this.unreadSlots > 0){
      this.unreadSlots--
    }
    console.log('current num:' + num)

    return num

  }
  write(val){
    this.slots[this.currentWrite] = val

    if(this.unreadSlots !== this.slots.length){
      this.unreadSlots++
    }

    if(this.currentWrite === this.slots.length - 1){
      this.currentWrite = 0
      // if (!this.slots[1]) {
        this.currentRead = this.currentWrite + 1
      // // } else{
      // //   this.currentRead = 0
      // // }
    } else{
      this.currentWrite++
    }
    // console.log(val, this.currentRead)
  }
}
