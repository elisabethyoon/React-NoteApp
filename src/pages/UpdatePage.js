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
  render() {
    const { noteStore } = this.props;
    const { updateFormValue } = noteStore;
    const { title, contents } = updateFormValue;
    return (
      <div className="contents">
        <h1 className="page-header">노트 수정</h1>
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
                onChange={this.onChangeValueUpdate}
              />
            </div>
            <div className="form">
              <label htmlFor="Contents">Contents</label>
              <textarea
                name="contents"
                id="Contents"
                placeholder="내용을 입력해주세요."
                value={contents}
                onChange={this.onChangeValueUpdate}
              ></textarea>
              <div className="validation-chk">숫자체크</div>
            </div>
            <button type="submit" className="btn" onClick={this.onSubmitUpdate}>
              수정완료
            </button>
            <button type="button" className="btn outline">
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
