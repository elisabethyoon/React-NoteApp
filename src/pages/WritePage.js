import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("noteStore")
@observer
class WritePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      writeLengthCheck: 0
    };
  }
  // value입력
  onChangeValueWrite = (e) => {
    const { noteStore } = this.props;
    const value = e.target.value;
    const name = e.target.name;
    console.log(name);
    if (name === "contents") {
      const check = value.length;
      if (check > 10) {
        alert("10글자 넘엇떠");
      } else {
        noteStore.onChangeValueWrite(name, value);
        this.setState({
          writeLengthCheck: check
        });
      }
    } else if (name === "title") {
      noteStore.onChangeValueWrite(name, value);
    }
  };

  // 게시물 등록
  onSubmitFormWrite = () => {
    const { noteStore } = this.props;
    noteStore.onSubmitFormWrite();
  };

  // 취소버튼
  cancelFormWrite = () => {
    const { noteStore } = this.props;
    noteStore.cancelFormWrite();
  };

  render() {
    const { noteStore } = this.props;
    const { writeFormValue } = noteStore;
    const { title, contents } = writeFormValue;
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
                onChange={this.onChangeValueWrite}
              />
            </div>
            <div className="form">
              <label htmlFor="Contents">Contents</label>
              <textarea
                name="contents"
                id="Contents"
                placeholder="내용을 입력해주세요."
                value={contents}
                onChange={this.onChangeValueWrite}
              ></textarea>
              <div className="validation-chk">
                {this.state.writeLengthCheck}
              </div>
            </div>
            <button
              type="submit"
              className="btn"
              onClick={this.onSubmitFormWrite}
            >
              등록
            </button>
            <button
              type="button"
              className="btn outline"
              onClick={this.cancelFormWrite}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WritePage;
