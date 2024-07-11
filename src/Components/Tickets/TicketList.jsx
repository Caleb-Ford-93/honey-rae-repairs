import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService";
import { Ticket } from "./Ticket";
import "./Tickets.css";
import { FilterBar } from "./FilterBar";

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
    });
  }, []); //ONLY runs on initial render of component

  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter((ticket) => ticket.emergency);
      setFilteredTickets(emergencyTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showEmergencyOnly, allTickets]);

  useEffect(() => {
    const searchTickets = allTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTickets(searchTickets);
  }, [searchTerm, allTickets]);

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <FilterBar
        allTickets={allTickets}
        setSearchTerm={setSearchTerm}
        setShowEmergencyOnly={setShowEmergencyOnly}
      />
      <article className="tickets">
        {filteredTickets.map((ticket) => {
          return <Ticket ticket={ticket} key={ticket.id} />;
        })}
      </article>
    </div>
  );
};
