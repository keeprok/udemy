import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import WeeklyDayItem from './weekly-day-item';

function GetWeekly() {
  const weeklyDate = [
    {
      imgUrl: 'src/assets/icons/1000d.svg',
      highestTemperature: 22,
      lowTemperature: 14,
      date: 3,
      day: '일요일',
    },
    { imgUrl: 'src/assets/icons/1063d.svg', highestTemperature: 17, lowTemperature: 9, date: 4, day: '월요일' },
    {
      imgUrl: 'src/assets/icons/1000d.svg',
      highestTemperature: 22,
      lowTemperature: 14,
      date: 3,
      day: '일요일',
    },
    { imgUrl: 'src/assets/icons/1063d.svg', highestTemperature: 17, lowTemperature: 9, date: 4, day: '월요일' },
    {
      imgUrl: 'src/assets/icons/1000d.svg',
      highestTemperature: 22,
      lowTemperature: 14,
      date: 3,
      day: '일요일',
    },
    { imgUrl: 'src/assets/icons/1063d.svg', highestTemperature: 17, lowTemperature: 9, date: 4, day: '월요일' },
    {
      imgUrl: 'src/assets/icons/1000d.svg',
      highestTemperature: 22,
      lowTemperature: 14,
      date: 3,
      day: '일요일',
    },
  ];
  return (
    <Card className="w-1/4 py-2">
      <CardHeader>
        <CardTitle>7 Days</CardTitle>
        <CardDescription>이번주 날씨를 조회하고 있습니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-[2px]">
          {weeklyDate.map((data, idx) => (
            <WeeklyDayItem {...data} key={idx} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
export { GetWeekly };
