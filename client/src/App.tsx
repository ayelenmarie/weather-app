/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'

import { useCurrentlocation } from './hooks'
import { Header } from './components/Header'
import { Colors } from './style/Colors'
import { Forecast, ForecastResponse } from './types/Forecast'
import { CurrentForecast } from './components/CurrentForecast'
import _ from 'lodash'

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
    const [loading, setLoading] = useState<boolean>(false)
    const [forecast, setForecast] = useState<Forecast | null>(null)

    console.log('LOCATION', location)

    console.log('HAS LOCATION?', location)

    const getForecast = useCallback(async () => {
        try {
            setLoading(true)
            const response: ForecastResponse = await axios.get(
                `http://localhost:8080/forecast/${location.latitude}/${location.longitude}`
            )
            console.log('RESPONSE', response)
            setForecast(response.data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
        }
    }, [location])

    useEffect(() => {
        if (location) {
            console.log('latitude', location.latitude)
            getForecast()
        }
    }, [])

    return (
        <>
            <Header />
            <ContentContainer>
                {loading ? (
                    <ClipLoader
                        color={Colors.BLUE}
                        loading={loading}
                        size={150}
                    />
                ) : forecast ? (
                    <CurrentForecast
                        currentForecast={forecast?.currentForecast}
                    />
                ) : (
                    error && <p>ERROR</p>
                )}
            </ContentContainer>
        </>
    )
}
