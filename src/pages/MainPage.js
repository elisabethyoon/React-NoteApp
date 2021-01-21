import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Api from "../utils/Api";
import history from "../utils/history";
import LoadingBar from "../components/LoadingBar";

export class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      isLoading: false
    };
  }

  fetchList = () => {
    this.setState({
      isLoading: true
    });
    Api.get("posts")
      .then(({ data }) => {
        this.setState({
          lists: data.posts,
          isLoading: false
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false
        });
      });
  };

  componentDidMount() {
    this.fetchList();
  }

  // 리스트 삭제버튼
  deleteList = (_id) => {
    const confirmCheck = window.confirm("정말 삭제하시겠습니까?");
    if (confirmCheck) {
      // comfirm 확인 누를시
      Api.delete(`posts/${_id}`)
        .then(() => {
          alert("삭제가 완료되었습니다.");
          this.fetchList();
        })
        .catch((error) => console.log(error));
    }
  };

  // 리스트 수정
  updateForm = (_id) => {
    history.push(`/update/${_id}`);
  };

  render() {
    const { lists, isLoading } = this.state;
    return (
      <div>
        <h1 className="page-header">학습노트 리스트</h1>
        <div className="main list-container contents">
          <ul>
            {lists.map((list) => {
              const { _id, title, contents, createdAt } = list;
              return (
                <li key={_id}>
                  <div className="post-title">{title}</div>
                  <div className="post-contents">{contents}</div>
                  <div className="post-time">
                    {createdAt}
                    <i
                      className="icon ion-md-create"
                      onClick={() => this.updateForm(_id)}
                    ></i>
                    <i
                      className="icon ion-md-trash"
                      onClick={() => this.deleteList(_id)}
                    ></i>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {!lists.length && !isLoading ? (
          <div className="empty-content">
            <h3>등록된 학습노트가 없습니다.</h3>
          </div>
        ) : null}

        <NavLink to={"/write"} className="create-button">
          <i className="ion-md-add"></i>
        </NavLink>
        {isLoading ? <LoadingBar /> : null}
      </div>
    );
  }
}

export default MainPage;
