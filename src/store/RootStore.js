import LoginStore from "./LoginStore";
import NoteStore from "./NoteStore";

class RootStore {
  constructor() {
    this.loginStore = new LoginStore(this);
    this.noteStore = new NoteStore(this);
  }
}

export default new RootStore();
