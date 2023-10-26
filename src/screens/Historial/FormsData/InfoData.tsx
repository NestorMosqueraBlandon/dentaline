import React from 'react'
import { ArrowLeft, ArrowRight, Calendar, Mail, MapPin, Search, Smartphone } from 'react-feather'
import styles from './Forms.module.css'
import { Field, Input } from '@/components'
import { useNavigate } from 'react-router-dom'

const InfoData = () => {
    const navigate = useNavigate();

  return (
    <div className={styles.container}>

    <div className={styles.main}>

        <div className={styles.options_div}>
            <button onClick={() => navigate('/info-data-ant')} className={styles.button}>
                Antecedentes <br /> Patologicos
            </button>
            <button className={styles.button}>
                Antecedentes Personales <br /> no patologicos
            </button>
            <button className={styles.button}>
                Expl. Intraoral
            </button>
            <button className={styles.button}>
                Antecedentes familiares <br /> hereditarios
            </button>
            <button className={styles.button}>
                Signos vitales
            </button>
            <button className={styles.button}>
                Diagnostico
            </button>
        </div>

        <div className={styles.greeting}>
            <div className={styles.calendar}>
                <div className={styles.header}>
                <h2 className={styles.title}>Datos del Paciente</h2>
                </div>
               
               <form>
                    <Field label='Nombre'>
                        <Input />
                    </Field>
                    <Field label='Apellidos'>
                        <Input />
                    </Field>
                    <Field label='Edad'>
                        <Input type='number' />
                    </Field>
                    <Field label='Genero'>
                        <Input />
                    </Field>
                    <Field label='Fecha de nacimeinto'>
                        <Input type='date' />
                    </Field>
                    <Field label='Estado civil'>
                        <Input />
                    </Field>
                    <Field label='Ocupacion'>
                        <Input />
                    </Field>
                    <Field label='Peso'>
                        <Input />
                    </Field>
                    <Field label='Altura'>
                        <Input />
                    </Field>
                    <Field label='Sangre'>
                        <Input />
                    </Field>
                    <Field label='Nacionalidad'>
                        <Input />
                    </Field>
                    <Field label='Ciudad'>
                        <Input />
                    </Field>
                    <Field label='Direccion'>
                        <Input />
                    </Field>
                    <Field label='Persona de confianza'>
                        <Input />
                    </Field>
                    <Field label='Telefono'>
                        <Input />
                    </Field>
                    <Field label='Parentesco'>
                        <Input />
                    </Field>
                    <Field label='Medico tratante'>
                        <Input />
                    </Field>
                    <Field label='Telefono'>
                        <Input />
                    </Field>
               </form>
            </div>
        </div>
        
    </div> 

</div>
  )
}

export default InfoData