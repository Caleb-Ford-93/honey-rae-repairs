import "./app.css";
import { CustomerList } from "./Components/Customers/CustomersList";
// import { TicketList } from "./Components/Tickets/TicketList";

export const App = () => {
  return (
    <>
      {/* <TicketList /> */}
      <CustomerList />
    </>
  );
};
