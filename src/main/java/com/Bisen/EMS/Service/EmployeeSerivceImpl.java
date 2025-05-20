package com.Bisen.EMS.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Bisen.EMS.Employee;
import com.Bisen.EMS.Model.EmployeeEntity;
import com.Bisen.EMS.Repository.EmployeeRepository;

@Service
public class EmployeeSerivceImpl implements EmployeeService {

  @Autowired
  private EmployeeRepository emprepo;

  List<Employee> employees = new ArrayList<>();

  @Override
  public String createEmployee(Employee employee) {

    EmployeeEntity employeeEntity = new EmployeeEntity();
    BeanUtils.copyProperties(employee, employeeEntity);
    emprepo.save(employeeEntity);
    return "Employee created successfully";
  }

  @Override
  public List<Employee> readEmployees() {
    try {
      List<EmployeeEntity> employeeList = emprepo.findAll();
      List<Employee> employees = new ArrayList<>();

      for (EmployeeEntity employeeEntity : employeeList) {
        Employee emp = new Employee();
        emp.setId(employeeEntity.getId());
        emp.setName(employeeEntity.getName());
        emp.setPhone(employeeEntity.getPhone());
        emp.setEmail(employeeEntity.getEmail());
        employees.add(emp);
      }
      return employees;
    } catch (Exception e) {
      e.printStackTrace();
      throw e;
    }
  }

  @Override
  public String updateEmployee(Long id, Employee employee) {
    EmployeeEntity exisiting_entity = emprepo.findById(id).get();

    exisiting_entity.setId(employee.getId());
    exisiting_entity.setName(employee.getName());
    exisiting_entity.setPhone(employee.getPhone());
    exisiting_entity.setEmail(employee.getEmail());
    emprepo.save(exisiting_entity);
    return "Employee updated Successfully";
  }

  @Override
  public boolean deleteEmployee(Long id) {
    EmployeeEntity emp = emprepo.findById(id).get();
    emprepo.delete(emp);
    return true;
  }

  @Override
  public Employee readEmployee(Long id) {
    EmployeeEntity entity = new EmployeeEntity();
    entity = emprepo.findById(id).get();
    Employee emp = new Employee();
    BeanUtils.copyProperties(entity, emp);
    return emp;
  }

}
