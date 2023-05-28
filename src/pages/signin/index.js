import './styles.css';

export const  Signin = ()=>{
  return (
    <div className='container'>
      <div className='card-signin flex flex-col'>
        <h1>Welcome to CodeLeap network!</h1>

        <label for='user'>
        Please enter your username
        </label>

        <input type='text' id='user' className='input'/>
        <div className='card-bottom-btn flex'>
          <button className='btn primary'>
            ENTER
          </button>
        </div>
      </div>
    </div>
  );
}

