/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'
import _ from 'lodash'

import { useCurrentlocation } from './hooks'
import { Header } from './components/Header'
import { Colors } from './style/Colors'
import { ForecastType, ForecastResponse } from './types/Forecast'
import { Forecast } from './components/Forecast'

/*
 * Styles
 */

const ContentContainer = styled.div`
    margin: 10px;
    background-color: ${Colors.OFF_WHITE};
    border-radius: 10px;
    box-shadow: 0px 0px 10px ${Colors.LIGHT_GREEN_60};
`

/*
 * App
 */

export function App() {
    const { loading: loadingLocation, location, error } = useCurrentlocation()
    const [loadingWeather, setLoadingWeather] = useState<boolean>(false)
    const [forecast, setForecast] = useState<ForecastType | null>(null)

    const hasLocation = !_.isEmpty(location)

    console.log('LOCATION', location)

    console.log('HAS LOCATION?', hasLocation)

    const getForecast = useCallback(async () => {
        try {
            setLoadingWeather(true)
            const response: ForecastResponse = await axios.get(
                `http://localhost:8080/forecast/${location?.lat}/${location?.lon}`
            )
            console.log('RESPONSE', response)
            setForecast(response.data)
            setLoadingWeather(false)
        } catch (e) {
            setLoadingWeather(false)
        }
    }, [location])

    useEffect(() => {
        if (hasLocation) {
            getForecast()
        }
    }, [])

    return (
        <>
            <Header />
            <>
                {loadingLocation ? (
                    <p>Fetching your location...</p>
                ) : (
                    <p>
                        {location?.city}, {location?.country}
                    </p>
                )}
            </>
            <ContentContainer>
                <>
                    {loadingWeather ? (
                        <ClipLoader
                            color={Colors.BLUE}
                            loading={loadingWeather}
                            size={150}
                        />
                    ) : forecast ? (
                        <Forecast
                            currentForecast={forecast?.currentForecast}
                            dailyForecast={forecast?.dailyForecast}
                        />
                    ) : (
                        error && <p>ERROR</p>
                    )}
                </>
            </ContentContainer>
        </>
    )
}
