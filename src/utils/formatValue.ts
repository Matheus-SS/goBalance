export const formatValue = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
// TODO
export const formatText = (value: string): string => {
  return value
    .replace(/\s{2,}/g, ' ')
    .toLowerCase()
    .trimStart();
};

export const formatPriceField = (value: number): string => {
  return value
    .toString()
    .replace(/\s{1,}/g, '')
    .trim();
};
