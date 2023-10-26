import React, { useState } from 'react'
import { Button, Field, Input } from '@/components'
import styles from './Signin.module.css'
import { ArrowLeft, ArrowRight, Lock, Mail, MapPin, MessageSquare, Phone, PhoneCall, Search, Smartphone, User } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';
import useFormattedDate from '@/hooks/utils/useFormattedDate';
import useGreeting from '@/hooks/utils/useGreeting';
import ProgressBar from '@/components/ProgressBar';
import { LineChart, Line, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { es } from 'date-fns/locale'; // Importa la localización en español


const data = [
    {
        name: 'Endo',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Caries',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Exo',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    }
];
const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
function capitalize(string: string) {
    return string.toUpperCase();
  }
const Agenda = () => {
    const formattedDate = useFormattedDate();
    const greeting = useGreeting();
    const labels = ['A', 'B', 'C', 'D', 'E']; // Etiquetas para las barras
    const currentDate = new Date();
    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDayOfMonth = endOfMonth(currentDate);
    const daysOfMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });
    const startDate = new Date(); // Fecha de inicio
    const daysToShow = 7; // Número de días a mostrar
  
    const calendarDays = [];
    for (let i = 0; i < daysToShow; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
  
      // Obtener el número del día y el nombre del día
      const dayNumber = format(currentDate, 'd'); // 'd' devuelve el número del día
      const dayName = format(currentDate, 'EEEE'); // 'EEEE' devuelve el nombre completo del día de la semana
  
      calendarDays.push(
          <th key={currentDate.toISOString()} className={styles.day_number}><span>{dayNumber}</span> <span className={styles.title}>{capitalize(dayName)}</span> </th>
      );
    }
    const [currentTime, setCurrentTime] = useState(new Date());

    const workHours = ['08:00', '09:00', '10:00', '11:00', '12:00'];

    const formatTime = (date:any) => {
        const hour = date.getHours();
        const minute = date.getMinutes();
        const ampm = hour >= 12 ? 'pm' : 'am';
    
        // Formatea la hora en formato "10:00am", "11:00am", "12:00m", etc.
        const formattedHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
        const formattedMinute = minute < 10 ? `0${minute}` : minute;
    
        return `${formattedHour}:${formattedMinute}${ampm}`;
      };
    return (
        <div className={styles.container}>
            <div className={styles.main}>

                <div className={styles.dates}>
                    <div className={styles.header}>
                        <ArrowLeft /> <h3>Septiembre 2023</h3><ArrowRight />
                    </div>
                    <div className={styles.rebody}>
                        {/* <ArrowLeft />
                        <tr className={styles.head}>
                                    {calendarDays}
                                </tr>
                        <ArrowRight /> */}
                    </div>
                </div>

                <div className={styles.greeting}>
                    <div className={styles.calendar}>
                        <div className={styles.header}>
                        <button className={styles.btn}>Agregar</button>
                        </div>
                        {/* {workHours.map((hour, index) => (
          <li key={index}>{hour} am</li>
        ))} */}
                        <table>
                            <thead>
                                <tr className={styles.head}>
                                    {calendarDays}
                                </tr>
                            </thead>
                            <tbody className={styles.body}>
                                
                                {daysOfMonth.map((day) => (
                                    <tr key={day.toISOString()}>
                                        <td>{format(day, 'd')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>

            <div className={styles.info}>
                <div className={styles.profile}>
                <form className={styles.form_search}>
                    <input type="search" placeholder='Buscar paciente' />
                    <button><Search size={18} /></button>
                </form>
                <div className={styles.info_pac}>

                    <div className={styles.picture}>
                        <img src="/mook.jpg" alt="" />
                    </div>
                    <h3 className={styles.info_name}>Juan E. Urrea</h3>
                    </div>
                
                <div className={styles.extra_info}>
                    <p><Mail /> adamsul@email.com</p>
                    <p><Smartphone /> +57 3206543218</p>
                    <p><MapPin /> Medellin, Antioquia Centro Odontologico</p>
                </div>
                </div>
          

                <div className={styles.last_info}>
                    <h4>Proximas citas</h4>
                    <div className={styles.box}>
                        <h3>Alejandra Zapata</h3>
                        <p>9:00 - 11:00 am</p>
                    </div>

                    <div className={styles.box}>
                        <h3>Gustavo Perea</h3>
                        <p>11:00 - 12:00 m</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Agenda
