// Write your solution in this file!
const employee = {
    name: "Derek",
    streetAddress: "11742 W Bellfort St.",
};
function updateEmployeeWithKeyAndValue(employee){
    const newEmployee = {...employee};
    newEmployee.name = "Sam";
    newEmployee.streetAddress = "11 Broadway";
    return newEmployee;
    }
function destructivelyUpdateEmployeeWithKeyAndValue(employee){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee){
    const newEmployeeByKey = {...employee};
    delete newEmployeeByKey.name;
    return newEmployeeByKey;
}
function destructivelyDeleteFromEmployeeByKey(employee){
    delete employee.name;
    return employee;
}