export interface LocationCoordinates {
    latitude: number;
    longitude: number;
    city: string;
}

export interface Weather {
    currently: Currently;
    daily: Daily;
    hourly: Hourly;
}

export interface Currently {
    time: number;
    summary: string;
    icon: string;
    temperature: number;
    apparentTemperature: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    windBearing: number;
    windGust: number;
    uvIndex: number;
    visibility: number;
    cloudCover: number;
}

export interface Daily {
    data: DailyData[];
}

export interface Hourly {
    data: HourlyData[];
}

export interface DailyData {
    time: number;
    icon: string;
    temperatureMax: number;
}

export interface HourlyData {
    time: number;
    icon: string;
    temperature: number;
}
