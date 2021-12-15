import React, { Component } from 'react'
import YouTube from 'react-youtube';
import "./VideoPage.css"

export default class VideoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentSection: [],
            userName: "",
            userComment: "",
            id: ""
        };
    }

    handleUserName = (e) => {
        this.setState({
            userName: e.target.value,
        });
    };

    handleUserComment = (e) => {
        this.setState({
            userComment: e.target.value,
        });
    };

    componentDidMount(){
      this.setState({
        id: this.props.match.params.id
      })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.setState({
            commentSection: [
            ...this.state.commentSection,
            { [this.state.userName]: this.state.userComment },
            ],
            userName: "",
            userComment: "",
        });
    };  
    render() {
        return (
            <div id="individual-video-page">
              <div id="video-container">
                <YouTube videoId={this.state.id} />
              </div>
              <hr />
              <div id="form-container">
                <form onSubmit={this.handleFormSubmit}>
                  <div>
                    <label htmlFor="user-name">Name:</label>
                  </div>
                  <input
                    type="text"
                    name="user-name"
                    id="user-name"
                    placeholder="Enter username here..."
                    value={this.state.userName}
                    onChange={this.handleUserName}
                  />
                  <div>
                    <label htmlFor="user-comment">Comment:</label>
                  </div>
                  <input
                    type="text"
                    name="user-comment"
                    id="user-comment"
                    placeholder="Enter a comment here..."
                    value={this.state.userComment}
                    onChange={this.handleUserComment}
                  />
                  <div>
                    <button id="comment-button" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <br />
              <hr width="75%" />
              <div id="comment-section-container">
                <h1>Comment Section</h1>
              </div>
              <ul>
                {this.state.commentSection.map((content) => {
                  let user = Object.keys(content)[0];
                  // console.log(Object.keys(content))
                  return (
                    <div>
                      <li>
                        <div>
                          <strong>{user}: </strong>
                        </div>
                        <div>{content[user]}</div>
                      </li>
                      <hr width="50%" />
                    </div>
                  );
                })}
              </ul>
            </div>
          );
    }
}
