import React from 'react'
import { ArrowLeft, ArrowRight, Calendar, Mail, MapPin, Search, Smartphone } from 'react-feather'
import styles from './Forms.module.css'
import { Field, Input } from '@/components'
import { useNavigate } from 'react-router-dom'

const Info = () => {
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
               <form className={styles.form}>
                <label className={styles.field} htmlFor="">
                  <p>
                    Ha acudido anteriromente al dentista?
                  </p>
                  <input type='checkbox' />              
                </label>
                <label className={styles.field} htmlFor="">
                  <p>
                    Cepilla sus dientes?
                  </p>
                  <input type='checkbox' />              
                </label>
                <label className={styles.field} htmlFor="">
                  <p>
                    Usa hilo dental?
                  </p>
                  <input type='checkbox' />              
                </label>
                <label className={styles.field} htmlFor="">
                  <p>
                    Usa enjuague bucal?
                  </p>
                  <input type='checkbox' />              
                </label>

                <div className={styles.space} />

                <label className={styles.field} htmlFor="">
                  <p>
                    Aplicacion topica de flour?
                  </p>
                  <input type='checkbox' />
                </label>

                <label className={styles.field_complete} htmlFor="">
                  <p>
                    Cada cuento cambia su cepillo dental?
                  </p>
                  <Input className={styles.input} />
                </label>

                <label className={styles.field} htmlFor="">
                  <p>
                    Como considera su alimentacion?
                  </p>
                  <input type='checkbox' />
                </label>

                <label className={styles.field} htmlFor="">
                  <p>
                    Sensibilidad dental o sustancias frias o calientes, dulces o a la presion?
                  </p>
                  <input type='checkbox' />
                </label>

                <label className={styles.field} htmlFor="">
                  <p>
                    Presenta sangrado en encias al cepillado?
                  </p>
                  <input type='checkbox' />
                </label>

                <label className={styles.field} htmlFor="">
                  <p>
                    Presental dolor o sensacion de malestar?
                  </p>
                  <input type='checkbox' />
                </label>

                <label className={styles.field} htmlFor="">
                  <p>
                    Persive mal sabor o aliento en su boca?
                  </p>
                  <input type='checkbox' />
                </label>

                <label className={styles.field} htmlFor="">
                  <p>
                    Persive alguna lesion bucal?
                  </p>
                  <input type='checkbox' />
                </label>

                <label className={styles.field} htmlFor="">
                  <p>
                    Apreta o rechina los dientes?
                  </p>
                  <input type='checkbox' />
                </label>
                <label className={styles.field} htmlFor="">
                  <p>
                    Chasquido o dolor al abrir y cerrar la mandibula?
                  </p>
                  <input type='checkbox' />
                </label>

               </form>
               <form className={styles.form}>
                <label className={styles.field_complete} htmlFor="">
                  <p>
                    Frecuencia
                  </p>
                  <Input  />              
                </label>
                <label className={styles.field_complete} htmlFor="">
                  <p>
                    Frecuencia
                  </p>
                  <Input  />              
                </label>
                <label className={styles.field_complete} htmlFor="">
                  <p>
                    Frecuencia
                  </p>
                  <Input  />              
                </label>
                <label className={styles.field_complete} htmlFor="">
                  <p>
                    Frecuencia
                  </p>
                  <Input  />              
                </label>


                <label className={styles.field_complete} htmlFor="">
                </label>
                <label className={styles.field_complete} htmlFor="">
                </label><label className={styles.field_complete} htmlFor="">
                </label>
                <label className={styles.field_complete} htmlFor="">
                </label>
                <label className={styles.field_complete} htmlFor="">
                </label>
                <label className={styles.field_complete} htmlFor="">
                </label><label className={styles.field_complete} htmlFor="">
                </label>
                <label className={styles.field_complete} htmlFor="">
                </label>
                
                <label className={styles.field_complete} htmlFor="">
                </label>
                <label className={styles.field_complete} htmlFor="">
                </label><label className={styles.field_complete} htmlFor="">
                </label>
                <label className={styles.field_complete} htmlFor="">
                </label>
                
                <label className={styles.field_complete} htmlFor="">
                </label>
                <label className={styles.field_complete} htmlFor="">
                </label><label className={styles.field_complete} htmlFor="">
                </label>
                <label className={styles.field_complete} htmlFor="">
                </label>
                
                <label className={styles.field_complete} htmlFor="">
                </label>
                <label className={styles.field_complete} htmlFor="">
                </label><label className={styles.field_complete} htmlFor="">
                </label>
                <label className={styles.field_complete} htmlFor="">
                </label>
                
                <label className={styles.field_complete} htmlFor="">
                </label>
                <label className={styles.field_complete} htmlFor="">
                </label><label className={styles.field_complete} htmlFor="">
                </label>
                <label className={styles.field_complete} htmlFor="">
                </label>
                
                <label className={styles.field_complete} htmlFor="">
                </label>
                <label className={styles.field_complete} htmlFor="">
                </label><label className={styles.field_complete} htmlFor="">
                </label>
                <label className={styles.field_complete} htmlFor="">
                </label>
                


                <label className={styles.field_complete} htmlFor="">
                  <p>
                    Especifique
                  </p>
                  <Input  />              
                </label>
                <label className={styles.field_complete} htmlFor="">
                  <p>
                    Especifique
                  </p>
                  <Input  />              
                </label>
                <label className={styles.field_complete} htmlFor="">
                  <p>
                    Especifique
                  </p>
                  <Input  />              
                </label>
                <label className={styles.field_complete} htmlFor="">
                  <p>
                    Especifique
                  </p>
                  <Input  />              
                </label>
                <label className={styles.field_complete} htmlFor="">
                  <p>
                    Especifique
                  </p>
                  <Input  />              
                </label>

               </form>
            </div>
            
        </div>
        
    </div> 

</div>
  )
}

export default Info