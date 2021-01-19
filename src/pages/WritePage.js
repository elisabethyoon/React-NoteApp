import React, { Component } from "react";
import Api from "../utils/Api";
import history from "../utils/history";

export class WritePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      contents: "",
      errorText: ""
    };
  }
  onChangeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  // 등록버튼
  onSubmitForm = () => {
    const { title, contents } = this.state;
    Api.post("posts", {
      title,
      contents
    })
      .then(() => {
        alert("게시글이 등록되었습니다. 메인페이지로 이동합니다.");
        history.push("/main");
      })
      .catch(({ response }) => {
        console.log(response.data.message);
        this.setState({
          errorText: response.data.message
        });
      });
  };

  // 취소버튼
  cancelForm = () => {
    const confirmCheck = window.confirm("정말 취소할거니??");
    if (confirmCheck) {
      // confirm창 확인 클릭시
      history.push("/main");
    }
  };
  render() {
    const { title, contents } = this.state;
    return (
      <div className="contents">
        <h1 className="page-header">학습노트 등록</h1>
        <div className="form-wrapper">
          <div>
            <div className="form">
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                id="Title"
                name="title"
                placeholder="제목을 입력해주세요."
                value={title}
                onChange={this.onChangeValue}
              />
            </div>
            <div className="form">
              <label htmlFor="Contents">Contents</label>
              <textarea
                name="contents"
                id="Contents"
                placeholder="내용을 입력해주세요."
                value={contents}
                onChange={this.onChangeValue}
              ></textarea>
              <div className="validation-chk">숫자체크</div>
            </div>
            <button type="submit" className="btn" onClick={this.onSubmitForm}>
              등록
            </button>
            <button
              type="button"
              className="btn outline"
              onClick={this.cancelForm}
            >
              취소
            </button>
          </div>
          {this.state.errorText ? (
            <p className="log">{this.state.errorText}</p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default WritePage;
