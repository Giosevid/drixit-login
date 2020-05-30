class Auth {
  constructor() {
    this.auntheticated = false;
  }

  login(cb) {
    this.auntheticated = true;
    cb();
  }

  logout(cb) {
    this.auntheticated = false;
    cb();
  }

  isAuthenticated() {
    return this.auntheticated;
  }
}

export default new Auth();
