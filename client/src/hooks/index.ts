/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { useEffect, useState } from 'react'

export interface LocationInterface {
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

    return { loading, location, error }
}
