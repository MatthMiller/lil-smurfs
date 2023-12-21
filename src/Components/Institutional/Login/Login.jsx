import React from 'react';
import style from './Login.module.css';
import bgPattern from '../../../Images/Login/bgPattern.svg';
import formStyle from '../../Common/Form.module.css';
import VisibilityOffIcon from '../../../Images/Common/Icons/VisibilityOffIcon';
import VisibilityOnIcon from '../../../Images/Common/Icons/VisibilityOnIcon';

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);

  return (
    <div className={style.bg} style={{ background: `url(${bgPattern})` }}>
      <div className='g-wrapper'>
        <div className='g-container'>
          <div className={style.container}>
            <div>
              <h1 className={style.title}>Login</h1>
              <h3 className={style.subtitle}>Área do usuário</h3>
            </div>

            <form className={style.login}>
              <div className={style.inputContainer}>
                <label htmlFor='email' className={formStyle.label}>
                  E-mail
                </label>
                <input
                  className={formStyle.input}
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Insira aqui o seu e-mail'
                />
              </div>
              <div className={style.inputContainer}>
                <label htmlFor='password' className={formStyle.label}>
                  Senha
                </label>
                <div className={formStyle.passwordContainer}>
                  <input
                    className={formStyle.input}
                    type={passwordVisibility ? 'password' : 'text'}
                    name='password'
                    id='password'
                    placeholder='Insira aqui sua senha'
                  />
                  <label
                    htmlFor='password'
                    onClick={() => setPasswordVisibility(!passwordVisibility)}
                    className={formStyle.passwordIconContainer}
                  >
                    {passwordVisibility ? (
                      <VisibilityOnIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
