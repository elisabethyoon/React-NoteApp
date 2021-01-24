import { observable, action, runInAction, makeAutoObservable } from "mobx";
import Api from "../utils/Api";
import history from "../utils/history";

class NoteStore {
  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  // 메인페이지 state
  @observable
  posts = [];

  // 노트생성 state
  @observable
  writeFormValue = {
    title: "",
    contents: ""
  };

  // 메인페이지 list data
  @action
  fetchList() {
    Api.get("posts")
      .then(({ data }) => {
        runInAction(() => {
          this.posts = data.posts;
          console.log(data.posts);
        });
      })
      .catch((err) => console.log(err));
  }

  // 등록페이지 value입력
  @action
  onChangeValueWrite(name, value) {
    this.writeFormValue = {
      ...this.writeFormValue,
      [name]: value
    };
  }

  // 게시물 등록
  @action
  onSubmitFormWrite() {
    const { title, contents } = this.writeFormValue;
    const apiParams = {
      title,
      contents
    };
    Api.post("posts", apiParams)
      .then(() => {
        runInAction(() => {
          alert("게시물이 등록되었습니다. 메인페이지로 이동합니다");
          history.push("/main");
        });
      })
      .catch((err) => console.log(err));
  }
}

export default NoteStore;
