var assert = {
  isTrue: function(test, assertionToCheck) {
    console.log(test)
    if (!assertionToCheck) {
      throw new Error("> Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("%c > Success", 'color: #bada55')
    }
  }
};
