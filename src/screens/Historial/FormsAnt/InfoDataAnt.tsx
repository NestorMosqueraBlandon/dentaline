import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, Calendar, Mail, MapPin, Search, Smartphone } from 'react-feather'
import styles from './Forms.module.css'
import { Field, Input } from '@/components'
import { useNavigate } from 'react-router-dom'

const InfoDataAnt = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={styles.container}>

    <div className={styles.main}>

        <div className={styles.options_div}>
          <h2 className={styles.title}>Historia Clinica General</h2>
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
                    Padece o ha padecido de alguna enfermedad cronica o condicion medica grave?
                  </p>
                  <input type='checkbox' />              
                </label>
                <div className={styles.btn_em}>

                <button type='button' onClick={togglePopup} className={styles.top_btn}>
                  <span>Embarazo</span>
             
                </button>
                   
                {showPopup && (
              <div className={styles.popup} onClick={() => setShowPopup(true)}>
                    <label className={styles.field} htmlFor="">
                  <p>
                  ¿Ha tenido algun embarazo?
                  </p>
                  <input type='checkbox' />              
                </label>
                <label className={styles.field} htmlFor="">
                  <p>
                  ¿Cuantos hijos?
                  </p>
                  <input />              
                </label>
                <label className={styles.field} htmlFor="">
                  <p>
                  ¿Esta embarazada actualmente?
                  </p>
                  <input type='checkbox' />              
                </label>
                <label className={styles.field} htmlFor="">
                  <p>
                  ¿Cuantas semanas?
                  </p>
                  <input  />              
                </label>
                <label className={styles.field} htmlFor="">
                  <p>
                  ¿Toma anticonceptivos?
                  </p>
                  <input type='checkbox' />              
                </label>
                <label className={styles.field} htmlFor="">
                  <p>
                  ¿Le han realizado una histerhectorotomia o se envuentra en menopausia?
                  </p>
                  <input type='checkbox' />              
                </label>
                <button onClick={() => setShowPopup(false)}>Cerrar</button>
              </div>
            )}
                </div>

                <label className={styles.field} htmlFor="">
                  <p>
                    Cual?
                  </p>
                </label>
                <Input className={styles.input} />
                <Input className={styles.input} />

                <label className={styles.field} htmlFor="">
                  <p>
                  ¿Ha sido hospitalizado en los ultimos anos?
                  </p>
                  <input type='checkbox' />              
                </label>
                <label className={styles.field} htmlFor="">
                  <p>
                  ¿Ha presentado problemas de cohagulacion?
                  </p>
                  <input type='checkbox' />              
                </label>
                <label className={styles.field} htmlFor="">
                  <p>
                  ¿Actualmente toma algun medicamento?
                  </p>
                  <input type='checkbox' />              
                </label>

                    <div className={styles.middle_info}>
                        <div>
                        <label className={styles.field} htmlFor="">
                  <p>
                    Cuales?
                  </p>
                </label>
                <Input className={styles.input} />
                <Input className={styles.input} />
                        </div>
                        <div>
                        <label className={styles.field} htmlFor="">
                  <p>
                    Dosis
                  </p>
                </label>
                <Input className={styles.input} />
                <Input className={styles.input} />
                        </div>
                        <div>
                        <label className={styles.field} htmlFor="">
                  <p>
                    Frecuencia
                  </p>
                </label>
                <Input className={styles.input} />
                <Input className={styles.input} />
                        </div>
                        <div>
                        <label className={styles.field} htmlFor="">
                  <p>
                    Para que
                  </p>
                </label>
                <Input className={styles.input} />
                <Input className={styles.input} />
                        </div>
                    </div>
                <div className={styles.space} />

                <label className={styles.field} htmlFor="">
                  <p>
                  ¿Alergias o algun medicamento, comida o sustancia?
                  </p>
                  <input type='checkbox' />              
                </label>
                <label className={styles.field} htmlFor="">
                  <p>
                    Cuales?
                  </p>
                </label>
                <Input className={styles.input} />

                <label className={styles.field} htmlFor="">
                  <p>
                  ¿Consume algun sedante o droga?
                  </p>
                  <input type='checkbox' />              
                </label>
                <label className={styles.field} htmlFor="">
                  <p>
                    Cuales?
                  </p>
                </label>
                <Input className={styles.input} />

               </form>

            </div>
            
        </div>
        
    </div> 

</div>
  )
}

export default InfoDataAnt