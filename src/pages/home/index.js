import { Header } from '../../components/Header';
import './styles.css';

export const  Home = ()=>{
  return (
    <div className='container'>
      <div className='home flex align-items flex-col'>
          <Header />
      </div>
    </div>
  );
}

