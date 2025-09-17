var ownerName = getLoggedInUser().username;

var query = `SELECT * FROM APPLICATION_9157 WHERE OwnerUser = '${ownerName}'`;

ExecuteQueryModified(query, function(error, xhr) {
  try {
    // Parse the query response
    var rows = JSON.parse(xhr.response || "[]");

    // Collect all Bag IDs
    var bagIDs = rows.map(r => r.BagID).filter(Boolean);

    if (bagIDs.length > 0) {
      // Store Bag IDs in sessionStorage
      sessionStorage.setItem("BagID", JSON.stringify(bagIDs));

      // Show success message with all Bag IDs
      Success(`Logged in successfully with Bag IDs: ${bagIDs.join(", ")}`);
    } else {
      Warning("You have no bags in the system");
    }
  } catch (e) {
    Warning("Could not read server response.");
  }
});