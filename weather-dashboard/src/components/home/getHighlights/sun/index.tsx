import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';

type SunContentPt = {
  data: Array<SunHourPt>;
};
function SunContent({ data }: SunContentPt) {
  return (
    <Card className=" w-full bg-neutral-100">
      <CardHeader>
        <CardDescription className="font-semibold text-neutral-700 ">
          일출/일몰 <span className="text-neutral-400 font-normal ml-1">Sunrise & Sunset</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2">
        <SunHour {...data[0]} />
        <SunHour {...data[1]} />
      </CardContent>
    </Card>
  );
}

export default SunContent;

type SunHourPt = {
  imgUrl: string;
  title: string;
  hour: string;
};
function SunHour({ imgUrl, title, hour }: SunHourPt) {
  return (
    <div className="flex w-full items-center gap-2">
      <img src={imgUrl} className="h-14"></img>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">{hour}</p>
      </div>
    </div>
  );
}
