var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var row = 2; // Example row number
var column = 3; // Example column number
var value = sheet.getRange(row, column).getValue();
Logger.log(value);
