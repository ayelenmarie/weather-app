/* eslint-disable react/prop-types */
import { FC } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'

import { Colors } from '../style/Colors'
import { CurrentForecast as CurrentForecastType } from '../types/Forecast'
import cloud from '../images/cloud.png'

/*
 * Types
 */

export type CurrentForecastProps = {
    currentForecast: CurrentForecastType
}

/*
 * Styles
 */

const Container = styled.div`
    padding: 10px;
    background-color: ${Colors.WHITE};
    border-radius: 10px 0px 0px 10px;
    grid-row-start: 1;
    grid-row-end: 3;

    @media (max-width: 810px) {
        border-radius: 10px 10px 0px 0px;
    }
`

const VerticalTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 0px 5px 0px;
`

const DateText = styled.p`
    color: ${Colors.GREY};
    font-size: 15px;

    @media (max-width: 810px) {
        text-align: center;
    }
`

const TemperatureContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    @media (max-width: 810px) {
        justify-content: center;
    }
`

const Temperature = styled.p`
    font-weight: 300;
    font-size: 200px;
    margin: 0px;
    color: ${Colors.BLUE};

    @media (max-width: 1280px) {
        font-size: 100px;
    }
`

const TemperatureUnit = styled.p`
    padding-top: 45px;
    font-weight: 300;
    font-size: 25px;
    margin: 0px;
    color: ${Colors.BLUE};
`

const Text = styled.p`
    margin: 0px;
    font-size: 18px;
    color: ${Colors.GREY};
`

const ItalicText = styled.p`
    margin: 0px;
    margin-left: 5px;
    font-size: 18px;
    font-style: italic;

    @media (max-width: 810px) {
        text-align: center;
    }
`

const Image = styled.img`
    height: 80px;
    width: 80px;
    margin-left: 8px;
    margin-right: 5px;
`

const WeatherImage = styled.img`
    height: 90px;
    width: 90px;
`

const Separator = styled.div`
    margin: 20px 0px 20px 0px;
    height: 1px;
    width: 100%;
    background-color: ${Colors.OFF_WHITE};
`

/*
 * CurrentForecast
 */

export const CurrentForecast: FC<CurrentForecastProps> = ({
    currentForecast,
}) => {
    const { temperature, date, weather, feelsLike, clouds } = currentForecast
    const forecastDate = new Date(date)
    const forecastIcon =
        `http://openweathermap.org/img/wn/${weather.icon}@2x.png` || null

    const formattedDate = format(forecastDate, 'cccc ')

    return (
        <Container>
            <DateText>{formattedDate}</DateText>
            <TemperatureContainer>
                <Temperature>{Math.round(temperature)}</Temperature>
                <TemperatureUnit>°C</TemperatureUnit>
            </TemperatureContainer>
            <ItalicText>Feels like {Math.round(feelsLike)}°</ItalicText>
            <Separator />
            <VerticalTextContainer>
                {forecastIcon && <WeatherImage src={forecastIcon} />}
                <Text>{weather.description}</Text>
            </VerticalTextContainer>
            <VerticalTextContainer>
                <Image src={cloud} />
                <Text>{clouds}%</Text>
            </VerticalTextContainer>
        </Container>
    )
}
