import { ArrowLeft, ArrowRight, Mail, MapPin, Search, Smartphone } from 'react-feather'
import styles from './Signin.module.css'
import { Field, Input } from '@/components'
import ProgressBar from '@/components/ProgressBar'

const Register = () => {
  return (
    <div className={styles.container}>
    <div className={styles.main}>

        <div className={styles.options_div}>
            <button className={styles.button}>
                Px Pediatrico
            </button>
            <button className={styles.button}>
                Px Adulto
            </button>
            <form>
                <input type="text" placeholder='Buscar Paciente' />
                <button><Search /></button>
            </form>
        </div>
        <div className={styles.dates}>
            <div className={styles.header}>
                <h3>Pacientes</h3>
            </div>
            <div className={styles.rebody}>
            <div>

<div className={styles.picture}>
    <img src="/dummy.jpg" alt="" />
</div>
<p>Agregar paciente</p>
</div>
                <div>

            <div className={styles.picture}>
                <img src="/mook.jpg" alt="" />
            </div>
            <p>Alejandra Zapata</p>
            </div>
            <div>

            <div className={styles.picture}>
                <img src="/mook.jpg" alt="" />
            </div>
            <p>Jonathan</p>
            </div>

<div>

            <div className={styles.picture}>
                <img src="/mook.jpg" alt="" />
            </div>
            <p>Patricia</p>

</div>

<div>

            <div className={styles.picture}>
                <img src="/mook.jpg" alt="" />
            </div>
            <p>William</p>

</div>

            <div>

            <div className={styles.picture}>
                <img src="/mook.jpg" alt="" />
            </div>
            <p>Andres Castrillon</p>
            </div>

                <ArrowRight />
            </div>
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
               </form>
            </div>
        </div>
        
    </div>

    <div className={styles.info}>
        <div className={styles.profile}>
        <div className={styles.info_pac}>

            <div className={styles.picture}>
                <img src="/mook.jpg" alt="" />
            </div>
            <h3 className={styles.info_name}>Alejandra Zapata</h3>
            </div>
        
        <div className={styles.extra_info}>
            <p><Mail /> adamsul@email.com</p>
            <p><Smartphone /> +57 3206543218</p>
            <p><MapPin /> Medellin, Antioquia Centro Odontologico</p>
        </div>

        <button className={styles.btn_go}> Ir al expediente <ArrowRight /> </button>
        </div>
  

        <div className={styles.last_info}>
        <div>
          <p>Orotodoncia</p>
        <ProgressBar radius={50} strokeWidth={10} percentage={55} />
        <p>Caries</p>

        </div>
        <div>
          <p>Operatoria</p>
        <ProgressBar radius={50} strokeWidth={10} percentage={59} />
        <p>Caries</p>

        </div>

        </div>
    </div>
</div>
  )
}

export default Register