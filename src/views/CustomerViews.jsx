import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../Components/Welcome/Welcome";
import { CustomerNav } from "../Components/Nav/CustomerNav";
import { TicketList } from "../Components/Tickets/TicketList";

export const CustomerViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CustomerNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route
          path="tickets"
          element={<TicketList currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
