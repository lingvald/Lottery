import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.div `
    padding-top: 2rem;
    color: #282828;
`

const Heading = styled.p `
    padding: 1rem;
    text-align: center;
    font-size: 2rem;
    
    @media(max-width: 500px){
        display: none;
    }
`

const Count = styled.p `
    padding-left: .5rem;
    padding-right: .5rem;
    font-weight: lighter;
    font-size: 2rem;
    text-align: center;
    
    @media(max-width: 500px){
        position: absolute;
        top: 0;
        right: 0;
    }
`

class LotteryTicketsRemaining extends Component {
    static propTypes = {
        potentialWinnersRemaining: PropTypes.number.isRequired,
    }

    render() {
        const { potentialWinnersRemaining } = this.props;

        return (
            <Wrapper>
                <Heading>
                    Potential winners:
                </Heading>
                <Count>
                    { potentialWinnersRemaining }
                </Count>
            </Wrapper>

        );
    }
}

export { LotteryTicketsRemaining };