var inputBox = document.getElementById("message");
var output = document.getElementById("output");
var form = document.getElementById("form");

try {

      var host = "ws://localhost:8000/";
      var s = new WebSocket(host);

      s.onopen = function (e) {
            setLine("Socket opened.");
      };

      s.onclose = function (e) {
            setLine("Socket closed.");
      };

      s.onmessage = function (e) {
            setLine("Receive : " + e.data);
      };

      s.onerror = function (e) {
            setLine("Socket error " + e);
      };

} catch (ex) {
      setLine("Socked exception");
}

form.addEventListener("submit", function (e) {
      e.preventDefault();

      s.send(inputBox.value);
      setLine("Send : " + inputBox.value);
      inputBox.value = "";

}, false);

var setLine = function (line) {
      var p = document.createElement("p");
      p.innerHTML = line;
      output.appendChild(p);
}
