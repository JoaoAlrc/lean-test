/* eslint-disable radix */
import moment from 'moment';
import DateUtils from './DateUtils';

export default class NetworkUtils {
  /**
 *
 */
  static checkPhoneNumber = (phone) => {
    const regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');
    const valid = regex.test(phone);
    return valid ? null : 'Número de telefone inválido';
  }

  /** Válida um número de CPF, caso esteja correto retorna null, caso
   * contrário retona uma string alertado o erro
   * @param {*} cpf
   */
  static checkCPF = (cpf) => {
    let soma;
    let resto;
    soma = 0;
    if (cpf === '00000000000') return 'CPF inválido!';
    for (let i = 1; i <= 9; i += 1) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return 'CPF inválido!';
    soma = 0;
    for (let i = 1; i <= 10; i += 1) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return 'CPF inválido!';
    return null;
  };

  /** Válida um e-mail, caso esteja correto retorna null, caso
   * contrário retona uma string alertado o erro
   * @param {*} email
   */
  static checkEmail = (email) => {
    if (!email) return 'Preencha seu e-mail';
    const usuario = email.substring(0, email.indexOf('@'));
    const dominio = email.substring(email.indexOf('@') + 1, email.length);
    if ((usuario.length >= 1)
      && (dominio.length >= 3)
      && (usuario.search('@') === -1)
      && (dominio.search('@') === -1)
      && (usuario.search(' ') === -1)
      && (dominio.search(' ') === -1)
      && (dominio.search('.') !== -1)
      && (dominio.indexOf('.') >= 1)
      && (dominio.lastIndexOf('.') < dominio.length - 1)) {
      return null;
    }
    return 'E-mail inválido!';
  };

  /** Válida um nome, caso esteja correto retorna null, caso
   * contrário retona uma string alertado o erro
   * @param {*} name
   */
  static checkName = (name) => {
    if (!name) return null;
    const hasNumber = /\d/.test(name);
    if ((name.length <= 2) || hasNumber) {
      return 'Nome inválido (Não pode possuir número nem menos de 2 caracteres)';
    }
    const splitName = name.split(' ');
    if (splitName.length <= 1) {
      return 'Insira o seu nome completo!';
    }
    return null;
  };

  /** Válida uma data, caso esteja correto retorna null, caso
   * contrário retona uma string alertado o erro
   * @param {*} date
   */
  static checkDate = (date) => {
    if (!date) return 'Preencha sua data de nascimento';
    const reg = /(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d/;
    if (date.match(reg)) {
      return this.checkUnderAge(date, 12);
    }
    return 'Data inválida!';
  };

  /**
   * Verifica quantos anos tem da data informada ate o dia atual
   * @param {string} date dd/mm/yyyy
   * @param {number} years
   */
  static checkUnderAge(date, years) {
    const formatedDate = DateUtils.formatDateStringToDate(date);
    if (formatedDate) {
      const paramDate = moment(new Date()).subtract(years, 'years');
      if (formatedDate > paramDate) {
        return `Cadastro somente para pessoas acima de ${years} anos`;
      }
      return null;
    }
    return 'Data inválida';
  }

  /** Válida uma senha que deve possuir para de 4 caracteres, caso esteja
   * correto retorna null, caso contrário retona uma string alertado o erro
   * @param {*} password
   */
  static checkPassword = (password) => {
    if (password.length < 4) {
      return 'Sua senha deve possuir mais de 4 caracteres';
    }
    return null;
  };
}
