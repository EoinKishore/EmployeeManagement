import db from '../config/db.js';

export const getAllEmployees = () => {
  return db.query('SELECT * FROM employees WHERE deleted_at IS NULL');
};

export const getEmployeeById = (id) => {
  return db.query('SELECT * FROM employees WHERE id = ? AND deleted_at IS NULL', [id]);
};

export const createEmployee = (data) => {
  const { name, employee_id, department, designation, project, type, status, image_url } = data;

  return db.query(
    'INSERT INTO employees (name, employee_id, department, designation, project, type, status, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [name, employee_id, department, designation, project, type, status, image_url]
  );
};

export const updateEmployee = (id, data) => {
  const { name, department, designation, project, type, status, image_url } = data;
  return db.query(
    'UPDATE employees SET name=?, department=?, designation=?, project=?, type=?, status=?, image_url=? WHERE id=?',
    [name, department, designation, project, type, status, image_url, id]
  );
};

export const softDeleteEmployee = (id) => {
  return db.query('UPDATE employees SET deleted_at = NOW() WHERE id = ?', [id]);
};
