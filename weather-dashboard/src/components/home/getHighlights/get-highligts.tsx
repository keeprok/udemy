import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import MarineContent from './marine';

import SunContent from './sun';
import CardForm from './cardForm';

function GetHighligts() {
  const data = [
    {
      imgUrl: 'src/assets/icons/1000d.svg',
      title: 'sunlise',
      hour: '07:00 AM',
    },
    {
      imgUrl: 'src/assets/icons/1000n.svg',
      title: 'sunSet',
      hour: '05:34 PM',
    },
  ];
  const CardData = [
    { label: '습도', labelEn: 'Humidity', imgUrl: 'src/assets/icons/Humidity.svg', statistics: 64, sign: '%' },
    { label: '기압', labelEn: 'Pressure', imgUrl: 'src/assets/icons/Wind.svg', statistics: 1024, sign: 'hPa' },
    { label: '가시거리', labelEn: 'Visibility', imgUrl: 'src/assets/icons/Fog.svg', statistics: 10, sign: 'km' },
    { label: '체감온도', labelEn: 'Feels Like', imgUrl: 'src/assets/icons/Hot.svg', statistics: 19, sign: '℃' },
  ];
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-xl">Today's Highlights</CardTitle>
        <CardDescription>오늘의 날씨 중 주의깊게 살펴보아야 할 이벤트르 조회하고있습니다 </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 h-full">
        <div className="flex justify-between items-center w-full gap-5">
          <MarineContent />
          <SunContent data={data} />
        </div>
        <div className="flex gap-6 items-center">
          {CardData.map((data, idx) => (
            <CardForm key={idx} {...data} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
export { GetHighligts };
