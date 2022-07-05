var map = L.mao ('map').fitWorld ();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

attribution:'&copy; <a herf ="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'

}).addTo(map);