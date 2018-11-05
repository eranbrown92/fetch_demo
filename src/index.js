import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      posts:[]
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => this.setState({ posts}))
  }
  render(){
    return(
      <div className="container">
        <h1>Main app component</h1>
        {
          this.state.posts.map(post => {
            return(
              <div key={post.id}>
                <div className="card" >
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{post.title}</li>
                    <li className="list-group-item">{post.body}</li>
                  </ul>
                </div>
                <br/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
