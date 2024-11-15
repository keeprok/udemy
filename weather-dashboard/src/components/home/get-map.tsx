import { Card } from '../ui/card';
import { Map } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@/hooks/useKakaoLoader ';
function GetMap() {
  useKakaoLoader();
  return (
    <Card className="w-1/4 min-w-[25%] h-full">
      <Map
        id="map"
        center={{ lat: 37.5683, lng: 126.9778 }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100%',
          borderRadius: '8px',
        }}
        level={13}
      />
    </Card>
  );
}
export { GetMap };
