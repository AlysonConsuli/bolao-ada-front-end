import dayjs from "dayjs";
import "dayjs/locale/br.js";

dayjs.locale("br");

const formatDate = (date) => {
  const dateJs = dayjs(date);
  const formatedDate = dayjs(dateJs).format("DD/MM HH:mm");
  return formatedDate;
};

const nextGame = (date) => {
  const gameDay = dayjs(date);
  //const testDay = "2022-11-21 08:00";
  return dayjs().isBefore(gameDay);
};

const startCup = () => {
  const cupDay = dayjs("2022-09-24 15:00");
  //const testDay = "2022-11-20 08:00";
  return dayjs().isAfter(cupDay);
};

export const formats = {
  formatDate,
  nextGame,
  startCup,
};
