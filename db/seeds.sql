INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 2),
  ('Virginia', 'Woolf', 5, 1),
  ('Piers', 'Gaveston', 2, 2),
  ('Charles', 'LeRoi', 3, 3),
  ('Katherine', 'Mansfield', 3, 3),
  ('Dora', 'Carrington', 2, 2),
  ('Edward', 'Bellamy', 4, 1),
  ('Montague', 'Summers', 2, 2),
  ('Octavia', 'Butler', 1, 2),
  ('Unica', 'Zurn', 3, 3);

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Manager', 100000, 1),
  ('Lead Engineer', 80000, 2),
  ('Software Engineer', 60000, 2),
  ('Accountant', 60000, 3),
  ('Legal Team Lead', 75000, 4),
  ('Lawyer', 50000, 4);

INSERT INTO departments (name)
VALUES
  ('Management'),
  ('Engineering'),
  ('Finance'),
  ('Legal');