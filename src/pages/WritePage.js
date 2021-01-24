import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";

@inject("noteStore")
@observer
class WritePage extends Component {
  // value입력
  onChangeValueWrite = (e) => {
    const { noteStore } = this.props;
    const value = e.target.value;
    const name = e.target.name;
    noteStore.onChangeValueWrite(name, value);
  };

  // 게시물 등록
  onSubmitFormWrite = () => {
    const { noteStore } = this.props;
    noteStore.onSubmitFormWrite();
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
              <div className="validation-chk">숫자체크</div>
            </div>
            <button
              type="submit"
              className="btn"
              onClick={this.onSubmitFormWrite}
            >
              등록
            </button>
            <button type="button" className="btn outline">
              취소
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WritePage;
