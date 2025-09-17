var WebService_1_Result = GetPluginParameterValue('WebService 1', 'Result');
var WebService_1_XML_Http_Request = GetPluginParameterValue('WebService 1', 'XML Http Request');

console.log("XML Http Request", WebService_1_XML_Http_Request);
console.log("Result", WebService_1_Result);

if (WebService_1_XML_Http_Request.status == 200) {
  //successful response
  var resultObject = JSON.parse(WebService_1_Result);

  SetPluginParameterValue('Grid 1', 'SQL query statement', [resultObject]);
  DrawPlugin('Grid 1');

} else {
  //Error
  Warning('WebService has error!')

}