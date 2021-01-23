import React, { Component } from "react";
import Api from "../utils/Api";
import history from "../utils/history";

export class UpdatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      contents: ""
      // originTitle: ''
    };
  }

  onChangeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    console.log(this.props.match.params.userId, "update");
    Api.get(`posts/${userId}`)
      .then(({ data }) => {
        const { title, contents } = data;
        this.setState({
          title,
          contents
          // originTitle: title
        });
      })
      .catch((error) => console.log(error));
  }

  // 수정완료
  updateComplete = () => {
    const userId = this.props.match.params.userId;
    const { title, contents } = this.state;
    console.log(this.props.match.params.userId, "수정완료 버튼");
    const paramsApi = {
      title,
      contents
    };
    const confirmCheck = window.confirm("수정하시겠습니까?");
    if (confirmCheck) {
      Api.put(`posts/${userId}`, paramsApi)
        .then(() => {
          alert("수정이 완료되었습니다.");
          history.push("/main");
        })
        .catch((error) => console.log(error));
    }
  };

  // 수정취소
  updateCancel = () => {
    const confirmCheck = window.confirm(
      "변경사항이 취소됩니다. 취소하시겠습니까?"
    );
    if (confirmCheck) {
      history.push("/main");
    }
  };
  render() {
    const { title, contents } = this.state;
    return (
      <div className="contents">
        <h1 className="page-header">학습노트 수정</h1>
        <div className="form-wrapper">
          <div>
            <div className="form">
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                id="Title"
                name="title"
                value={title}
                placeholder="제목을 입력해주세요."
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
          {/* <p className="log">error</p> */}
        </div>
      </div>
    );
  }
}

export default UpdatePage;
