import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core'

const spin = keyframes `
    from {
        transform: rotate(360deg) scale(0);
    }
    
    to {
        transform: rotate(0deg) scale(1);
    }
`

const float = keyframes`
    0% {
        box-shadow: 0 2px 7px 0px rgba(0,0,0,0.2);
        transform: translatey(0px);
    }

    50% {
        box-shadow: 0 4px 10px 0px rgba(0,0,0,0.1);
        transform: translatey(-10px);
    }

    100% {
        box-shadow: 0 2px 7px 0px rgba(0,0,0,0.2);
        transform: translatey(0px);
    }
`

const Spin = styled.div`
    animation: ${spin} .4s;
`

const Ball = styled.div `
    color: white;
    position: relative;
    transition: .5s;
    text-indent: .5rem;
    margin-right: .2rem;
    margin-left: .2rem;
    height: 8rem;
    width: 8rem;
    font-size: 2rem;
    transform: translatey(0px);
	animation: ${float} 3s ease-in-out infinite;
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 50%;
    @media(max-width: 1000px){
        height: 6rem;
        width: 6rem;
    }

    @media(max-width: 750px){
        height: 4rem;
        width: 4rem;
    }

    @media(max-width: 500px){
        width: 4rem;
        height: 4rem;
        margin-top: .2rem;
        margin-bottom: .2rem;
    }

    background-color: ${ 
        props => props.ballColor 
    };
`

const Number = styled.div `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 3rem;
    user-select: none;
    font-family: sans-serif;

    @media(max-width: 750px){
        font-size: 2rem;
    }

    @media(max-width: 500px){
        font-size: 2rem;
    }

`

class LotteryBall extends Component {
    static propTypes = {
        ballColor: PropTypes.string.isRequired,
        ballNumber: PropTypes.string.isRequired,
    }

    render(){
        const {
            ballColor,
            ballNumber,
        } = this.props;

        return (
            <Spin>
                <Ball ballColor={ballColor}>
                    <Number>
                        { ballNumber }
                    </Number>
                </Ball>
            </Spin>
        );
    }
}

export { LotteryBall };