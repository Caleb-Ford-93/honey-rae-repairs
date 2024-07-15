import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../Components/Welcome/Welcome";
import { TicketList } from "../Components/Tickets/TicketList";
import { CustomerList } from "../Components/Customers/CustomersList";
import { CustomerDetails } from "../Components/Customers/CustomerDetails";
import { EmployeeList } from "../Components/Employees/EmployeeList";
import { EmployeeDetails } from "../Components/Employees/EmployeeDetails";
import { EmployeeForm } from "../Components/Forms/EmployeeForm";
import { EmployeeNav } from "../Components/Nav/EmployeeNav";

export const EmployeeViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <EmployeeNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route
          path="tickets"
          element={<TicketList currentUser={currentUser} />}
        />
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route
          path="profile"
          element={<EmployeeForm currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
