import { observable, action, makeAutoObservable } from "mobx";

class LoginStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
}

export default LoginStore;
