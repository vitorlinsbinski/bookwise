import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

function formatDateFromNow(date: Date) {
  const publishedDateFormatted = formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR,
  });

  const publishedDateCapitalized =
    publishedDateFormatted.charAt(0).toUpperCase() +
    publishedDateFormatted.slice(1);

  return publishedDateCapitalized;
}

export default formatDateFromNow;
