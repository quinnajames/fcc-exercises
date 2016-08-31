// FreeCodeCamp Intermediate Algorithm 4
// Solution by Quinn James

function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  for (var coll_elem_ssc = 0; coll_elem_ssc < collection.length; coll_elem_ssc++)
    {
      var collectionElement = collection[coll_elem_ssc];
      var spliceCurrent = false;
      for (var source_key_ssc = 0; source_key_ssc < Object.keys(source).length; source_key_ssc++)
        {
            var objectProperty = Object.keys(source)[source_key_ssc];
            if (!collectionElement.hasOwnProperty(objectProperty))
              {
                spliceCurrent = true;
              }
            else
              {
                if (collectionElement[objectProperty] !== source[objectProperty])
                  {
                    spliceCurrent = true;
                  }
              }
        }
    if (!spliceCurrent)
      {
        arr.push(collectionElement);
      }
  }

  // Only change code above this line
  return arr;
}

document.write(whereAreYou([{ "apple": 1, "bacon": 2 }, { "apple": 1 }, { "apple": 1, "bacon": 2, "canada": 2 }], { "apple": 1, "canada": 2 }).length);
document.write (" (should be 1) <br />")

document.write(whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }).length);
document.write (" (should be 2) <br />")

document.write(whereAreYou([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }).length);
document.write (" (should be 3) <br />")

document.write(whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }).length);
document.write (" (should be 1) <br />")
