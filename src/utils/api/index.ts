import { axios } from 'core';

export const getWeather = (city: string) => axios.get(`forecast?q=${city}&lang=ru&units=metric&appid=64634de06c64d6a568aad4a144011c36`);
