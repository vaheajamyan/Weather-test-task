import React, { useEffect, useState } from 'react';
import { Row, Col, Spin, Input, message } from 'antd';
import { uniqBy } from 'lodash'

import { MainCard, DayCard } from 'components';
import { formatDate } from 'utils/helpers';
import { getWeather } from 'utils/api';

const { Search } = Input;

export type Item = {
  dt_txt: string;
  dt: string;
  wind: {
    speed: string;
    deg: string;
  };
  clouds: {
    all: number;
  };
  pop: string;
  main: {
    temp: string;
    feels_like: string;
    humidity: string;
    pressure: string;
  };
  weather: {
    icon: string;
    main: string;
    description: string;
  }[];
}

type Data = {
  city: string
  list: Item[]
};

function App() {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('Moscow');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getWeather(searchValue).then(({ data }: { data: {list: [], city: {name: string}} }) => {
      setIsLoading(true);
      const list = uniqBy(data.list, function (elem: Item) {
        return formatDate(elem.dt_txt);
      });

      const changedData = {
        city: data.city.name,
        list
      };
      setData(changedData)
    }).catch(({ response }) => {
      message.warning(response.data.message);
    }).finally(() => {
      setIsLoading(false);
    })
  }, [searchValue]);

  const handleSearch = (val: string): void => {
    if (val.trim()) {
      setSearchValue(val);
    } else {
      message.warning('Введите имя города');
    }
  };

  return (
    <div className="app">
      {isLoading && (
        <div className='app-loading'>
          <Spin/>
        </div>
      )}
      {data && (
        <div className='app-container'>
          <Search onSearch={handleSearch} placeholder="Enter city name" enterButton="Search" size="large" />
          <Row >
            <Col span={24}><MainCard item={data.list[activeIndex]} city={data.city} /> </Col>
          </Row>
          <Row>
            {
              data.list.map((val, index) => (
                <Col key={val.dt} span={6}>
                  <DayCard
                    item={val}
                    index={index}
                    city={data.city}
                    activeIndex={activeIndex}
                    onSetActiveIndex={setActiveIndex}
                  />
                </Col>
              ))
            }
          </Row>
        </div>
        )
      }
    </div >
  );
}

export default App;


