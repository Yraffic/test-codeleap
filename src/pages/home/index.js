import { useEffect, useState } from 'react';
import { CardComents } from '../../components/CardComents';
import { CardContent } from '../../components/CardContent';
import { Header } from '../../components/Header';
import './styles.css';
import { api } from '../../services/api';

export const  Home = ()=>{
  const [listContents, setListContents] = useState([])

  const getContents = async () =>{
    try {
      const res = await api.get('careers/')

      setListContents([
        res.data
      ])
    } catch {
      alert('server error !')
    }
  }

  useEffect(()=>{
    getContents()
  }, [])

  console.log(listContents)
  return (
    <div className='container'>
      <div className='home flex align-items flex-col'>
          <Header />
          <div className='home-content flex align-items flex-col'>
              <CardComents />
              <CardContent />
          </div>
      </div>
    </div>
  );
}

