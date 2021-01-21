import React, { Component } from "react";
import Api from "../utils/Api";
import history from "../utils/history";

export class WritePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      contents: "",
      error: ""
    };
  }

  onChangeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  // 글 등록하기
  onSubmitForm = () => {
    const { title, contents } = this.state;
    if (!title || !contents) {
      alert("글을 작성하세요!!");
    } else {
      const confirmCheck = window.confirm("등록하시겠습니까?");
      if (confirmCheck) {
        Api.post("posts", {
          title,
          contents
        })
          .then(({ data }) => {
            console.log(data);
            history.push("/main");
          })
          .catch(({ response }) => {
            return this.setState({
              error: response.data.message
            });
          });
      }
    }
  };

  // 글등록 취소버튼
  cancelForm = () => {
    const confirmCheck = window.confirm("취소하시겠습니까?");
    if (confirmCheck) {
      history.push("/main");
    }
  };
  render() {
    const { title, contents, error } = this.state;
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
          {error ? <p className="log">{error}</p> : null}
        </div>
      </div>
    );
  }
}

export default WritePage;
