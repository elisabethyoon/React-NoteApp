import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { observer, inject } from "mobx-react";
import LoadingBar from "../components/LoadingBar";

@inject("noteStore")
@observer
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newList: []
    };
  }
  componentDidMount() {
    const { noteStore } = this.props;
    noteStore.fetchList();
  }

  // 수정버튼
  updateForm = (_id) => {
    const { noteStore } = this.props;
    noteStore.updateForm(_id);
  };

  // 삭제버튼
  deleteForm = (_id) => {
    const { noteStore } = this.props;
    noteStore.deleteForm(_id);
  };
  render() {
    const { noteStore } = this.props;
    const { posts, isLoading } = noteStore;
    return (
      <div>
        <h1 className="page-header list">노트 리스트</h1>
        <div className="main list-container contents">
          <ul>
            {posts.map((item) => {
              return (
                <li key={item._id}>
                  <span className="post-dot"></span>
                  <div className="post-title">{item.title}</div>
                  <div className="post-contents">{item.contents}</div>
                  <div className="post-info">
                    <div className="post-time">{item.createdAt}</div>
                    <div className="box-icon">
                      <i
                        className="icon ion-md-create"
                        onClick={() => this.updateForm(item._id)}
                      ></i>
                      <i
                        className="icon ion-md-trash"
                        onClick={() => this.deleteForm(item._id)}
                      ></i>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {!posts.length && !isLoading ? (
          <div className="empty-content">
            <h3>등록된 학습노트가 없습니다.</h3>
          </div>
        ) : null}
        {isLoading ? <LoadingBar /> : null}
        <NavLink to={"/write"} className="create-button">
          <i className="ion-md-add"></i>
        </NavLink>
      </div>
    );
  }
}

export default MainPage;
