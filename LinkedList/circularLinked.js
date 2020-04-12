class CircularLinked {
  constructor(equal = defaultEqual) {
    this.head = undefined;
    this.equal = equal;
    this.count = 0;
    this.tail = undefined;
  }
}