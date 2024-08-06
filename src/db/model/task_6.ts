import { DataTypes, Model, Optional } from "sequelize";
import sequelizeconnection from "../config";

// Define the attributes for the Employee model
interface EmployeeAttributes {
    employeeId: number;
    firstName: string;
    lastName: string;
    email: string;
    position: string;
    salary: number;
}

// Define the input and output types
export interface EmployeeInput extends Optional<EmployeeAttributes, 'employeeId'> {}
export interface EmployeeOutput extends Required<EmployeeAttributes> {}

// Define the Employee model
class Employee extends Model<EmployeeAttributes, EmployeeInput> implements EmployeeAttributes {
    public employeeId!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public position!: string;
    public salary!: number;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

// Initialize the Employee model
Employee.init(
    {
        employeeId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        salary: {
            type: DataTypes.FLOAT, // Use FLOAT or DECIMAL based on your precision needs
            allowNull: false,
        },
    },
    {
        tableName: 'employees',
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    }
);

export default Employee;
