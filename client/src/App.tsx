/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCurrentlocation } from './hooks'
import { Header } from './components/Header'
import styled from 'styled-components'
import { Colors } from './style/Colors'

/*
 * Constants
 */

const geolocationOptions = {
    timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
}

/*
 * Styles
 */

const ContentContainer = styled.div`
    margin: 10px;
    padding: 10px;
    background-color: ${Colors.LIGHT_GREEN_60};
    border-radius: 5px;
    box-shadow: 0px 0px 10px ${Colors.LIGHT_GREEN_60};
`

/*
 * App
 */

export function App() {
    const { location, error } = useCurrentlocation(geolocationOptions)

    console.log(location, error)

    return (
        <>
            <Header />
            <ContentContainer>CONTENT</ContentContainer>
        </>
    )
}
