import { FC } from 'react'
import styled from 'styled-components'
import logo from '../images/sunny.png'
import { Colors } from '../style/Colors'

/*
 * Styles
 */

const Container = styled.div`
    background-color: ${Colors.SAND};
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Logo = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 5px;
`

const Text = styled.p`
    color: ${Colors.BLUE};
    font-size: 20px;
`

/*
 * Header
 */

export const Header: FC = () => {
    return (
        <Container>
            <Logo src={logo} />
            <Text>Weather App</Text>
        </Container>
    )
}
