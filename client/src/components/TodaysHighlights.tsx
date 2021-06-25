/* eslint-disable react/prop-types */
import { FC } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'

import { Colors } from '../style/Colors'
import sunsetImage from '../images/sunset.png'
import sunriseImage from '../images/sunrise.png'
import uvIndexIcon from '../images/uv-index.png'
import wind from '../images/wind.png'
import visibilityImage from '../images/visibility.png'
import humidityImage from '../images/humidity.png'
import pressureImage from '../images/pressure.png'
import { CurrentForecastProps } from './CurrentForecast'

/*
 * Styles
 */

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const Title = styled.p`
    margin: 0px;
    color: ${Colors.GREY};
    font-size: 20px;
`

const Text = styled.p`
    margin: 0px;
    font-size: 30px;
`

const HourText = styled.p`
    margin: 0px;
    font-size: 15px;
`

const IconTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px 0px 5px 0px;
`

const ItemContainer = styled.div`
    height: 120px;
    width: 170px;
    margin: 10px;
    padding: 10px 5px 10px 5px;
    background-color: ${Colors.WHITE};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Image = styled.img`
    height: 30px;
    width: 30px;
    margin-left: 8px;
    margin-right: 5px;
`

const BigImage = styled.img`
    height: 45px;
    width: 45px;
`

/*
 * TodaysHighlights
 */

export const TodaysHighlights: FC<CurrentForecastProps> = ({
    currentForecast,
}) => {
    const {
        uvIndex,
        windSpeed,
        sunrise,
        sunset,
        humidity,
        visibility,
        pressure,
    } = currentForecast

    const sunriseHour = new Date(sunrise)
    const formattedSunriseHour = format(sunriseHour, 'p')
    const sunsetHour = new Date(sunset)
    const formattedSunsetHour = format(sunsetHour, 'p')

    const visibilitiInKms = visibility / 1000

    return (
        <Container>
            <ItemContainer>
                <Title>UV Index</Title>
                <BigImage src={uvIndexIcon} />
                <Text>{uvIndex}</Text>
            </ItemContainer>
            <ItemContainer>
                <Title>Wind Speed</Title>
                <BigImage src={wind} />
                <Text>{windSpeed} km/h</Text>
            </ItemContainer>
            <ItemContainer>
                <Title>Sunrise & Sunset</Title>
                <IconTextContainer>
                    <Image src={sunriseImage} />
                    <HourText>{formattedSunriseHour}</HourText>
                </IconTextContainer>
                <IconTextContainer>
                    <Image src={sunsetImage} />
                    <HourText>{formattedSunsetHour}</HourText>
                </IconTextContainer>
            </ItemContainer>
            <ItemContainer>
                <Title>Humidity</Title>
                <BigImage src={humidityImage} />
                <Text>{humidity}%</Text>
            </ItemContainer>
            <ItemContainer>
                <Title>Visibility</Title>
                <BigImage src={visibilityImage} />
                <Text>{visibilitiInKms}km</Text>
            </ItemContainer>
            <ItemContainer>
                <Title>Pressure</Title>
                <BigImage src={pressureImage} />
                <Text>{pressure}hpa</Text>
            </ItemContainer>
        </Container>
    )
}
