import React from 'react';
import { Card } from 'antd';

import { WeatherIcon } from 'components';
import { getIntCelsius, formatDate } from 'utils/helpers';

import './mainCard.scss';
import { Item } from 'App';

type Props = {
  item: Item;
  city: string;
}

function MainCard({ city, item }: Props) {
  return (
    <div className="site-card-border-less-wrapper card">
      <Card bordered={false} style={{ width: '100%' }}>
        <div className='card-content'>
          <div className='card_head'>
            <p >{city}</p>
            <p >{`${formatDate(item.dt_txt)}`}</p>
          </div>
          <div className='card-main-info'>
            <div>
              <div className='card-temp'>
                <p>
                  {getIntCelsius(item.main.temp)}
                  <span>°C</span>
                </p>
                <WeatherIcon iconInfo={{ iconId: item.weather[0].icon, main: item.weather[0].main }} />
              </div>
              <div className='card-weather-desc'>
                <p>{item.weather[0].description}</p>
                <p>Ощущается как<span> {getIntCelsius(item.main.feels_like)}<span>°C</span></span></p>
              </div>
            </div>
            <div className='card-more-info'>
              <p>Влажность: {item.main.humidity}%</p>
              <p>Атмосферное давление: {item.main.pressure} мм.рт.ст.</p>
              <p>Облачность: {item.clouds.all}%</p>
              <p>Скорость ветра: {item.wind.speed}м/с</p>
              <p>Направление ветра: {item.wind.deg}°</p>
              <p>Вероятность выпадения осадков: {item.pop}%</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default MainCard;
