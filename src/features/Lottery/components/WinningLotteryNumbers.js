import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { LotteryBall } from './LotteryBall';

const Wrapper = styled.div `
    transform: translate(-50%, -50%);
    width: auto;
    z-index: 1;
    color: white;
    font-size: 3rem;
    letter-spacing: .5rem;
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 940.8px;
    height: calc(160px - 2rem);
    transform: translate(-50%,-50%);
    margin: 0;

    @media(max-width: 1000px){
        width: 716.18px;
        height: calc(128px - 2rem);
    }

    @media(max-width: 750px){
        width: 492.8px;
        height: calc(96px - 2rem);
    }

    @media(max-width: 500px){
        width: auto;
        flex-direction: column;
        height: 492.8px;
    }
`

const Text = styled.p`
    position: absolute;
    left: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    text-align: center;    
    letter-spacing: 0;
    text-transform: uppercase;
    opacity: .8;
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.8);
    letter-spacing: .3rem;
`

class WinningLotteryNumbers extends Component {
    static propTypes = {
        winningTicket: PropTypes.string.isRequired,
        currentDraw: PropTypes.number.isRequired,
    }

    render(){
        const {
            winningTicket,
            currentDraw,
        } = this.props;

        const numbersToDisplay = winningTicket
            .slice(0, currentDraw)
            .split('');

        return (
            <Wrapper>
                {currentDraw === 0 ?
                    <Text>Click on 'Start Lottery'</Text>
                :
                    numbersToDisplay.map((ballNumber, i) => {
                        const isLastTicketNumber = i === winningTicket.length - 1;
                
                        return (
                            <LotteryBall
                                key={i} 
                                ballColor={isLastTicketNumber ? '#ff0085' : '#f10303'}
                                ballNumber={ballNumber} 
                            /> 

                        );
                    })
                }
            </Wrapper>

        );
    }
}

export { WinningLotteryNumbers };