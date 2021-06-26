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
import { Locations } from './components/Locations'

/*
 * Types
 */

type SelectedLocationType = {
    lat: string
    lon: string
}

/*
 * Constants
 */

const SelectedLocationDefault = {
    lat: '',
    lon: '',
}

/*
 * Styles
 */

const ContentContainer = styled.div`
    margin: 20px;
    width: 70%;
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
    const [selectedLocation, setSelectedLocation] =
        useState<SelectedLocationType>(SelectedLocationDefault)

    const getForecast = useCallback(async () => {
        try {
            setLoadingWeather(true)
            const response: ForecastResponse = await axios.get(
                `http://localhost:8080/forecast/${selectedLocation.lat}/${selectedLocation.lon}`
            )
            setForecast(response.data)
            setLoadingWeather(false)
        } catch (e) {
            setLoadingWeather(false)
        }
    }, [selectedLocation])

    useEffect(() => {
        if (selectedLocation && !loadingLocation) {
            getForecast()
        }
    }, [selectedLocation])

    useEffect(() => {
        if (!loadingLocation && location) {
            setSelectedLocation({
                lat: location.lat,
                lon: location.lon,
            })
        }
    }, [loadingLocation])

    const handleSelectedLocationClick = useCallback((lat, lon) => {
        setSelectedLocation({
            lat,
            lon,
        })
    }, [])

    return (
        <>
            <Header />
            {loadingLocation && <p>Fetching your location...</p>}
            <Locations
                currentLocation={location}
                onSelectedLocationClick={handleSelectedLocationClick}
            />

            <ContentContainer>
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
            </ContentContainer>
        </>
    )
}
