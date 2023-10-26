import React from 'react'
import { Button, Field, Input } from '@/components'
import styles from './Signin.module.css'
import { Lock, User } from 'react-feather';
import { Link } from 'react-router-dom';
const Signin = () => {
  return (
    <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.logo}>
            <img src='/dentaline_logo.png' />
          </div>
          <div className={styles.form_control}>

          <h2 className={styles.title}>Bienvenido</h2>

            <h3 className={styles.text}>Inicia sesion</h3>
            <Field>
                <Input type='text' placeholder='Usuario' />
            </Field>
            <Field>
                <Input type='password' placeholder='Pin de acceso' />
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
