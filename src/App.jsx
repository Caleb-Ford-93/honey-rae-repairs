import "./app.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { EmployeeList } from "./Components/Employees/EmployeeList";
import { CustomerList } from "./Components/Customers/CustomersList";
import { TicketList } from "./Components/Tickets/TicketList";
import { NavBar } from "./Components/Nav/NavBar";
import { Welcome } from "./Components/Welcome/Welcome";
import { CustomerDetails } from "./Components/Customers/CustomerDetails";
import { EmployeeDetails } from "./Components/Employees/EmployeeDetails";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
