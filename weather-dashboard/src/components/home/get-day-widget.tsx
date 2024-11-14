import { getDailyWeatherApi } from '@/api/Home';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Separator } from '@/components';
import { Weather } from '@/types';

import { defaultDailyWeather } from '@/utils/Weather/Daily';

import { CalendarDays, MapPinned } from 'lucide-react';
import { useEffect, useState } from 'react';

function GetDayWidget() {
  const [data, setData] = useState<Weather>(defaultDailyWeather);
  const fetchApi = async () => {
    try {
      const response = await getDailyWeatherApi();
      setData(response);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('호출');
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const isDay = data.current.condition.icon.includes('day');

  return (
    <Card className="w-1/4 min-w-[25%]">
      <CardHeader>
        <CardTitle className="text-xl">Today</CardTitle>
        <CardDescription>오늘 현재 날씨를 조회하고 있습니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-full flex flex-col">
          <div className="flex items-center gap-4">
            {/* 날씨 아이콘 */}
            <img
              src={`src/assets/icons/${data.current.condition.code}${isDay ? 'd' : 'n'}.svg`}
              alt="icon"
              className="h-16 w-16"
            />
            <div className="w-full flex items-start gap-1">
              <span className="poppins-bold scroll-m-20 text-6xl font-extrabold tracking-tight">
                {Math.floor(data.current.temp_c * 10) / 10}
              </span>
              <span className="text-4xl font-extrabold">&#8451;</span>
            </div>
          </div>
          <Separator className="mt-2 mb-3" />
          <div className="w-full flex flex-col">
            {/* 캘린더 날짜 표시 영역 */}
            <div className="flex items-center justify-start gap-2">
              <CalendarDays className="h-4 w-4" />
              <p className="leading-6">{data.location.localtime.split(' ')[0]}</p>
            </div>
            {/* 위치 표시 영역 */}
            <div className="flex items-center justify-start gap-2">
              <MapPinned className="h-4 w-4" />
              <p className="leading-6">
                {data.location.name}&middot;{data.location.country}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export { GetDayWidget };
