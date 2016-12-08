export class RingBuffer{
  constructor(slots){
    this.buffer = new Array(slots)
    this.size = this.position = 0
    this.subscribers = []
  }
  count(){ return this.size }
  read(){
    if(!this.size){this.position=0;return null}
    return this.buffer[
      (this.position-this.size) >=0 ?
      this.position-this.size-- :
      (this.position-this.size--) + this.buffer.length
    ]
  }
  write(val){
    this.size < this.buffer.length && this.size++
    this.buffer[this.position++] = val
    this.position = this.position === this.buffer.length ? this.position=0 : this.position
    this.subscribers.forEach((v)=>{
      v.write(val)
    })
  }
}
export class RingReader extends RingBuffer{
  constructor(rb) {
    super()
    this.buffer = rb.buffer
    this.size = rb.size
    this.position = rb.position
    rb.subscribers.push(this)
  }
}
