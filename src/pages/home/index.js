import { CardComents } from '../../components/CardComents';
import { CardContent } from '../../components/CardContent';
import { Header } from '../../components/Header';
import './styles.css';

export const  Home = ()=>{
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

