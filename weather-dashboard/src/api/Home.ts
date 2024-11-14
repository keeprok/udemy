import { instance } from './AxiosInstanse';

export const getDailyWeatherApi = async () => {
  const response = await instance.get('/current.json', {
    params: { q: 'seoul' },
  });
  return response.data;
};
