import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService";
import { Ticket } from "./Ticket";
import "./Tickets.css";
import { FilterBar } from "./FilterBar";

export const TicketList = ({ currentUser }) => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showOpenOnly, setShowOpenOnly] = useState(false);

  const getAndSetTickets = () => {
    getAllTickets().then((ticketsArray) => {
      if (currentUser.isStaff) {
        setAllTickets(ticketsArray);
      } else {
        const customerTickets = ticketsArray.filter(
          (ticket) => ticket.userId === currentUser.id
        );
        setAllTickets(customerTickets);
      }
    });
  };
  useEffect(() => {
    getAndSetTickets();
  }, [currentUser]);

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

  useEffect(() => {
    if (showOpenOnly) {
      const openTickets = allTickets.filter((ticket) => !ticket.dateCompleted);
      setFilteredTickets(openTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showOpenOnly, allTickets]);

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <FilterBar
        allTickets={allTickets}
        setSearchTerm={setSearchTerm}
        setShowEmergencyOnly={setShowEmergencyOnly}
        currentUser={currentUser}
        setShowOpenOnly={setShowOpenOnly}
      />
      <article className="tickets">
        {filteredTickets.map((ticket) => {
          return (
            <Ticket
              ticket={ticket}
              currentUser={currentUser}
              getAndSetTickets={getAndSetTickets}
              key={ticket.id}
            />
          );
        })}
      </article>
    </div>
  );
};
