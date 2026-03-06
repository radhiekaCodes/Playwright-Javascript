// Learning Objective:
// Learn if-else and switch case
// Assignment Details:
// Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
// `runTests` with `switch` for test type messages.

function launchBrowser(browser){

    if((browser.toLowerCase()) === 'chrome'){
        console.log('Test has launched', browser +' browser.')
    }else if((browser.toLowerCase()) === 'edge'){
          console.log('Test has launched', browser +' browser.')
    }else if((browser.toLowerCase()) === 'firefox'){
        console.log('Test has launched', browser +' browser.')
    }
    else{
        console.log('Invalid Browser.')
    }
}

function runTest(type){

    switch(type.toLowerCase()){
        case "sanity":
            console.log( `Test Execution started: Executing ${type} test`)
            break;
        case "smoke":
            console.log( `Test Execution started: Executing ${type} test`)
            break;
        case "regression":
            console.log( `Test Execution started: Executing ${type} test`)
            break;
        default:
            console.log( `Test Execution started: Executing Random Test`)
    }
}

launchBrowser('Chrome')
runTest('sanity')
launchBrowser('Edge')
runTest('regression')
launchBrowser('FireFox')
runTest('smoke')
launchBrowser('browser')
runTest('test')


