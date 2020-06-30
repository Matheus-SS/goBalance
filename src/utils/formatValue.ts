export const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export const formatText = (value: string): string => {
  return value
    .replace(/\s{2,}/g, ' ')
    .toLowerCase()
    .trimStart();
};

export const formatPriceField = (value: number): string => {
  return value
    .toString() // covert to String to use replace and trim to format the field
    .replace(/\s{1,}/g, '')
    .trim();
};

export default formatValue;
