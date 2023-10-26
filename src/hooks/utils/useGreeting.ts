import { useState, useEffect } from 'react';

const useGreeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    let greetingText = '';

    if (currentHour >= 5 && currentHour < 12) {
      greetingText = 'Buenos días';
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingText = 'Buenas tardes';
    } else {
      greetingText = 'Buenas noches';
    }

    setGreeting(greetingText);
  }, []);

  return greeting;
};

export default useGreeting;
