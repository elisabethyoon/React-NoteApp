import React, { Component } from "react";
import instance from '../api/Api'
import History from '../utils/History'

class ListWrite extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      contents: '',
    }
  }

  onChangeForm = (e) => {
    const target = e.target
    const name = target.name
    const value = target.value
    console.log(name, value)

    this.setState({
      [ name ]: value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('aa')
    instance.post('/posts', {title:this.state.title, contents: this.state.contents})
     .then(() => {
       alert('게시물이 등록되었습니다')
       History.push('/main')
     })
     .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="contents">
        <h1 className="page-header">학습노트 등록</h1>
        <div className="form-wrapper">
          <form onSubmit={this.onSubmit}>
            <div className="form">
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                id="Title"
                placeholder="제목을 입력해주세요."
                name="title"
                onChange={this.onChangeForm}
              />
            </div>
            <div className="form">
              <label htmlFor="Contents">Contents</label>
              <textarea
                name="contents"
                id="Contents"
                placeholder="내용을 입력해주세요."
                onChange={this.onChangeForm}
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