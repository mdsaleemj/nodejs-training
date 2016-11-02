
process.stdin.setEncoding('utf8');
console.log("Enter the text... input stream is waiting");
process.stdin.on('readable', function()  {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on('end', function() {
  process.stdout.write('end');
});