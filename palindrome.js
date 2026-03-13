//Classroom Activity 

//Reverse a string and check if it is a Palindrome 

text = 'Playwright';
len = text.length;
rev = "";

for (i = len - 1; i >= 0; i--) {

    rev = rev + text[i]
}

console.log(rev)

function revString(str) {
    len = str.length;
    rev = "";

    for (i = len - 1; i >= 0; i--) {

        rev = rev + str[i]
    }

    return rev

}

function isPalindrome(str) {

    rev = revString(str).toLowerCase()
    str = str.toLowerCase()
    console.log(rev)
    console.log(str)

    if (str === rev) {
        return 'String is a Palindrome'
    }

    return 'String not a Palindrome'

}


console.log(isPalindrome('Nitin'))
