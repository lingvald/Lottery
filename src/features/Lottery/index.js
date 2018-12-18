import React, { Component } from 'react';

import { createLotteryTicket, createLotteryTickets, filterTickets } from './utils/ticketUtils';
import { NextLotteryNumberButton } from './components/NextLotteryNumberButton';
import { LotteryTicketsRemaining } from './components/LotteryTicketsRemaining';
import { WinningLotteryNumbers } from './components/WinningLotteryNumbers';
import { GameFinishedNotice } from './components/GameFinishedNotice';

const LOTTERY_TICKET_LENGTH = 7;
const TICKETS_SOLD = 10000;

class Lottery extends Component {
    newState = () => ({
        tickets: createLotteryTickets(LOTTERY_TICKET_LENGTH, TICKETS_SOLD),
        winningTicket: createLotteryTicket(LOTTERY_TICKET_LENGTH),
        currentDraw: 0,
        isGameFinished: false,
    });
    
    state = this.newState();

    handleNextLotteryNumberClick = () => {
        const {
            tickets,
            winningTicket,
            currentDraw,
        } = this.state;

        const nextDraw = currentDraw + 1;
        const remainingTickets = filterTickets(tickets, winningTicket, nextDraw);

        
        const isNoTicketsRemaining = !remainingTickets.length;
        const isGameFinished = isNoTicketsRemaining ? true : nextDraw === LOTTERY_TICKET_LENGTH;
        
        this.setState({
            tickets: remainingTickets,
            currentDraw: isGameFinished ? LOTTERY_TICKET_LENGTH : nextDraw,
            isGameFinished,
        });
    }

    render(){
        const {
            tickets,
            currentDraw,
            isGameFinished,
            winningTicket,
        } = this.state;

        const ticketsLeft = tickets.length;
        const doesWinnerExists = tickets.length > 0;  

        return (
            <div>

                <LotteryTicketsRemaining potentialWinnersRemaining={ticketsLeft} />

                <WinningLotteryNumbers
                    winningTicket={winningTicket}
                    currentDraw={currentDraw}
                />

                <NextLotteryNumberButton
                    currentDraw={currentDraw}
                    isDisabled={isGameFinished}  
                    onClick={this.handleNextLotteryNumberClick} 
                    onRestartClick={() => this.setState(this.newState())}
                />

                {isGameFinished && 
                    <GameFinishedNotice
                        doesWinnerExists={doesWinnerExists} 
                        numberOfWinners={ticketsLeft}
                        winningTicket={winningTicket} 
                    />
                }

            </div>
        );
    }
}

export { Lottery };