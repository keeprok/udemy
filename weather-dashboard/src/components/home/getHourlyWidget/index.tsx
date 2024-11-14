import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components';
import HourCardForm from './card-form';

function GetHourlyWidget() {
  const a = Array.from({ length: 7 }, (_, i) => i + 1);
  return (
    <Card className="flex-1 max-w-[calc(50%-48px)] pb-2">
      <CardHeader>
        <CardTitle className="text-xl">Hourly</CardTitle>
        <CardDescription>오늘의 시간대별 날씨를 조회하고 있습니다.</CardDescription>
      </CardHeader>
      <CardContent className="w-full flex items-center gap-4 overflow-x-scroll">
        {a.map((_, idx) => (
          <HourCardForm key={idx} />
        ))}
      </CardContent>
    </Card>
  );
}

export { GetHourlyWidget };
