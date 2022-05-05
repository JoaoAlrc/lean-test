class AuthServices {
  static async logIn(body) {
    const {email, password} = body;
    if (email !== 'jv.alarcao@gmail.com' || password !== 'pass12345') {
      return false;
    }

    return {
      name: 'João Victor Alarcão Pereira',
      access_token: 'access_tokenaccess_token',
    };
  }
}

export default AuthServices;
