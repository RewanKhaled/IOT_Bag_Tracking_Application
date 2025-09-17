// Store SensorIds in sessionStorage as an Array
sessionStorage.setItem('Sensor_Ids', JSON.stringify(['72928', '72929']));

var sensorIds = JSON.parse(sessionStorage.getItem("Sensor_Ids") || "[]");

if (!sensorIds || sensorIds.length === 0) {
  // Redirect to login page if no SensorIds are found
  window.location.replace("https://learning.masterofthings.com/rte.html?project=43604&page=6");
} else {

  var markersData = []; // collect data for all bags

  sensorIds.forEach((sensorId, index) => {
    var Query = `SELECT phoneLocationLat*1 AS Lat,
                        phoneLocationLng*1 AS Lng,
                        currentLuxValue*1 AS Lux,
                        Radius*1 AS Radius,
                        TimeStamp
                 FROM GROUP_${sensorId}
                 ORDER BY TimeStamp DESC
                 LIMIT 1`;

    console.log(`Executing Query for SensorId ${sensorId}:`, Query);

    ExecuteQueryModified(Query, function(err, result) {
      if (result.response) {
        var data = JSON.parse(result.response);
        if (!data || data.length === 0) {
          console.warn(`No data for sensor ${sensorId}`);
          return;
        }

        var row = data[0];
        var luxValue = Number(row.Lux);

        // Determine the marker icon based on bag status
        var markerURL =
          luxValue > 10 ?
          'https://cdn-icons-png.flaticon.com/128/16492/16492509.png' // Open
          :
          'https://cdn-icons-png.flaticon.com/128/1201/1201647.png'; // Closed

        console.log(`Sensor ${sensorId} -> Lux=${luxValue} => ${luxValue > 10 ? 'OPEN' : 'CLOSED'}`);

        // Store marker data
        markersData.push({
          lat: row.Lat,
          lng: row.Lng,
          markerURL: markerURL
        });

        if (markersData.length === sensorIds.length) {
          markersData.forEach(m => {
            SetPluginParameterValue('Map 1', 'Marker URL', m.markerURL);
            SetPluginParameterValue('Map 1', 'Latitude', m.lat);
            SetPluginParameterValue('Map 1', 'Longitude', m.lng);
          });

          DrawPlugin('Map 1');
        }
      }
    });
  });
}