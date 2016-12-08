export class RingBuffer{
  constructor(slots){
    this.buffer = new Array(slots)
    this.capacity = slots
    this.size = this.position = 0
  }
  count(){
    return this.size
  }
  read(){
    const num = this.buffer[this.position]
    this.buffer[this.position] = null
    this.position = this.position < this.capacity-1 ? ++this.position : 0
    this.size = this.size > 0 ? --this.size : 0
    return num
  }
  write(val){
    this.buffer[(this.size + this.position) < this.capacity ? this.size + this.position : (this.size + this.position) - this.capacity] = val

    this.size < this.capacity ? this.size++ : this.position++
  }
}

export class RingReader extends RingBuffer{
  read() {
    const ring = super.read()
    console.log(ring.read())
    return ring.read()
    // console.log(ring.buffer[ring.position])
    // return ring.buffer[ring.position]
  }
}
