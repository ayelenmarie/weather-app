/* eslint-disable react/no-unescaped-entities */
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

const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;

    @media (max-width: 1280px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 810px) {
        grid-template-columns: 1fr;
    }
`

const Title = styled.p`
    text-align: center;
    margin: 0px;
    font-size: 20px;
    color: ${Colors.CORAL};

    @media (max-width: 810px) {
        margin-top: 10px;
    }
`

const ItemTitle = styled.p`
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
        <div>
            <Title>Today's Highlights</Title>
            <ContentContainer>
                <ItemContainer>
                    <ItemTitle>UV Index</ItemTitle>
                    <BigImage src={uvIndexIcon} />
                    <Text>{uvIndex}</Text>
                </ItemContainer>
                <ItemContainer>
                    <ItemTitle>Wind Speed</ItemTitle>
                    <BigImage src={wind} />
                    <Text>{windSpeed} km/h</Text>
                </ItemContainer>
                <ItemContainer>
                    <ItemTitle>Sunrise & Sunset</ItemTitle>
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
                    <ItemTitle>Humidity</ItemTitle>
                    <BigImage src={humidityImage} />
                    <Text>{humidity}%</Text>
                </ItemContainer>
                <ItemContainer>
                    <ItemTitle>Visibility</ItemTitle>
                    <BigImage src={visibilityImage} />
                    <Text>{visibilitiInKms}km</Text>
                </ItemContainer>
                <ItemContainer>
                    <ItemTitle>Pressure</ItemTitle>
                    <BigImage src={pressureImage} />
                    <Text>{pressure}hpa</Text>
                </ItemContainer>
            </ContentContainer>
        </div>
    )
}
