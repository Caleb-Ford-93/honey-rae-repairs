import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../Components/Nav/NavBar";
import { Welcome } from "../Components/Welcome/Welcome";
import { TicketList } from "../Components/Tickets/TicketList";
import { CustomerList } from "../Components/Customers/CustomersList";
import { CustomerDetails } from "../Components/Customers/CustomerDetails";
import { EmployeeList } from "../Components/Employees/EmployeeList";
import { EmployeeDetails } from "../Components/Employees/EmployeeDetails";
import { useEffect, useState } from "react";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    setCurrentUser(honeyUserObject);
  }, []);

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
      </Route>
    </Routes>
  );
};
