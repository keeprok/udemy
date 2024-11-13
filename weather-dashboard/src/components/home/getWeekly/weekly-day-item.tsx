type WeeklyDayItemPT = {
  imgUrl: string;
  highestTemperature: number;
  lowTemperature: number;
  date: number;
  day: string;
};
function WeeklyDayItem({ imgUrl, highestTemperature, lowTemperature, date, day }: WeeklyDayItemPT) {
  return (
    <div className="w-full h-10 items-center gap-7  bg-neutral-50 py-0 px-3 rounded-sm flex justify-between">
      <div className="w-fit h-10 flex items-center gap-2">
        <img src={imgUrl} className="h-7 w-7" />
        <div className="flex items-center gap-1 w-20">
          <div className="w-full h-full flex items-start gap-[2px]">
            <span className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-red-400 ">
              {highestTemperature}
            </span>
            <span className="text-xs font-normal mt-1">&#8451;</span>
            <span className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-blue-400-400 ">
              {lowTemperature}
            </span>
            <span className="text-xs font-normal mt-1">&#8451;</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-end gap-5-mb-1">
        <small className="text-sm leading-none">{date}</small>
        <small className="text-sm leading-none">{day}</small>
      </div>
    </div>
  );
}
export default WeeklyDayItem;
