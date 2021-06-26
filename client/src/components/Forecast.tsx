/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FC } from 'react'
import styled from 'styled-components'

import { ForecastType } from '../types/Forecast'
import { CurrentForecast } from './CurrentForecast'
import { DailyForecast } from './DailyForecast'
import { TodaysHighlights } from './TodaysHighlights'

/*
 * Styles
 */

const Container = styled.div`
    display: grid;
    grid-template-columns: 30% 1fr;

    @media (max-width: 810px) {
        grid-template-columns: 1fr;
    }
`

const Text = styled.p`
    margin: 0px;
    font-size: 30px;
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
            <div>
                <TodaysHighlights currentForecast={currentForecast} />
            </div>
        </Container>
    )
}
