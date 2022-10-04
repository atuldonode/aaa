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

// export const filterData = async (req, res) => {
//     try {
//         const filters = req.query;
//         const data = await employeeModel.find().sort({name:1});
//         const filteredUsers = data.filter(user => {
//             let isValid = true;
//             for (let key in filters) {
//                 console.log(key, user[key], filters[key]);
//                 isValid = isValid && user[key] == filters[key];
//             }
//             return isValid;
//         });
//         res.send(filteredUsers);
//     } catch (error) {
//         console.log(error);
//         res.send(error)
//     }
// };


// export const filterData = async (req, res) => {
// try {
//     const filter = req.query;
//     console.log(filter);
//     let where = {};
//     if (filter.city) {
//         where = { $regex: filter.city, $options: "i" }
//     }
//     // const filters = req.query;
//     //         const data = await employeeModel.find().sort({name:1});
//     //         const filteredUsers = data.filter(user => {
//     //             let isValid = true;
//     //             for (let key in filters) {
//     //                 console.log(key, user[key], filters[key]);
//     //                 isValid = isValid && user[key] == filters[key];
//     //             }
//     //             return isValid;
//     //         });
//     let query = employeeModel.find(where);
//     const page = parseInt(req.body.page) || 1;
//     const pageSize = parseInt(req.body.limit) || 10;
//     const skip = (page - 1) * pageSize;
//     const total = await employeeModel.countDocuments(where);
//     const pages = Math.ceil(total / pageSize);

//     if (page > pages) {
//         return res.status(404).json({
//             status: "fail",
//             message: "No page found",
//         });
//     }
//     const result = await query.skip(skip).limit(pageSize);
//     res.json({
//         status: "success",
//         filter,
//         count: result.length,
//         page,
//         pages,
//         data: result
//     });
// } catch (error) {
//     console.log(error);
//     res.status(400).json({
//         status: "error",
//         message: "Server Error",
//     });
//   }
// };


export const filterData = async (req, res) => {
    try {
        const filter = req.query;
        let where = {};
        if (filter.city) {
            where.city = { $regex: filter.city, $options: "i" }
        }
        let query = employeeModel.find(where);
        const page =  1;
        const pageSize =  10;
        const skip = (page - 1) * pageSize;
        const total = await employeeModel.countDocuments(where);
        const pages = Math.ceil(total / pageSize);

        if (page > pages) {
            return res.status(404).json({
                status: "fail",
                message: "No page found",
            });
        }
        let result = await query.skip(skip).limit(pageSize);
        res.json({
            status: "success",
            filter,
            count: result.length,
            page,
            pages,
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "error",
            message: "Server Error",
        });
    }
};