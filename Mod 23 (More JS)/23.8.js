function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const third100Rate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }

    else if(ticketQuantity <= 200){
        const first100Total = 100 * first100Rate;
        const restTickets = ticketQuantity - 100;
        const restTicketsPrice = restTickets * second100Rate;
        const totalTicketPrice = first100Total + restTicketsPrice;
        return totalTicketPrice;
    }

    else {
        const first100Total = 100 * first100Rate;
        const second100Total = 100 * second100Rate;
        const restTickets = ticketQuantity - 200;
        const restTicketsPrice = restTickets * third100Rate;
        const totalTicketPrice = first100Total + second100Total + restTicketsPrice;
        return totalTicketPrice;
    }
}

const price = ticketPrice(300);
console.log(price);