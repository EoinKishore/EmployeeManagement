import {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  softDeleteEmployee
} from '../models/employeeModel.js';

export const getAll = async (req, res) => {
  try {
    const [rows] = await getAllEmployees();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getById = async (req, res) => {
  try {
    const [rows] = await getEmployeeById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: 'Employee not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const create = async (req, res) => {
  try {
    await createEmployee(req.body); 
    console.log('the req body', req.body);
    
    res.status(201).json({ message: 'Employee created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    await updateEmployee(req.params.id, req.body);
    res.json({ message: 'Employee updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    await softDeleteEmployee(req.params.id);
    res.json({ message: 'Employee deleted (soft)' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
