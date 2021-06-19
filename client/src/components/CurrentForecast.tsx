/* eslint-disable react/prop-types */
import _ from 'lodash'
import { format } from 'prettier'
import { FC } from 'react'
import styled from 'styled-components'
import { Colors } from '../style/Colors'
import { CurrentForecast as CurrentForecastType } from '../types/Forecast'

/*
 * Types
 */

type CurrentForecastProps = {
    currentForecast: CurrentForecastType
}

/*
 * Styles
 */

const Container = styled.div`
    padding: 5px;
`

const Text = styled.p`
    color: ${Colors.CORAL};
    font-size: 20px;
`

/*
 * CurrentForecast
 */

export const CurrentForecast: FC<CurrentForecastProps> = ({
    currentForecast,
}) => {
    const { temperature, date, weather } = currentForecast || {}
    const dateString = new Date(date).toLocaleDateString()

    console.log('date string', dateString)

    return (
        <Container>
            <Text>{`Date: ${dateString}`}</Text>
            <Text>{temperature}</Text>
            <Text>{weather.title}</Text>
        </Container>
    )
}
