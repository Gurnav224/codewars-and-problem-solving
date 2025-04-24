

/*

Your job is to write a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:

    There needs to be at least 1 uppercase letter.
    There needs to be at least 1 lowercase letter.
    There needs to be at least 1 number.
    The password needs to be at least 8 characters long.

Your function takes a string argument and returns whether it is a valid password, as a boolean.
*/

function isValidPassword(password: string): boolean {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isLongEnough = password.length >= 8;
    const condi = /[A-Za-z0-9]/.test(password)
    return hasUpperCase && hasLowerCase && hasNumber && isLongEnough;
}

console.log(isValidPassword("Abcd1234"))


