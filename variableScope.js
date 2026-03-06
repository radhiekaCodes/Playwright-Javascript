// Assignment Details:
// Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave
// differently when printed. 

const browserVersion = "Chrome";

function getBrowserVersion() {

    if (browserVersion === "Chrome") {

        let browserVersion = "Chrome Version 125";

    }

    console.log(browserVersion)

}

getBrowserVersion()