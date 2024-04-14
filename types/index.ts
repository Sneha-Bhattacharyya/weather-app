export type IWeatherData = {
    coord: {
        lon: number;
        lat: number;
    };
    base: string;
    visibility: number;
    clouds:{
        all: number;
    };
    dt: number;
    id: number;
    timezone: number;
    cod: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
    };
    wind:{
        speed: number;
        deg: number;
        gust: number;
    }
    name: string;
    sys: {
        country: string;
    };
    weather: {
        id: number;
        main:string;
        description: string;
        icon: string;
    }[];
    };