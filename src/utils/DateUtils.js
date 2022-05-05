import moment from 'moment';
import 'moment/locale/pt-br';

export default class DateUtils {
  /**
    * Example: 2019-06-14 10:00:00 returns 14/06/2019
    */
  static formatDateWithoutTime(date) {
    return `${new Date(date).toLocaleDateString()}`;
  }

  /**
   *
   * @param {string} date
   * Example: yyyy-mm-dd to DateJS
   */
  static formatDateDefaultToDate(dt) {
    const date = `${dt[0]}${dt[1]}${dt[2]}${dt[3]}/${dt[5]}${dt[6]}/${dt[8]}${dt[9]}`;
    return new Date(date);
  }

  /**
   * Formata um Date js para um formato específico de data da lib moment.js. Ver formatos disponíveis em: https://momentjs.com/
   * @param {*} dateTime
   * @param {*} format
   */
  static formatDateTime(dateTime, format) {
    return moment(dateTime).format(format);
  }

  /**
   * Recebe uma string de data no formato dd/mm/yyyy e retorna um objeto Date JS
   * @param {String} date
   * @returns {Date} date
   */
  static formatLocaleDateToDate(dt) {
    if (!dt) return null;
    if (dt.length !== 10) return null;
    const date = `${dt[6]}${dt[7]}${dt[8]}${dt[9]}-${dt[3]}${dt[4]}-${dt[0]}${dt[1]}`;
    return new Date(date);
  }

  static formatDate

  static retornaData(data) {
    if (!data) {
      return data;
    }
    const split = data.split('/');
    return new Date(`${split[1]}/${split[0]}/${split[2]}`);
  }

  /**
   *
   * @param {string} date dd/mm/yyyy
   * @returns Date JS
   */
  static formatDateStringToDate(date) {
    if (!date || date.length !== 10) {
      return false;
    }
    const formatDate = `${date[6]}${date[7]}${date[8]}${date[9]}/${date[3]}${date[4]}/${date[0]}${date[1]}`;
    return new Date(formatDate);
  }

  /**
    * Example: 2019-06-14 10:00:00 returns 10:00
    */
  static formatTime(date) {
    return moment(date).format('HH:mm');
  }

  /**
  *  Example: New Date() returns 2019-07-14
  */
  static formatDateDefault(date) {
    const dateParse = JSON.stringify(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
    return dateParse.substring(1, 11);
  }

  /**
   * Example: 2019-06-14 10:00:00 returns 14/06/2019 10:00
   */
  static formatDate(date) {
    return moment(date).format('DD/MM/YYYY HH:mm');
  }

  static formatDateBrasil(date) {
    return moment(date).format('DD-MM-YYYY');
  }

  static formatDateBrasilBarra(date) {
    return moment(date).format('DD/MM/YYYY');
  }

  static formatFromBrazillianDate(date) {
    const brToValidDate = date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3');

    return brToValidDate;
  }

  static daysDiffDate(dateStart, dateEnd) {
    const start = moment(dateStart);
    const end = moment(dateEnd);
    return end.diff(start, 'days');
  }

  /**
   * Example: 01/08/2019 10:00:00 return Domingo
   */
  static diaSemana(value) {
    const dia = moment(value, 'DD/MM/YYYY').weekday();
    const semana = [
      'Domingo',
      'Segunda-Feira',
      'Terça-Feira',
      'Quarta-Feira',
      'Quinta-Feira',
      'Sexta-Feira',
      'Sábado'
    ];
    return semana[dia];
    // return semana[date.getDay()];
  }

  /**
   * Exemple: 2019-10-30
   *
   * Return:
   * 24 de Julho
   */
  static monthDay(date) {
    const diaInit = JSON.stringify(date).substring(9, 11);
    const mesInit = JSON.stringify(date).substring(6, 8);
    let value = '';
    value = `${diaInit} de ${this.mesString(mesInit)}`;
    return value;
  }

  /**
   * Exemple: 01 return "Janeiro"
   */
  static mesString(value) {
    switch (value) {
      case '01':
        return 'Janeiro';
      case '02':
        return 'Fevereiro';
      case '03':
        return 'Março';
      case '04':
        return 'Abril';
      case '05':
        return 'Maio';
      case '06':
        return 'Junho';
      case '07':
        return 'Julho';
      case '08':
        return 'Agosto';
      case '09':
        return 'Setembro';
      case '10':
        return 'Outubro';
      case '11':
        return 'Novembro';
      case '12':
        return 'Dezembro';

      default:
        return '';
    }
  }

  static getFullYear() {
    const today = new Date();
    return today.getFullYear();
  }

  static getTodayDate() {
    const today = moment().format('DD/MM/YYYY');
    return today;
  }
}
