/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from 'lodash'
import { useEffect, useState } from 'react'

export function useCurrentlocation(options = {}): any {
    const [error, setError] = useState<string>('')
    const [location, setLocation] = useState<{
        latitude: string
        longitude: string
    }>({ latitude: '', longitude: '' })

    const hasGeolocation = !_.isEmpty(navigator.geolocation)

    // Success handler for geolocation's `getCurrentPosition` method
    const handleSuccess = (position: any) => {
        const { latitude, longitude } = position.coords

        setLocation({
            latitude,
            longitude,
        })
    }

    // Error handler for geolocation's `getCurrentPosition` method
    const handleError = (error: any) => {
        setError(error.message)
    }

    useEffect(() => {
        if (!hasGeolocation) {
            return setError(
                'Geolocation not supported, sorry for the inconvenience'
            )
        }

        // Call the Geolocation API
        return navigator.geolocation.getCurrentPosition(
            handleSuccess,
            handleError,
            options
        )
    })

    return { location, error }
}
