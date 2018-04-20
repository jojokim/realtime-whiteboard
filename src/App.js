import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import firestore //
import firebase from 'firebase';
import firestore from 'firebase/firestore'

let Ref;

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts : [],
    };
    this.getRealtimeUpdates = this.getRealtimeUpdates.bind(this);
  }

  getRealtimeUpdates() {
    Ref.onSnapshot(snap => {
      let newArr = [];
      snap.forEach(doc => {
        let name = doc.data().name;
        let content = doc.data().content;
        let time = doc.data().time;

        let post = ({
          name,
          content,
          time,
        });
        newArr.push(post);
      });
      newArr.sort((a,b) => {return a.time-b.time});
      this.setState(this.state.posts = newArr);
    });
  }

  componentWillMount() {
    Ref = firebase.firestore().collection("post");
    this.getRealtimeUpdates();
  }

  render() {
    return (
      <div className="App">
        <Form/>
        <table className="table table-sm table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Content</th>
            </tr>
            {this.state.posts.map((post, i) => (
              <tr>
                <td>{i}</td>
                <td>{post.name}</td>
                <td>{post.content}</td>
              </tr>
            ))}
          </thead>
        </table>
      </div>

    );
  }
}

export default App;
