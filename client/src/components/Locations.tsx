/* eslint-disable react/prop-types */
import _ from 'lodash'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { FC, useState } from 'react'
import styled from 'styled-components'
import { locations } from '../constants/locations'
import { LocationInterface } from '../hooks'

import { Colors } from '../style/Colors'

/*
 * Types
 */

type LocationProps = {
    id?: string
    name?: string
    lat?: string
    lon?: string
    isLocationSelected: boolean
    onLocationClick: (lat?: string, lon?: string, id?: string) => void
}

type LocationsProps = {
    currentLocation?: LocationInterface
    onSelectedLocationClick: (lat?: string, lon?: string) => void
}

type ButtonType = {
    isLocationSelected: boolean
}

/*
 * Styles
 */

const Container = styled.div`
    margin: 20px;
`

const Button = styled.button`
    border: none;
    border-radius: 10px;
    width: 100px;
    margin: 0px 10px 0px 10px;
    background-color: ${(props: ButtonType) =>
        props.isLocationSelected ? Colors.CORAL : Colors.SAND};
`
const TextButton = styled.p``

const Location = ({
    id,
    name,
    lat,
    lon,
    isLocationSelected,
    onLocationClick,
}: LocationProps) => {
    const handleClick = useCallback(() => {
        return onLocationClick(lat, lon, id)
    }, [])

    return (
        <Button onClick={handleClick} isLocationSelected={isLocationSelected}>
            <TextButton>{name}</TextButton>
        </Button>
    )
}

/*
 * Locations
 */

export const Locations: FC<LocationsProps> = ({
    currentLocation,
    onSelectedLocationClick,
}) => {
    const geolocale = currentLocation && [
        {
            id: 'GEO',
            name: currentLocation?.city,
            lat: currentLocation?.lat,
            lon: currentLocation?.lon,
        },
    ]
    const locationsWithGeo = _.concat(geolocale, locations)
    console.log(locationsWithGeo)
    const [locationSelected, setLocationSelected] = useState<string>()

    useEffect(() => {
        setLocationSelected('GEO')
    }, [])

    return (
        <Container>
            {locationsWithGeo?.map((location) => {
                const isLocationSelected = location?.id === locationSelected

                const handleLocationClick = (
                    lat?: string,
                    lon?: string,
                    id?: string
                ) => {
                    setLocationSelected(id)
                    onSelectedLocationClick(lat, lon)
                }

                return (
                    <Location
                        id={location?.id}
                        name={location?.name}
                        lat={location?.lat}
                        lon={location?.lon}
                        isLocationSelected={isLocationSelected}
                        onLocationClick={handleLocationClick}
                        key={location?.id}
                    />
                )
            })}
        </Container>
    )
}
