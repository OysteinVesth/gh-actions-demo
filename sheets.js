const { google } = require("googleapis");

const appendExcelSheet = async (credentials) => {
  // const email = 'sheets-test@sheet-test-337421.iam.gserviceaccount.com'
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const authClientObject = await auth.getClient();
  const googleSheetsInstance = google.sheets({
    version: "v4",
    auth: authClientObject,
  });
  const spreadsheetId = "1ShcXzIuG8UhQH4deWLkQLZCfnClwNNgFH7EnNQ9591s";

  await googleSheetsInstance.spreadsheets.values.append({
    auth, //auth object
    spreadsheetId, //spreadsheet id
    range: "2022 Jan-Feb!A:J", //sheet name and range of cells
    valueInputOption: "USER_ENTERED", // The information will be passed according to what the usere passes in as date, number or text
    resource: {
      values: [
        [
          "2022-06-01",
          "22:10:00",
          "tfso/api-product-3",
          "v1.2.209",
          "Updated something",
          "COLAB-123",
          "https://github.com/tfso/api-product/release/v1.2.209",
          "ØLV",
          "ØLV",
        ],
      ],
    },
  });
};

module.exports = { appendExcelSheet }