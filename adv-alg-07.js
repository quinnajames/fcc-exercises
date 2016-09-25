//// FreeCodeCamp Advanced Algorithm #7 - Make a Person
//// Solution by Quinn James

//// TASK:
//// ===============================
//// Fill in the object constructor with the following methods below:

////// getFirstName()
////// getLastName()
////// getFullName()
////// setFirstName(first)
////// setLastName(last)
////// setFullName(firstAndLast)

//// Run the tests to see the expected output for each method.
//// The methods that take an argument must accept only one
//// argument and it has to be a string.

/// These methods must be the only available means of
/// interacting with the object.

var Person = function(firstAndLast) {
  
    var fullName = firstAndLast;
 

 	// Note that you can do this basic task in several ways
 	// One way is a giant closure that returns all the functions.
 	// However, if the Person constructor returns an object,
 	// then instanceof will test the object instead of the
 	// constructor, and instances of Person thus won't pass
 	// a test checking if they *are* instances of Person.

 	// Another way to do this is outside of the object, but
 	// that seems messy to me; I'd prefer to take care of
 	// getters and setters inside the object.

 	// Yet another way is using object.defineProperty(),
 	// taking advantage of the built-in "get" and "set"
 	// parameters. However, then you can't choose your
 	// own names for the getter and setter functions.

    this.getFullName = function() {
      return fullName;
    };
    this.setFullName = function(firstAndLast) {
      fullName = firstAndLast; return fullName;
    };
 
 	// The part before the first space = first name
 	// (Note: assumes no spaces in person's first name.
 	// That's OK for this assignment, but best practice
 	// is to ask for first and last names separately.)
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
    // Reconstitutes the full name based on new first name
    this.setFirstName = function(first) {
      fullName = first + " " + fullName.split(" ")[1];
      return fullName;
    };
 
 	// These are similar to the first name functions
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
    this.setLastName = function(last) {
      fullName = fullName.split(" ")[0] + " " + last;
      return fullName;
    };
  
};