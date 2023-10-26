import { ArrowLeft, ArrowRight, Calendar, Mail, MapPin, Search, Smartphone } from 'react-feather'
import styles from './Signin.module.css'
import { Card, Field, Input } from '@/components'
import ProgressBar from '@/components/ProgressBar'
import { useNavigate } from 'react-router-dom'

const Historial = () => {

    const navigate = useNavigate();
    return (
        <div className={styles.container}>

            <div className={styles.info}>
                <div className={styles.profile}>
                    <div className={styles.info_pac}>

                        <div className={styles.picture}>
                            <img src="/mook.jpg" alt="" />
                        </div>
                        <h3 className={styles.info_name}>Alejandra Zapata</h3>
                    </div>

                    <div className={styles.extra_info}>
                        <p><Calendar /> 25 años</p>
                        <p><Smartphone /> B+</p>
                        <p><img src='/1.png' /> 60kg</p>
                        <p><MapPin /> 1.60cm</p>
                    </div>
                </div>


                <div className={styles.last_info}>
                    <div className={styles.first}>Historia Clinica</div>
                    <div className={styles.second} >Odontograma</div>
                    <div className={styles.third} >Fotos y Rx</div>
                    <div className={styles.fourth} >Consentimiento</div>
                    <div className={styles.five} >Evolucion</div>


                </div>
            </div>
            <div className={styles.main}>

                <div className={styles.options_div}>
                    <button onClick={() => navigate('/info')} className={styles.button}>
                        Informes
                    </button>
                    <button className={styles.button}>
                        Historial de citas
                    </button>
                    <button className={styles.button}>
                        Pagos
                    </button>
                </div>
                <div>
                    <h3>Actualizado 18 septiembre 2023</h3>

                    <div>
                        <div className={styles.signals}>
                            <h3>Signos Vitales</h3>
                            <div className={styles.electroc}>

                            </div>
                        </div>
                    </div>

                    <div className={styles.relevant} >
                    <div className={styles.signals}>
                            <h3>Datos Relevantes</h3>
                            <Card title='Antecedentes Pato'  labels={['Diabetes', 'Asma']} />
                            <Card title='Alergias'  labels={['Amoxicilina']} />
                            <Card title='Tratameinto'  labels={['Fluctazona']} />                            
                        </div>
                    </div>

                    <div className={styles.data}>
                    
                    <Card title='Hematologia'  labels={[]} />                            

                    </div>
                    <div className={styles.plan}>
                    <div className={styles.signals}>
                            <h3>Plan de tratamiento</h3>
                            <div className={styles.electrod}>
                                <h4>Operatoria</h4>
                            </div>
                            <div className={styles.electrod}>
                                <h4>Exodoncia</h4>
                            </div>
                            <div className={styles.electrod}>
                                <h4>Ortodoncia</h4>
                            </div>
                        </div>
                    </div>
                </div>

              

            </div>

        </div>
    )
}

export default Historial