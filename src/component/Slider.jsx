import { Image } from '@aws-amplify/ui-react';
import react from 'react'

export const Slider = () => {
  return (
    <Image
      src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="View from road to Milford Sound, New Zealand.
  Glittering stream with old log, snowy mountain peaks
  tower over a green field."
  height='60vh'
  width='100%'
  objectFit='cover'
    />
  );
};
export default Slider;