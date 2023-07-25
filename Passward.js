 function StrongPassword(password) {
  let missing = 0;

  if (password.length < 6) missing++;
  if (password.length > 20) {
    password = password.slice(0, 20);
  }

  let hasLowercase = /[a-z]/.test(password);
  let hasUppercase = /[A-Z]/.test(password);
  let hasDigit = /\d/.test(password);

  if (!hasLowercase) missing++;
  if (!hasUppercase) missing++;
  if (!hasDigit) missing++;

  let repeatingCount = 0;
  for (let i = 2; i < password.length; i++) {
    if (password[i] === password[i - 1] && password[i] === password[i - 2]) {
      repeatingCount++;
      i++; 
    }
  }

  
  missing = Math.max(missing, repeatingCount);


  return Math.max(6 - password.length, missing);
}

console.log(StrongPassword("aA1")); // Output: 3
console.log(StrongPassword("1337C0d3")); // Output: 0
console.log(StrongPassword("a")); // Output: 5