import LoginStore from "./LoginStore";

class RootStore {
  constructor() {
    this.loginStore = new LoginStore(this);
  }
}

export default RootStore;
