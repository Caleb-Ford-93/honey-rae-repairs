import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../Components/Welcome/Welcome";
import { CustomerNav } from "../Components/Nav/CustomerNav";
import { TicketList } from "../Components/Tickets/TicketList";
import { TicketForm } from "../Components/Forms/TicketForm";

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
        <Route path="tickets">
          <Route index element={<TicketList currentUser={currentUser} />} />
          <Route
            path="create"
            element={<TicketForm currentUser={currentUser} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};
