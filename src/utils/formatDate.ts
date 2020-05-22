/* import { format } from 'date-fns'; //eslint-disable-line
import pt from 'date-fns/locale/pt'; //eslint-disable-line */

const formatDate = (date: Date): string => {
  // return format(date, "dd'/'MM'/'yyyy", { locale: pt });
  const dateFormatted = new Date(date);

  return dateFormatted.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

export default formatDate;
