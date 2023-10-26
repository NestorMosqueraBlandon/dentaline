import { useState, useEffect } from 'react';

const useFormattedDate = () => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = currentDate.toLocaleString('es-ES', { month: 'long' }).replace(/^\w/, (c) => c.toUpperCase());;
    const year = currentDate.getFullYear();

    setFormattedDate(`${day} ${month} ${year}`);
  }, []);

  return formattedDate;
};

export default useFormattedDate;
