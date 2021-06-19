/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCurrentlocation } from './hooks'

const geolocationOptions = {
    timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
}

export function App() {
    const { location, error } = useCurrentlocation(geolocationOptions)

    console.log(location, error)

    return <div>HOLA</div>
}
