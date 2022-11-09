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
  //const testDay = "2022-11-20 08:00";
  return dayjs().isBefore(gameDay);
};

const startCup = () => {
  const cupDay = dayjs("2022-11-20 00:01");
  //const testDay = "2022-11-20 08:00";
  return dayjs().isAfter(cupDay);
};

const endCup = () => {
  const lastDay = dayjs("2022-12-02 18:15");
  // const testDay = "2022-12-02 18:31";
  return dayjs().isAfter(lastDay);
};

export const formats = {
  formatDate,
  nextGame,
  startCup,
  endCup,
};
