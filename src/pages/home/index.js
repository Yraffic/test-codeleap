import React, { useEffect, useState, useRef } from 'react';
import { CardComents } from '../../components/CardComents';
import { CardContent } from '../../components/CardContent';
import { Header } from '../../components/Header';
import './styles.css';
import { api } from '../../services/api';

export const Home = () => {
  const [listContents, setListContents] = useState([])
  const [count, setCount] = useState(10)


  const getContents = async () => {
    try {
      const res = await api.get(`careers/?limit=${count}`)

      setListContents([
        ...res.data.results
      ])
    } catch {
      alert('server error !')
    }
  }



  useEffect(() => {
    getContents();
  }, [count]);
  return (
    <div className='container'>
      <div className='home flex align-items flex-col'>
        <Header />
        <div
          className='home-content flex align-items flex-col'

        >
          <CardComents />
          {
            listContents.map((item) => (
              <CardContent
                key={item.id}
                title={item.title}
                username={item.username}
                datetime={item.created_datetime}
                content={item.content}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

