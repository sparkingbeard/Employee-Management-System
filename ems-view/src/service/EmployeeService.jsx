
import axios from "axios";

const EMPLOYEE_S_API_BASE_URL = "http://localhost:8080/employees";

class EmployeeService {
    saveEmployee(employee) {
        return axios.post(EMPLOYEE_S_API_BASE_URL, employee);
    }
}

export default new EmployeeService();