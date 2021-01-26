import {
  observable,
  action,
  runInAction,
  makeAutoObservable,
  toJS
} from "mobx";
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

  @observable
  isLoading = false;

  // 등록페이지 input value state
  @observable
  writeFormValue = {
    title: "",
    contents: ""
  };

  // 수정페이지 input value state
  @observable
  updateFormValue = {
    _id: "",
    title: "",
    contents: "",
    // 변경되지않는 origin state값
    originTitle: "",
    originContents: ""
  };

  // 메인페이지 list data
  @action
  fetchList() {
    this.isLoading = true;
    Api.get("posts")
      .then(({ data }) => {
        runInAction(() => {
          this.isLoading = false;
          this.posts = data.posts;
        });
      })
      .catch((err) => (this.isLoading = false));
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
    if (!title || !contents) {
      alert("글을 작성해주세요");
    } else {
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

  // 게시물 취소
  @action
  cancelFormWrite() {
    const confirmCheck = window.confirm("취소하시겠습니까?");
    if (confirmCheck) {
      history.push("/main");
    }
  }

  // 게시물 수정 id path 가져오기
  @action
  updateForm(userId) {
    history.push(`/update/${userId}`);
  }

  // 게시물 수정 input value
  @action
  onChangeValueUpdate(name, value) {
    this.updateFormValue = {
      ...this.updateFormValue,
      [name]: value
    };
  }

  // 수정페이지 value값 불러오기
  @action
  fetchFormValue(noteId) {
    Api.get(`posts/${noteId}`)
      .then(({ data }) => {
        const { title, contents } = data;
        runInAction(() => {
          this.updateFormValue = {
            ...this.updateFormValue,
            title,
            contents,
            originTitle: title,
            originContents: contents
          };
        });
      })
      .catch((err) => console.log(err));
  }

  // 수정완료
  @action
  onSubmitUpdate(noteId) {
    const {
      title,
      contents,
      originTitle,
      originContents
    } = this.updateFormValue;
    const apiParams = {
      title,
      contents
    };
    if (title === originTitle || contents === originContents) {
      alert("수정된 내용이 없습니다");
    } else {
      Api.put(`posts/${noteId}`, apiParams)
        .then((res) => {
          runInAction(() => {
            alert("수정이 완료되었습니다. 메인페이지로 이동합니다.");
            history.push("/main");
          });
        })
        .catch((err) => console.log(err));
    }
  }

  // 삭제
  @action
  deleteForm(userId) {
    Api.delete(`posts/${userId}`)
      .then((res) => {
        runInAction(() => {
          alert("삭제가 완료되었습니다.");
          Api.get("posts")
            .then(({ data }) => {
              runInAction(() => {
                this.posts = data.posts;
              });
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  }
}

export default NoteStore;
