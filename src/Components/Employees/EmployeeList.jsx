import { useState, useEffect } from "react";
import { User } from "../../Users/User";
import "./Employees.css";
import { getStaffUsers } from "../../services/userService";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((staffArray) => {
      setEmployees(staffArray);
    });
  }, []);

  return (
    <div>
      {employees.map((employeeObj) => {
        return <User user={employeeObj} key={employeeObj.id} />;
      })}
    </div>
  );
};
