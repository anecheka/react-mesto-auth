import React from 'react';
import { Link } from 'react-router-dom';

export default function Register ({onRegister}) {

const [data, setData] = React.useState ({
  email: '',
  password: '',
});

function handleChange (e) {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    });
  }
  
function handleSubmit(e) {

    e.preventDefault();
    const { email, password } = data;
    
    onRegister ({
        email,
        password,
    });
  }

    return (
      <div className="register">
        <form onSubmit={handleSubmit} className="form" name="register">
                <h2 className="form__title form__title_use_on-page">Регистрация</h2>
                <fieldset className="form__container form__container_use_on-page">
                    <input className="form__input form__input_use_on-page" 
                        type="email" 
                        name="email"
                        value={data.email}
                        placeholder="Email"
                        onChange={handleChange} 
                        required />
                    <input className="form__input form__input_use_on-page"  
                        type="password" 
                        name="password"
                        value={data.password}
                        placeholder="Пароль"
                        onChange={handleChange}
                        required />
                <button disabled={!data.email || !data.password} type="submit" className="form__submit-button form__submit-button_use_on-page" id="submit-registration-data">Зарегистрироваться</button>
                </fieldset>
        </form>
        <div className="register__login-selection">
          <p className="register__login-callout">Уже зарегистрированы?</p>{' '}
          <Link to="sign-in" className="register__login-link">Войти</Link>
        </div>
      </div>
  );
  }
