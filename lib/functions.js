// # Digital I/O
module.exports.pinMode = function(pin, mode)
{
    // TODO: pinMode
}

module.exports.digitalWrite = function(pin, value)
{
    // TODO: digitalWrite
}

module.exports.digitalRead = function(pin)
{
    // TODO: digitalRead
}

// # Analog I/O
// TODO: analogReference

module.exports.analogRead = function(pin)
{
    // TODO: analogRead
}

module.exports.analogWrite = function(pin, duty)
{
    // TODO: analogWrite
}

// # Advanced I/O
module.exports.tone = function(pin, frequency, duration)
{
    // TODO: tone
}

module.exports.noTone = function(pin)
{
    // TODO: noTone
}

// TODO: shiftOut
// TODO: shiftIn
// TODO: pulseIn

// # Time
module.exports.millis = function()
{
  return new Date();
}

// TODO: micros()

module.exports.delay = function(ms)
{
  var start = this.millis();
  while(this.millis()-start < ms);
}

// TODO: delayMicroseconds()

// # Math
module.exports.min = Math.min; 
module.exports.max = Math.max; 
module.exports.abs = Math.abs; 

// TODO: contrain
// TODO: map 

module.exports.pow = Math.pow;
module.exports.sqrt = Math.sqrt;

// # Trigonometry
module.exports.sin = Math.sin;
module.exports.cos = Math.cos;
module.exports.tan = Math.tan;

// # Random Numbers
// TODO: randomSeed
module.exports.random = function(a, b)
{
    if(b == undefined) {
        var max = a;
        var min = 0;

    } else {
        var min = a;
        var max = b;
    }

    return min + Math.random()*(max-min);
}

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

