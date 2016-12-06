I want attendees to write a ring/circular buffer class. A ring/circular buffer is a data construct of fixed size where writes to the buffer beyond the maximum size overwrite the oldest data first. A read from the buffer returns the oldest available data that has not yet been read.

Implement a simple ring buffer class. You can assume a single writer, and a single reader.

API is as follows:
RingBuffer(size) -> constructor which initializes buffer to the given size
write(data) -> write data to the ring buffer, always succeeds
read() -> read the oldest thing in the buffer you have not yet read
count() -> number of unread items in the buffer

Example :
const rb = new RingBuffer(4)
rb.write(5)
rb.write(4)
rb.write(3)
rb.read() -> 5
rb.read() -> 4
rb.read() -> 3

const rb = new RingBuffer(4)
rb.write(5)
rb.write(4)
rb.write(3)
rb.write(2)
rb.write(1)
rb.read() -> 4
rb.read() -> 3
rb.read() -> 2
rb.read() -> 1
rb.read() -> null // or exception - there is no data left to read

If part one is finished easily, then extend the ring buffer API so that it can
support N number of readers. All readers are expected to get the same data as
best they can within the constraints of the ring buffer.

const ringbuffer = new RingBuffer(2)
ringbuffer.write(1)
reader A joins the the ring buffer
reader B joins the ring buffer
reader A calls read() and gets 1
reader B calls read() and gets 1
ringbuffer.write(2)
reader A calls read() and gets 2
reader B calls read() and gets 2

const ringbuffer = new ringbuffer(2)
ringbuffer.write(1)
ringbuffer.write(2)
reader A joins the the ring buffer
reader A calls read() and gets 1
reader A calls read() and gets 2
reader B joins the ring buffer
reader B calls read() and gets 1
reader B calls read() and gets 2

const ringbuffer = new ringbuffer(2)
ringbuffer.write(1)
ringbuffer.write(2)
reader A joins the the ring buffer
reader A calls read() and gets 1
reader A calls read() and gets 2
ringbuffer.write(3)
reader B joins the ring buffer
reader B calls read() and gets 2
reader B calls read() and gets 3
reader A calls read() and gets 3

Please reach out if you have any questions about implementing this class.
