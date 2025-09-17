var sensorIds = ['72928', '72929'];

sensorIds.forEach(function(sensorId, index) {
  SetPluginParameterValue('Map 1', 'SQL query statement ' + (index + 1), []);
});

sensorIds.forEach(function(sensorId, index) {
  var Query = `SELECT * FROM GROUP_${sensorId} ORDER BY TimeStamp DESC LIMIT 1`;

  ExecuteQueryModified(Query, function(err, result) {
    if (!result || !result.response) {
      console.warn("No data returned for SensorId:", sensorId);
      return;
    }

    var data = JSON.parse(result.response);

    SetPluginParameterValue('Map 1', 'SQL query statement ' + (index + 1), data);
  });
});