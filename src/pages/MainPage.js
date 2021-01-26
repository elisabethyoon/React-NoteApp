import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { observer, inject } from "mobx-react";
import LoadingBar from "../components/LoadingBar";

// 서울 - 1 , 인천 - 2
const memberList = [
  { id: 1, name: "노성형", age: 35, companyId: 1 },
  { id: 2, name: "윤엘리", age: 24, companyId: 1 },
  { id: 3, name: "노성윤", age: 28, companyId: 2 },
  { id: 4, name: "노명수", age: 33, companyId: 1 },
  { id: 5, name: "양송이", age: 25, companyId: 2 }
];

const setCompanyName = (lists) => {
  const newLists = lists.filter((list) => {
    return list.age > 30;
  });

  return newLists;
};

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

    /*
    1 ~ 100 까지 나오는 배열을 만들어라
    */
    let arr = [];
    for (let i = 1; i <= 100; i++) {
      arr.push(i);
    }
    console.log(arr);
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
    const memberLists = setCompanyName(memberList);
    return (
      <div>
        <h1 className="page-header">학습노트 리스트</h1>

        <ul>
          {memberLists.map((info) => (
            <li key={info.id}>
              이름: {info.companyId}도시가스, 담당자: {info.name}
              제목: {info.title}
            </li>
          ))}
        </ul>

        <div className="main list-container contents">
          <ul>
            {posts.map((item) => {
              return (
                <li key={item._id}>
                  <div className="post-title">{item.title}</div>
                  <div className="post-contents">{item.contents}</div>
                  <div className="post-time">
                    {item.createdAt}
                    <i
                      className="icon ion-md-create"
                      onClick={() => this.updateForm(item._id)}
                    ></i>
                    <i
                      className="icon ion-md-trash"
                      onClick={() => this.deleteForm(item._id)}
                    ></i>
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
