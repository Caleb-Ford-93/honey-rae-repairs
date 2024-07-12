import { useState, useEffect } from "react";
import { User } from "../Users/User";
import "./Employees.css";
import { getStaffUsers } from "../../services/userService.jsx";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((staffArray) => {
      setEmployees(staffArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return (
          <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
            <User user={employeeObj} />
          </Link>
        );
      })}
    </div>
  );
};
