// Chapter 5
// FLATTENING
var arrays = [[1, 2, 3], [4, 5], [6]];
arrays.reduce(function (a, b) {
  return a.concat(b);
});

// MOTHER-CHILD AGE DIFFERENCE
var peopleWithMothers = [];
var arrayOfMotherhoodAge = [];
function hasKnownMother (ancestorArray) {
  for (var i = 0; i < ancestorArray.length; i++) {
    if (ancestorArray[i].mother != null) {
      peopleWithMothers.push(ancestorArray[i]);
    }
  }
}

hasKnownMother(ancestry);

peopleWithMothers.forEach(function (eachPerson) {
  if (byName[eachPerson.mother]) {
    arrayOfMotherhoodAge.push(eachPerson.born - byName[eachPerson.mother].born);
  }
})
console.log(average(arrayOfMotherhoodAge));

// Historical life expectancy
var objectOfDeath = {};
ancestry.forEach(function (deadPerson) {
  var deathCentury = Math.ceil(deadPerson.died / 100);
  if (objectOfDeath[deathCentury]) {
    objectOfDeath[deathCentury].push(deadPerson.died - deadPerson.born);
  } else {
    objectOfDeath[deathCentury] = [];
    objectOfDeath[deathCentury].push(deadPerson.died - deadPerson.born);
  }
})
function avgDeathAge (deathAges) {
  for (prop in deathAges) {
    console.log(prop + ": " + Math.round(average(deathAges[prop]) * 10)/10);
  }
}
avgDeathAge(objectOfDeath);

// Every and then some
function every (array, valueCheck) {
  for (var i = 0; i < array.length; i++) {
    if (valueCheck(array[i]) !== true) {
      return false;
    }
  }
  return true;
}

function some (array, valueCheck) {
  for (var i = 0; i < array.length; i++) {
    if (valueCheck(array[i]) === true) {
      return true;
    }
  }
  return false;
}
