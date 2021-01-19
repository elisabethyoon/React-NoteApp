import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class MainPage extends Component {
  render() {
    return (
      <div>
        <h1 className="page-header">학습노트 리스트</h1>
        <div className="main list-container contents">
          <ul>
            <li>
              <div className="post-title">타이틀</div>
              <div className="post-contents">제목</div>
              <div className="post-time">
                2020-09-18
                <i className="icon ion-md-create"></i>
                <i className="icon ion-md-trash"></i>
              </div>
            </li>
          </ul>
        </div>
        {/* <div className="empty-content">
          <h3>등록된 학습노트가 없습니다.</h3>
        </div> */}
        <NavLink to={"/write"} className="create-button">
          <i className="ion-md-add"></i>
        </NavLink>
      </div>
    );
  }
}

export default MainPage;
