const getEmployerRole = (employeeName, employees) => {
    if (!employees.find(object => object.name === employeeName)) {
        return "Error: employee name not recognised";
    }
    if (!employees.find(object => object.name === employeeName).role) {
        return "Error: no role found for this employee";
    }
    return employees.find(object => object.name === employeeName).role;
};

module.exports = getEmployerRole;
