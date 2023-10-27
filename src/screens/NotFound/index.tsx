import { Link } from 'react-router-dom';
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div>
      <div className={styles.circle}></div>
      <span className={styles.error}>Erro 404</span>
      <h2 className={styles.title}>Hemos perdido esta pagina</h2>
      <p className={styles.copy}>Lo sentimos, La pagina que estas buscando no existe o no fue movida.</p>
      <Link to="/">Ir al inicio</Link>
      </div>
    </div>
  )
}

export default NotFound;