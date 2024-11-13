import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: 'a98f75582353435e49faa1e1f03057ca',
    libraries: ['clusterer', 'drawing', 'services'],
  });
}
