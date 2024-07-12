import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../../services/employeeService";
import "./Employees.css";
import { getTicketsByEmployeeId } from "../../services/ticketService";

export const EmployeeDetails = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState({});
  const [workingTickets, setWorkingTickets] = useState([]);

  useEffect(() => {
    getEmployeeById(employeeId).then((employee) => {
      setEmployee(employee[0]);
    });
  }, [employeeId]);

  useEffect(() => {
    getTicketsByEmployeeId(employee.id).then((ticketArray) =>
      setWorkingTickets(ticketArray)
    );
  }, [employee]);

  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email : </span>
        {employee.user?.email}
      </div>
      <div>
        <span className="employee-info">Specialty : </span>
        {employee.specialty}
      </div>
      <div>
        <span className="employee-info">Rate : </span>
        {employee.rate}
      </div>
      <div>Currently working on {workingTickets.length} tickets</div>
    </section>
  );
};
