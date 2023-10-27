import React, { useEffect } from 'react'
import { Button, Field, Input } from '@/components'
import styles from './Signin.module.css'
import { Lock, User } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, useLogin, useUser } from '@/hooks';
const Signin = () => {
  const { formState: user, handleChange } = useForm({
    username: '',
    pin: '',
  });

  const { isLoading, login } = useLogin();
  const { user: userInfo } = useUser();

  const navigate = useNavigate();

  const submit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    login(user);
  }

  useEffect(() => {
    if(userInfo?.id){
      navigate('/dashboard');
    }
  }, [userInfo]);

  return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={submit} >
          <div className={styles.logo}>
            <img src='/dentaline_logo.png' />
          </div>
          <div className={styles.form_control}>

          <h2 className={styles.title}>Bienvenido</h2>

            <h3 className={styles.text}>Inicia sesion</h3>
            <Field>
                <Input autoComplete='false' type='text' name='username' onChange={handleChange} placeholder='Usuario' />
            </Field>
            <Field>
                <Input autoComplete='false' type='password' name='pin'  onChange={handleChange} placeholder='Pin de acceso' />
            </Field>
            <button>Login</button>
            <div className={styles.footer}>

            <Link to='/signup'>Crear Cuenta</Link>
            
            <Link to='/signup'>Olvide mi contrasena</Link>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Signin
