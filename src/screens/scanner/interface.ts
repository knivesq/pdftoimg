import {StackNavigationProp} from '@react-navigation/stack';
import {ViewStyle, TextStyle, ImageStyle, Animated} from 'react-native';
// import Animated from 'react-native-reanimated';

export interface ScannerProps {
  navigation: StackNavigationProp<any, 'Scanner'>;
}

export interface IStyles {
  root: ViewStyle;
  scanner: ViewStyle;
  scannerContainer: ViewStyle;
  controlsContainer: ViewStyle;
  cameraButton: ViewStyle;
  cameraSubButton: ViewStyle;
  overlay: ViewStyle;
  blurred: ViewStyle;
}
export interface ScannerViewProps {
  camera: any;
  handleOnPictureProcessed: ({
    croppedImage,
    initialImage,
  }: {
    croppedImage: any;
    initialImage: any;
  }) => void;
  takePicture: (event: any) => any;
  getPreviewSize: () => any;
  onRectangleDetected: (detectedRectangle: any) => any;
  detectedRectangle: any;
  onPictureTaken: ({
    croppedImage,
    initialImage,
  }: {
    croppedImage: string;
    initialImage: string;
  }) => any;
  screenStatus: string;
}
