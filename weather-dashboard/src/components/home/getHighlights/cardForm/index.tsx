import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
type CardFormPT = {
  label: string;
  labelEn: string;
  imgUrl: string;
  statistics: number;
  sign: string;
};
function CardForm({ label, labelEn, imgUrl, statistics, sign }: CardFormPT) {
  return (
    <Card className=" w-full h-fit bg-neutral-50">
      <CardHeader>
        <CardDescription className="font-semibold text-neutral-700">
          {label}
          <span className=" text-neutral-400 pl-1">{labelEn}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <img src={imgUrl} className="h-10 w-10" alt="" />
        <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">
          {statistics} <span className="text-lg ml-1">{sign}</span>
        </p>
      </CardContent>
    </Card>
  );
}
export default CardForm;
