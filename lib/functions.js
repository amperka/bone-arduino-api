// # Digital I/O
// TODO: pinMode
// TODO: digitalWrite
// TODO: digitalRead

// # Analog I/O
// TODO: analogReference
// TODO: analogRead
// TODO: analogWrite

// # Advanced I/O
// TODO: tone
// TODO: noTone
// TODO: shiftOut
// TODO: shiftIn
// TODO: pulseIn

// # Time
// TODO: millis()
// TODO: micros()

module.exports.delay = function(millis)
{
  var date = new Date();
  while((new Date())-date < millis);
}

// TODO: delayMicroseconds()

// # Math
// TODO: min
// TODO: max
// TODO: abs
// TODO: contrain
// TODO: map 
// TODO: pow 
// TODO: sqrt

// # Trigonometry
// TODO: sin
// TODO: cos
// TODO: tan

// # Random Numbers
// TODO: randomSeed
// TODO: random

// # Bits and Bytes
// TODO: lowByte
// TODO: highByte
// TODO: bitRead
// TODO: bitWrite
// TODO: bitSet
// TODO: bitClear
// TODO: bit

// # ExternalInterrupts
// TODO: attachInterrupt
// TODO: detachInterrupt

