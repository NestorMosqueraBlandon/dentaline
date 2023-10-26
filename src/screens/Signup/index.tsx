import React from 'react'
import { Button, Field, ImageInput, Input } from '@/components'
import styles from './Signin.module.css'
import { Lock, User } from 'react-feather';
import { useForm } from '@/hooks';
import {Link} from 'react-router-dom';

const Signup = () => {
  const { formState, handleChange} = useForm({
    name: '',
    speciality: '',
    accessCode: '',
    photo: ''
  })

  return (
    <div className={styles.container}>
        <form className={styles.form}>
          <h2 className={styles.title}>Registrate</h2>
          <p className={styles.copy}>Registrate y obten 5 dias de prueba</p>
            <Field label='Nombre'>
                <Input onChange={handleChange} icon={<User size={30} color='rgba(0,0,0,0.6)' />} type='text' />
            </Field>
            <Field label='Especialidad'>
              <select name="" id="" onChange={handleChange} >
              <option value="Ortodoncista">Selecciona una opcion</option>
                <option value="Ortodoncista">Ortodoncista</option>
              </select>
            </Field>
            <Field label='Pin de acceso'>
                <Input onChange={handleChange} icon={<Lock size={30} color='rgba(0,0,0,0.6)' />}  type='password' />
            </Field>

            <ImageInput isLoading={false} urls={[]} />
            <Button>Registrarse</Button>
            <Button variant='alternative'>Ya tienes cuenta? <Link to='/signin'>Inicia sesion</Link></Button>
        </form>
    </div>
  )
}

export default Signup
