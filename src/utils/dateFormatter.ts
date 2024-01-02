import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

function formatDate(date: Date) {
  const publishedDate = format(date, "d 'de' LLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  return publishedDate;
}

export default formatDate;
