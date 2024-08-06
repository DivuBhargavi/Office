import express, { Request, Response } from 'express';
import Employee from '../model/task_6'; // Ensure this path is correct

const employeeRoute = express.Router();

employeeRoute.use(express.json());

// GET all employees
employeeRoute.get('/employees', async (req: Request, res: Response) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// POST a new employee
employeeRoute.post('/employees', async (req: Request, res: Response) => {
  const { firstName, lastName, email, position, salary } = req.body;

  try {
    const newEmployee = await Employee.create({ firstName, lastName, email, position, salary });
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// PUT update an employee by their email
employeeRoute.put('/employees/:email', async (req: Request, res: Response) => {
  const { email } = req.params;
  const { firstName, lastName, position, salary } = req.body;

  try {
    const employeeToUpdate = await Employee.findOne({ where: { email } });

    if (!employeeToUpdate) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    // Update only the fields provided
    if (firstName) employeeToUpdate.firstName = firstName;
    if (lastName) employeeToUpdate.lastName = lastName;
    if (position) employeeToUpdate.position = position;
    if (salary) employeeToUpdate.salary = salary;
    
    await employeeToUpdate.save();
    res.json(employeeToUpdate);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// DELETE an employee by their ID
employeeRoute.delete('/employees/:employeeId', async (req: Request, res: Response) => {
  const { employeeId } = req.params;

  try {
    const employeeToDelete = await Employee.findByPk(employeeId);

    if (!employeeToDelete) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    await employeeToDelete.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default employeeRoute;
