import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';

function MarineContent() {
  return (
    <Card className="w-full bg-neutral-100">
      <CardHeader>
        <CardDescription className="font-semibold text-neutral-700 ">
          해양 및 조수 데이터 <span className="text-neutral-400 font-normal ml-1">Marine and Sailing</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 justify-between items-center">
        <img src="src/assets/icons/Waves.png" className="h-14 mr-4" />
        <div className="w-full grid  grid-cols-4 gap-3">
          <MarineHour />
          <MarineHour />
          <MarineHour />
        </div>
      </CardContent>
    </Card>
  );
}
export default MarineContent;

function MarineHour() {
  return (
    <div className=" felx flex-col items-center">
      <p className="text-sm text-muted-foreground">1회 - 만조</p>
      <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight flex">
        05:48 <span className="ml-[1px]">am</span>
      </p>
    </div>
  );
}
