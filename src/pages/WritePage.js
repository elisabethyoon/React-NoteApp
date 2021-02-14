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

  componentWillUnmount() {
    const { noteStore } = this.props;
    noteStore.clear();
  }
  // value입력
  onChangeValueWrite = (e) => {
    const { noteStore } = this.props;
    const value = e.target.value;
    const name = e.target.name;
    if (name === "contents") {
      const check = value.length;
      if (check > 20) {
        alert("20글자 이상은 등록할 수 없습니다.");
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
        <h1 className="page-header list">노트 등록</h1>
        <div className="form-wrapper">
          <div>
            <div className="form">
              <label htmlFor="Title" className="write-title">
                Title
              </label>
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
              <label htmlFor="Contents" className="write-title">
                Contents
              </label>
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
              className="btn write-btn"
              onClick={this.onSubmitFormWrite}
            >
              등록
            </button>
            <button
              type="button"
              className="btn outline write-btn"
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
