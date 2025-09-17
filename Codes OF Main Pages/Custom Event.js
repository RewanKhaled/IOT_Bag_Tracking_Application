event.log('Bag_tracking');
event.log(JSON.stringify(Sensor, null, 2));

var sensorsToCheck = Sensor.profile.relatedSensors || [];
if (sensorsToCheck.length === 0) {
    sensorsToCheck = [Sensor.profile.SensorId];
}

// Safe Zone center coordinates
var safeLat = 31.1133292;
var safeLng = 29.7872506;

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371000; // Earth radius in meters
    const toRad = (deg) => deg * Math.PI / 180;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng/2)**2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

sensorsToCheck.forEach(function(sensorId) {
    if (!sensorId) return;

    event.log("Checking Sensor ID: " + sensorId);

    const query = `SELECT * FROM APPLICATION_9157 WHERE BagID = '${sensorId}' LIMIT 1`;

    SearchIn(query, function(err, result) {
        if (err) {
            event.error("Query Error for SensorId " + sensorId + ": " + err);
            return;
        }

        if (!result || result.length === 0) {
            event.error("Bag not found for SensorId: " + sensorId);
            return;
        }

        var ownerEmail = result[0].Email;
        if (!ownerEmail) {
            event.error("Email not found for Bag with SensorId: " + sensorId);
            return;
        }

        const opt = {
            "host": "smtp.gmail.com",
            "port": "587",
            "username": "@gmail.com",
            "password": "",
            "to": ownerEmail,
        };

        // Read sensor data
        var radius = Sensor.reading.Radius;
        var lux = Sensor.reading.currentLuxValue || 0;

        // Get coordinates
        const lat = parseFloat(Sensor.reading.phoneLocationLat);
        const lng = parseFloat(Sensor.reading.phoneLocationLng);
        event.log("Sensor coordinates: Lat=" + lat + ", Lng=" + lng);

        if (!isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
            // Calculate radius if missing or invalid
            if (!radius || radius <= 0 || radius > 5000) {
                radius = calculateDistance(lat, lng, safeLat, safeLng);
                event.log("Calculated Radius: " + radius.toFixed(2));
            } else {
                event.log("Radius from sensor: " + radius.toFixed(2));
            }

            // Display status in Event page
            if (radius > 100) {
                event.log(`Bag ${sensorId} is OUT of safe range ⚠️ (Radius: ${radius.toFixed(2)} m)`);
                opt.subject = "Bag is Out";
                opt.body = `The bag with SensorId ${sensorId} has moved out of safe range. Current radius: ${radius.toFixed(2)} meters.`;
                SendEmail(opt);
                event.log("Sent: Bag is Out for SensorId " + sensorId);
            } else {
                event.log(`Bag ${sensorId} is inside safe range ✅ (Radius: ${radius.toFixed(2)} m)`);
            }

        } else {
            event.log("Invalid coordinates, skipping radius check.");
        }

        // Check lux
        if (lux > 10) {

            event.log(`Bag ${sensorId} is OPEN 
