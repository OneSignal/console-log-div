(function initConsoleLogDiv() {

  /* eslint no-use-before-define:0 */
  if (console.log === logWithCopy) {
    return;
  }

  function toString(x) {
    return typeof x === 'string' ? x : JSON.stringify(x);
  }

  var log = console.log.bind(console);

  var logTo = (function createLogDiv() {
    var div = document.createElement('div');
    div.classList.add('console-log-div');
    div.style.width = '100%';
    div.style.minHeight = '200px';
    div.style.fontFamily = 'monospace';
    div.style.marginTop = '20px';
    document.body.appendChild(div);
    return div;
  }());

  function logWithCopy() {
    log.apply(null, arguments);
    var msg = Array.prototype.slice.call(arguments, 0)
      .map(toString)
      .join(' ');
    var text = logTo.innerText;
    logTo.innerText = text + msg + '\n';
  }

  console.log = logWithCopy;

}());
