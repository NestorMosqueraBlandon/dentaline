import React from 'react'
import { Button, Field, Input } from '@/components'
import styles from './Signin.module.css'
import { Lock, User } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';
import useFormattedDate from '@/hooks/utils/useFormattedDate';
import useGreeting from '@/hooks/utils/useGreeting';
import ProgressBar from '@/components/ProgressBar';
import { LineChart, Line, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


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
const Dashboard = () => {
  const formattedDate = useFormattedDate();
  const greeting = useGreeting();
  const labels = ['A', 'B', 'C', 'D', 'E']; // Etiquetas para las barras

  return (
    <div className={styles.container}>
      <div className={styles.main}>

       <div className={styles.greeting}>
          <div>
            <h3>{formattedDate}</h3>
            <h2>{greeting}! Dr Juan E. Urrea</h2>
          </div>
       </div>

      <div className={styles.grid}>
        <div>
          <p>Principal motivo de consulta</p>
        <ProgressBar radius={50} strokeWidth={10} percentage={55} />
        <p>Caries</p>

        </div>

        <div>
        <p>Frecuencia de genero</p>
        <ProgressBar radius={50} strokeWidth={10} percentage={59} />
        <p>Mujeres</p>
        </div>
        <div>
        <p>Frecuencia de genero</p>

        <ProgressBar radius={50} strokeWidth={10} percentage={40} />
        <p>35-40</p>

        </div>
        <div className={styles.chart}>
          <p>Rendimiento</p>
        <BarChart width={250} height={140} data={data}>
          <Bar dataKey="uv" fill="#12ebf2" />
          <XAxis dataKey="name" />
        </BarChart>
        </div>
      </div>
      <div className={styles.chart}>

      <LineChart
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>

      </div>

       <div className={styles.info}>
        <div className={styles.profile}>
          <div className={styles.picture}>
          <img src="/mook.jpg" alt="" />
          </div>
          <h3 className={styles.info_name}>Juan E. Urrea</h3>
        </div>
        <div className={styles.options}>
          <h3>Ortodoncista</h3>
          <h3>Peridoncista</h3>
        </div>

        <div className={styles.last_info}>
            <h4>Proxima cita</h4>
            <div className={styles.box}>
              <h3>Alejandra Zapara</h3>
              <p>9:00 - 11:00 am</p>
            </div>
            <ProgressBar radius={50} strokeWidth={10} percentage={70} />


            <p>Capacidad de citas</p>
        </div>
       </div>
    </div>
  )
}

export default Dashboard
