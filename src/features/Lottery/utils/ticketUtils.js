const createLotteryTicket = (ticketLength) => {
    let ticket = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < ticket.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [ticket[i], ticket[j]] = [ticket[j], ticket[i]];
    }

    return ticket
        .slice(0, ticketLength)
        .join('');
};

const createLotteryTickets = (ticketLength, amount) => {
    let tickets = [];
    for (let i = 0; i < amount; i++) {
        const ticket = createLotteryTicket(ticketLength);
        tickets.push(ticket);
    }

    return tickets;
};

const filterTickets = (tickets, winningTicket, nextDraw) => {
    const checkIfTicketMatches = (str, search, pos) => str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    const searchString = winningTicket.slice(0, nextDraw);
    const ticketsArr = tickets.filter(ticket => checkIfTicketMatches(ticket, searchString));
    
    return ticketsArr;
};

export {
    createLotteryTicket,
    createLotteryTickets,
    filterTickets,
};
