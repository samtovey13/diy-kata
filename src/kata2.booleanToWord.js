const booleanToWord = boolean => {
  if (typeof boolean !== "boolean") {
        return "not a boolean data type";
    }
    if (boolean === true) {
        return "yes";
    }
    return "no";
};

module.exports = booleanToWord;
