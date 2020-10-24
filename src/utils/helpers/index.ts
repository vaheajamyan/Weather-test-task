import moment from 'moment';

export const getIntCelsius = (int: string): string => {
  const result = parseInt(int);

  return result < 0 ? `-${result}` : `+${result}`;
};

export const formatDate = (date: string, format = 'YYYY-MM-DD'): string => {
  return moment(date).format(format);
};
