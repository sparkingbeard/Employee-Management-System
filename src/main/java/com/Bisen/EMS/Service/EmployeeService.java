package com.Bisen.EMS.Service;

import java.util.List;

import com.Bisen.EMS.Employee;


//using interface instead of class to achieve abstraction
public interface EmployeeService {
    String createEmployee(Employee employee);
    List<Employee> readEmployees();
    String updateEmployee(Long id, Employee employee);
    boolean deleteEmployee(Long id);
    Employee readEmployee(Long id);
}
