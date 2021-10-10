import { Item } from '../types/item';



export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
}





export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let mouth = date.getMonth();
  let day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(mouth)}/${year}`;
}

const addZeroToDate = (n: number): string => {
  if (n < 10) {
    return `0${n}`;
  } else {
    return `${n}`;
  }
}




export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-');
  let months = ['janeiro', 'feveiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outrobro', 'Novembro', 'desembro'];

  return `${months[parseInt(month) - 1]}, ${year}`
}


















export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split('-');

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      (list[i].date.getMonth() + 1) === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
}