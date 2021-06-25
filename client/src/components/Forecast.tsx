/* eslint-disable react/prop-types */
import { FC } from 'react'
import styled from 'styled-components'

import { ForecastType } from '../types/Forecast'
import { CurrentForecast } from './CurrentForecast'
import { DailyForecast } from './DailyForecast'
import { TodaysHighlights } from './TodaysHighlights'

/*
 * Types
 */

/*
 * Styles
 */

const Container = styled.div`
    display: grid;
    grid-template-columns: 30% 1fr;
`

/*
 * Forecast
 */

export const Forecast: FC<ForecastType> = ({
    currentForecast,
    dailyForecast,
}) => {
    return (
        <Container>
            <CurrentForecast currentForecast={currentForecast} />
            <DailyForecast dailyForecast={dailyForecast} />
            <TodaysHighlights currentForecast={currentForecast} />
        </Container>
    )
}
