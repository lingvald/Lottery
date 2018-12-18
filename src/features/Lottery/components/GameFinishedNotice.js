import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core'

const show = keyframes `
    from {
        opacity: 0;
        top: 14rem;
    }
    
    to {
        opacity: 1;
        top: 22rem;
    }
`

const Wrapper = styled.div();

const Message = styled.p`
    text-align: center;
    left: 50%;
    transform: translate(-50%,-50%);
    width: auto;
    font-size: 2rem;
    color: #282828;
    position: relative;
    top: 22rem;
    animation-name: ${show};
    animation-duration: .5s;

    @media(max-width: 750px){
        width: 13rem;
    }

    @media(max-width: 450px){
        width: auto;
    }
`

const Ticket = styled.span`
    font-size: 2rem;
    display: block;
    margin: 1rem;    
`

class GameFinishedNotice extends Component {
    static propTypes = {
        doesWinnerExists: PropTypes.bool.isRequired,
        numberOfWinners: PropTypes.number.isRequired,
        winningTicket: PropTypes.string.isRequired,
    }

    render(){
        const {
            doesWinnerExists,
            numberOfWinners,
            winningTicket,
        } = this.props;

        return (
            <Wrapper>
                {doesWinnerExists ?
                    <Message>
                        {numberOfWinners === 1 ?
                            'There is a winner!' 
                        :
                            `There are ${numberOfWinners} winners!`
                        }
                        <Ticket>
                        {winningTicket} 
                        </Ticket>
                    </Message>
                    :
                    <Message>
                        No winner this time!
                    </Message>
                }
            </Wrapper>
        );
    }
}

export { GameFinishedNotice };