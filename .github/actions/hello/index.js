const core = require('@actions/core');
const github = require('@actions/github');

try {

    //throw new Error("Custom Error from my action");
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);

    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    console.log(`time in action log ${time}!`);


    const payload = JSON.stringify(github, null, "\t");
    console.log(`The event payload: ${payload}`);

} catch (error) {
    core.setFailed(error.message);
}