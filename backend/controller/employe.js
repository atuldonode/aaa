import employeeModel from "../models/employye.model.js";

// Create Employee
export const createEmployee = async (req, res) => {
    const { firstName, lastName, email, mobile, dob, city, img } = req.body;
    try {
        const employeeDetails = new employeeModel({
            firstName, lastName, email, mobile, dob, city,
            img
        });
        await employeeDetails.save();
        res.status(201).json({ message: "Employee Created" })
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
};

// Find all users
export const employeeList = async (req, res) => {
    try {
        const list = await employeeModel.find();
        // console.log(list);
        res.status(200).send(list)
    } catch (error) {
        res.status(400).send(error)
    }
}

// edit Employee Details
export const editEmployee = async (req, res) => {
    try {
        const empId = req.params.id;
        const editDetails = await employeeModel.findByIdAndUpdate(empId, { $set: req.body });
        res.status(200).json({ message: "Employee Details Updated." })
    } catch (error) {
        res.status(400).send(error)
    }
};

// Delete employee
export const deleteEmployee = async (req, res) => {
    try {
        const empId = req.params.id;
        const deleteEmp = await employeeModel.findByIdAndDelete(empId);
        console.log(deleteEmp);
        res.status(200).json({ message: "Employee Deleted" })
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
};
