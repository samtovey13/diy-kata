const joinNames = namesObj => {
  const namesArr = namesObj.map(item => item.name);
  if (namesArr.length === 1) {
    return namesArr.toString();
  }
  const last2names = namesArr.splice(-2).join(" \& ");
  if (namesArr.length === 0) {      // length=0 because namesArr has been spliced
    return last2names;
  }
  return namesArr.join(", ") + ", " + last2names;
};

module.exports = joinNames;