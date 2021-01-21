import React, { Component } from "react";
import Api from "../utils/Api";
import history from "../utils/history";
import LoadingBar from "../components/LoadingBar";

export class UpdatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      contents: "",
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    });
    const noteId = this.props.match.params.noteId;
    Api.get(`posts/${noteId}`)
      .then(({ data }) => {
        const { title, contents } = data;
        this.setState({
          title,
          contents,
          isLoading: false
        });
      })
      .catch((error) => console.log(error));
  }

  onChangeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  // 수정완료
  updateComplete = () => {
    const comfirmCheck = window.confirm("수정하시겠습니까?");
    if (comfirmCheck) {
      const noteId = this.props.match.params.noteId;
      const { title, contents } = this.state;
      const paramsApi = {
        _id: noteId,
        title,
        contents
      };
      Api.put(`posts/${noteId}`, paramsApi)
        .then(() => {
          alert("수정이 완료되었습니다");
          history.push("/main");
        })
        .catch((error) => console.log(error));
    }
  };

  // 수정취소
  updateCancel = () => {
    const confirmCheck = window.confirm("수정을 취소하시겠습니까?");
    if (confirmCheck) {
      history.push("/main");
    }
  };
  render() {
    const { title, contents, isLoading } = this.state;
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
            <button type="submit" className="btn" onClick={this.updateComplete}>
              수정완료
            </button>
            <button
              type="button"
              className="btn outline"
              onClick={this.updateCancel}
            >
              취소
            </button>
          </div>
          {/* <p className="log">에러</p> */}
        </div>
        {isLoading ? <LoadingBar /> : null}
      </div>
    );
  }
}

export default UpdatePage;
