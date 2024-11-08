import { useState, useEffect } from 'react';

function useFormattedDate(dateString: string) {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    function formatDate(dateString: string) {
      const date = new Date(dateString);

      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };

      // Formata a data
      let formatted = date.toLocaleString('en-US', options);

      // Remove o espaço entre a hora e o "AM"/"PM"
      formatted = formatted.replace(/(\d{2}):(\d{2}) ([APM]{2})/, '$1:$2$3');

      return formatted;
    }

    setFormattedDate(formatDate(dateString));
  }, [dateString]);

  return formattedDate;
}

export default useFormattedDate;
