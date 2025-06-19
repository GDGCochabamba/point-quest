 import coin from './../../assets/Coin.png';
 import gdg from './../../assets/gdg.jpg';
 import firebase from './../../assets/firebase.png';
 import angular from './../../assets/angular.png';
 import tensorflow from './../../assets/tensorflow.png';

export type ImageKeyType = keyof typeof images;
export const images = {
  coin,              
  gdg,        
  firebase,
  angular,     
  tensorflow,
};
export interface TripIconProps {
  name: ImageKeyType;
  isUrl?: boolean;
  size?: number;
  isWhite?: boolean;
  onPress?: () => void;
}

function AssetImg({
  name,
  size = 24,
  isWhite,
  ...props
}: TripIconProps) {
  return (
    <img
      {...props}
      //resizeMode={resizeMode}
      src={images[name]}
      style={{width: size, height: size, filter: isWhite ? 'grayscale(100%)' : ''}}
      //style={[{width: size, height: size, tintColor: color}, style]}
    />
  );
}

export default AssetImg;