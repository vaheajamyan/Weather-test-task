import React from 'react';
import classNames from 'classnames';
import { WeatherIcon } from 'components';
import { formatDate, getIntCelsius } from 'utils/helpers';
import './dayCard.scss';
import { Item } from "../../App";

type Props = {
  item: Item;
  index: number;
  city: string;
  activeIndex: number;
  onSetActiveIndex: (index: number) => void;
}

function DayCard({ item, city, index, activeIndex, onSetActiveIndex }: Props) {
  const handleItemClick = (): void => {
    onSetActiveIndex(index);
  };
  return (
    <div
      onClick={handleItemClick}
      className={classNames('dayCard', { 'dayCard--active': activeIndex === index })}>
      <div className='dayCard-top-block'>
        <p >{city}</p>
        <p >{formatDate(item.dt_txt)}</p>
      </div>
      <div className='dayCard-center-block'>
        <p>
          {getIntCelsius(item.main.temp)}
          <span>°C</span>
        </p>
        <WeatherIcon iconInfo={{ iconId: item.weather[0].icon, main: item.weather[0].main }} />
      </div>
      <div className='dayCard-bottom-block'>
        <p>{item.weather[0].description}</p>
        <p>Ощущается как<span> {getIntCelsius(item.main.feels_like)}<span>°C</span></span></p>
      </div>
    </div>
  )
}

export default DayCard



