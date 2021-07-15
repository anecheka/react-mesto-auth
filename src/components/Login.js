import React from 'react';

export default function Login ({onLogin}) {

  const [data, setData] = React.useState({
    email: '',
    password: ''
  });
    
const handleChange = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    });
}

const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    onLogin ({email, password});
  }

    return(
      <div className="login">
        <form onSubmit={handleSubmit} className="form" name="login">
                <h2 className="form__title form__title_use_on-page">Вход</h2>
                <fieldset className="form__container form__container_use_on-page">
                    <input className="form__input form__input_use_on-page" 
                        type="email" 
                        name="email" 
                        placeholder="Email"
                        value={data.email}
                        onChange={handleChange} 
                        required />
                    <input className="form__input form__input_use_on-page"
                        type="password" 
                        name="password" 
                        placeholder="Пароль"
                        value={data.password}
                        onChange={handleChange}
                        required />
                <button type="submit" disabled={!data.email || !data.password} className="form__submit-button form__submit-button_use_on-page" id="submit-login-data">Войти</button>
                </fieldset>
        </form>
      </div>
    )
  }