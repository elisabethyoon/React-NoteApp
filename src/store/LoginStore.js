import { observable, action, makeAutoObservable, runInAction } from "mobx";
import Api from "../utils/Api";
import history from "../utils/history";

// 회원가입, 로그인
class LoginStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
  // 회원가입
  @observable
  formValueSignup = {
    username: "",
    password: "",
    nickname: ""
  };

  // 로그인
  @observable
  formValueLogin = {
    username: "",
    password: ""
  };

  // token값
  @observable
  token = localStorage.getItem("token") || "";

  // 회원가입 input value
  @action
  onChangeValue(name, value) {
    this.formValueSignup = {
      ...this.formValueSignup,
      [name]: value
    };
  }

  // 회원가입 버튼
  @action
  onSubmitForm() {
    const { username, password, nickname } = this.formValueSignup;
    const apiParams = {
      username,
      password,
      nickname
    };
    Api.post("signup", apiParams)
      .then(({ data }) => {
        const nickname = data.nickname;
        alert(
          `${nickname} 님 회원가입이 완료되었습니다. 로그인페이지로 이동합니다.`
        );
        history.push("/login");
      })
      .catch((err) => console.log(err));
  }

  // 로그인 input value
  @action
  onChangeValueLogin(name, value) {
    this.formValueLogin = {
      ...this.formValueLogin,
      [name]: value
    };
  }

  // 로그인 버튼
  @action
  onSubmitLogin() {
    const { username, password } = this.formValueLogin;
    const ApiParams = {
      username,
      password
    };
    Api.post("login", ApiParams)
      .then(({ data }) => {
        runInAction(() => {
          const token = data.token;
          this.token = token;
          localStorage.setItem("token", token);
          const username = data.user.username;
          alert(`${username}님 반갑습니다. 메인페이지로 이동합니다`);
          history.push("/main");
        });
      })
      .catch((err) => console.log(err));
  }

  // 로그아웃
  @action
  logout() {
    const confirmCheck = window.confirm("로그아웃 하시겠습니까?");
    if (confirmCheck) {
      this.token = localStorage.removeItem("token");
      alert("로그인화면으로 이동합니다");
      history.push("/login");
    }
  }
}

export default LoginStore;
