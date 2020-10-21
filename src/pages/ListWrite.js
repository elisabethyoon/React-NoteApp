import React, { Component } from "react";

class ListWrite extends Component {
  render() {
    return (
      <div className="contents">
        <h1 className="page-header">학습노트 등록</h1>
        <div className="form-wrapper">
          <form>
            <div className="form">
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                id="Title"
                placeholder="제목을 입력해주세요."
              />
            </div>
            <div className="form">
              <label htmlFor="Contents">Contents</label>
              <textarea
                name=""
                id="Contents"
                placeholder="내용을 입력해주세요."
              ></textarea>
              <div className="validation-chk">숫자체크</div>
            </div>
            <button type="submit" className="btn">
              등록
            </button>
            <button type="button" className="btn outline">
              취소
            </button>
          </form>
          {/* <p className="log" v-if="logState">
            게시물이 이미 존재합니다.
          </p> */}
        </div>
      </div>
    );
  }
}

export default ListWrite;