import React from 'react';
import style from './Login.module.css';
import bgPattern from '../../../Images/Login/bgPattern.svg';
import formStyle from '../../Common/Form.module.css';
import VisibilityOffIcon from '../../../Images/Common/Icons/VisibilityOffIcon';
import VisibilityOnIcon from '../../../Images/Common/Icons/VisibilityOnIcon';
import { Link } from 'react-router-dom';

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <div className={style.bg} style={{ background: `url(${bgPattern})` }}>
      <div className='g-wrapper'>
        <div className='g-container'>
          <div className={style.container}>
            <div>
              <h1 className={style.title}>Login</h1>
              <h3 className={style.subtitle}>Área do usuário</h3>
            </div>

            <div className={style.login}>
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
                    type={passwordVisibility ? 'text' : 'password'}
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

              <div
                className={
                  rememberMe
                    ? `${formStyle.buttonCheckboxContainer} ${formStyle.buttonChecked}`
                    : formStyle.buttonCheckboxContainer
                }
                onClick={() => setRememberMe(!rememberMe)}
              >
                <button className={formStyle.buttonCheckbox}></button>
                <p className={formStyle.checkboxText}>Lembrar login</p>
              </div>

              <div className={style.loginBottom}>
                <Link className={formStyle.forgotPassword}>
                  Esqueci minha senha
                </Link>
                <Link className={formStyle.filledButton}>Entrar</Link>
                <div className={formStyle.divisorContainer}>
                  <div className={formStyle.divisorLine}></div>
                  <p className={formStyle.hintText}>Não possui conta?</p>
                  <div className={formStyle.divisorLine}></div>
                </div>
                <Link className={formStyle.ghostButton}>Cadastre-se</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
