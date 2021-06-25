type Weather = {
    title: string
    description: string
    icon: string
}

type Temperature = {
    morning: number
    day: number
    evening: number
    night: number
    minimum: number
    maximum: number
}

type FeelsLike = {
    morning: number
    day: number
    evening: number
    night: number
}

export type CurrentForecast = {
    date: number
    sunrise: number
    sunset: number
    temperature: number
    feelsLike: number
    pressure: number
    humidity: number
    dewPoint: number
    uvIndex: number
    clouds: number
    visibility: number
    windSpeed: number
    windDirection: number
    weather: Weather
}

export type DailyForecast = {
    date: number
    sunrise: number
    sunset: number
    temperature: Temperature
    feelsLike: FeelsLike
    pressure: number
    humidity: number
    dewPoint: number
    uvIndex: number
    clouds: number
    windSpeed: number
    windDirection: number
    weather: Weather
}

export type ForecastResponse = {
    config: unknown
    data: ForecastType
    headers: unknown
    request: unknown
    status: number
    statusText: string
}

export type ForecastType = {
    currentForecast: CurrentForecast
    dailyForecast: DailyForecast[]
}
