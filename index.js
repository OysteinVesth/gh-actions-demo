const core = require('@actions/core');
const github = require('@actions/github');
const { appendExcelSheet } = require('./sheets')

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  const googleCredentials = JSON.parse(Buffer.from(core.getInput('google_credentials'), 'base64').toString())

  console.log('Will create new sheet row')
  appendExcelSheet(googleCredentials)
  console.log('Sheet row created')

  console.log(`Hello ${nameToGreet}!`);

  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook pa yload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  const contextpayload = JSON.stringify(github.context, undefined, 2)
  console.log(`The context payload: ${contextpayload}`)
  console.log('================================================')
  console.log('================================================')
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
