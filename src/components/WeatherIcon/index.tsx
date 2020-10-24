import React from 'react';

import sunny from 'assets/images/sunny.png';
import slightlyCloudy from 'assets/images/slightlyCloudy.png';
import partlyCloudy from 'assets/images/partlyCloudy.png';
import cloudy from 'assets/images/cloudy.png';
import rain from 'assets/images/rain.png';
import snow from 'assets/images/snow.png';

type IconInfo = {
  iconId: string;
  main: string;
};

type Props = {
  iconInfo: IconInfo;
}

function WeatherIcon({ iconInfo }: Props) {
  const setIcon = () => {
    switch (iconInfo.main) {
      case 'Clouds':
        switch (iconInfo.iconId) {
          case '02n':
            return slightlyCloudy;
          case '04n':
            return cloudy;
          default:
            return partlyCloudy;
        }
      case 'Clear':
        return sunny;
      case 'Rain':
        return rain;
      default:
        return snow
    }
  };

  return (
    <img style={{width: 48}} src={setIcon()} alt='icon' />
  )
}

export default WeatherIcon
