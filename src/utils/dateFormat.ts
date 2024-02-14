import moment from 'moment';

export const formatDate = (date: string): string => {
  const formatedDate = moment(date).format('ddd DD MMM');

  return formatedDate;
}

export const unixFormat = (timestamp: any) => moment.unix(timestamp).format('HH:mm')