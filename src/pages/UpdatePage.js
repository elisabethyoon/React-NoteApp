import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("noteStore")
@observer
class UpdatePage extends Component {
  // input value
  onChangeValueUpdate = (e) => {
    const { noteStore } = this.props;
    const name = e.target.name;
    const value = e.target.value;
    noteStore.onChangeValueUpdate(name, value);
  };

  componentDidMount() {
    const { noteStore } = this.props;
    const noteId = this.props.match.params.noteId;
    noteStore.fetchFormValue(noteId);
  }

  // 수정완료 버튼
  onSubmitUpdate = () => {
    const { noteStore } = this.props;
    const noteId = this.props.match.params.noteId;
    noteStore.onSubmitUpdate(noteId);
  };

  // 수정취소 버튼
  cancelUpdate = () => {
    const { noteStore } = this.props;
    noteStore.cancelUpdate();
  };
  render() {
    const { noteStore } = this.props;
    const { updateFormValue } = noteStore;
    const { title, contents } = updateFormValue;
    return (
      <div className="contents">
        <h1 className="page-header list">노트 수정</h1>
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
                onChange={this.onChangeValueUpdate}
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
                onChange={this.onChangeValueUpdate}
              ></textarea>
              {/* <div className="validation-chk">숫자체크</div> */}
            </div>
            <button
              type="submit"
              className="btn write-btn"
              onClick={this.onSubmitUpdate}
            >
              수정완료
            </button>
            <button
              type="button"
              className="btn outline write-btn"
              onClick={this.cancelUpdate}
            >
              취소
            </button>
          </div>
          {/* <p className="log">에러</p> */}
        </div>
      </div>
    );
  }
}

export default UpdatePage;
