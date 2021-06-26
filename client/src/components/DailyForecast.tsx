/* eslint-disable react/prop-types */
import { FC } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'

import { Colors } from '../style/Colors'
import { DailyForecast as DailyForecastType } from '../types/Forecast'
import _ from 'lodash'

/*
 * Types
 */

type DailyForecastProps = {
    dailyForecast: DailyForecastType[]
}

type DailyForecastItemProps = {
    item: DailyForecastType
}

/*
 * Styles
 */

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 810px) {
        flex-direction: column;
        align-items: center;
        order: +1;
    }
`

const DateText = styled.p`
    margin: 0px;
    color: ${Colors.BLUE};
    font-size: 15px;
`

const ItemContainer = styled.div`
    height: 90px;
    width: 80px;
    margin: 10px;
    padding: 10px 5px 10px 5px;
    background-color: ${Colors.WHITE};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const WeatherImage = styled.img`
    height: 40px;
    width: 40px;
`

const TemperatureContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Max = styled.p`
    margin: 0px;
    font-size: 15px;
    margin-right: 5px;
`

const Min = styled.p`
    margin: 0px;
    font-size: 15px;
    color: ${Colors.GREY};
`

const DailyForecastItem = ({ item }: DailyForecastItemProps) => {
    const { date, weather, temperature } = item

    const forecastDate = new Date(date)
    const formattedDate = format(forecastDate, 'ccc')
    const forecastIcon =
        `http://openweathermap.org/img/wn/${weather?.icon}@2x.png` || null

    return (
        <ItemContainer>
            <DateText>{formattedDate}</DateText>
            {forecastIcon && <WeatherImage src={forecastIcon} />}
            <TemperatureContainer>
                <Max>{Math.round(temperature.maximum)}°</Max>
                <Min>{Math.round(temperature.minimum)}°</Min>
            </TemperatureContainer>
        </ItemContainer>
    )
}

/*
 * DailyForecast
 */

export const DailyForecast: FC<DailyForecastProps> = ({ dailyForecast }) => {
    const cleanedDailyForecast = _.dropRight(_.drop(dailyForecast), 2)

    return (
        <Container>
            {cleanedDailyForecast?.map((day, index) => {
                return <DailyForecastItem item={day} key={index} />
            })}
        </Container>
    )
}
