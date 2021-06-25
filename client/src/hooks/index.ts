/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { useEffect, useState } from 'react'

interface LocationInterface {
    query: string
    status: string
    country: string
    countryCode: string
    region: string
    regionName: string
    city: string
    zip: string
    lat: string
    lon: string
    timezone: string
    isp: string
    org: string
    as: string
}

interface ResponseInterface {
    loading: boolean
    location?: LocationInterface
    error?: string
}

export function useCurrentlocation(): ResponseInterface {
    const [error, setError] = useState<string>()
    const [location, setLocation] = useState<LocationInterface>()
    const [loading, setLoading] = useState<boolean>(false)

    const getLocation = async () => {
        setLoading(true)
        try {
            const response = await axios.get('http://ip-api.com/json/')
            setLocation(response.data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            setError(e.message)
        }
    }

    useEffect(() => {
        getLocation()
    }, [])

    // const hasGeolocation = !_.isEmpty(navigator.geolocation)

    // // Success handler for geolocation's `getCurrentPosition` method
    // const handleSuccess = (position: any) => {
    //     const { latitude, longitude } = position.coords

    //     setLocation({
    //         latitude,
    //         longitude,
    //     })
    // }

    // // Error handler for geolocation's `getCurrentPosition` method
    // const handleError = (error: any) => {
    //     setError(error.message)
    // }

    // useEffect(() => {
    //     if (!hasGeolocation) {
    //         return setError(
    //             'Geolocation not supported, sorry for the inconvenience'
    //         )
    //     }

    //     // Call the Geolocation API
    //     return navigator.geolocation.getCurrentPosition(
    //         handleSuccess,
    //         handleError,
    //         options
    //     )
    // })

    return { loading, location, error }
}
