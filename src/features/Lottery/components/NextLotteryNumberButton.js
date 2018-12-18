import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Button = styled.button`
    border: none;
    box-sizing: border-box;
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    bottom: 2rem;
    transition: .2s;
    outline: none;
    width: auto;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 1rem;
    border-radius: 7px;
    background-color: transparent;
    color: #282828;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        opacity: ${
            props =>
            props.isDisabled ? '1' : '.8'
        };
    }
`

class NextLotteryNumberButton extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        isDisabled: PropTypes.bool.isRequired,
        currentDraw: PropTypes.number.isRequired,
        onRestartClick: PropTypes.func.isRequired,
    }

    render(){
        const { 
            isDisabled,
            onClick,
            currentDraw,
            onRestartClick,
        } = this.props;

        return (

            <Button onClick={isDisabled ? onRestartClick : onClick}>
                {isDisabled ?
                    'Restart'
                :
                    currentDraw === 0 ? 
                        'Start lottery'
                    :
                        'Next number'
                }
            </Button>

        );
    }
}

export { NextLotteryNumberButton };