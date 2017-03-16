import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {
  constructor (){
    super();
    this.state = {
      user:null,
      actualName : null
    };

  this.handleAuth = this.handleAuth.bind(this);
  this.handleLogout = this.handleLogout.bind(this);
  }
  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({user});
    });
  }
  handleAuth (){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion `))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  handleLogout(){
    firebase.auth().signOut()
      .then( () => {
        console.log(`${this.state.user.displayName} ha cerrado sesion `);
        this.setState({user:null});
      }) 
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
      
  }

  renderLoginButton (){
    //Si el user esta logueado
    if(this.state.user){
      return (
        <div>
          <img width="100p" src={this.state.user.photoURL} alt={this.state.user.displayName} />
          <p>Hola {this.state.user.displayName}! </p>
          <button onClick={this.handleLogout}>Cerrar Sesion</button>
        </div>
      );
    }else{
        //Si no lo esta 
        return(
          <button onClick={this.handleAuth}>Login con Google</button>
        );
    }

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pseudogram</h2>
        </div>
        <p className="App-intro">
         {this.renderLoginButton() }
        </p>
      </div>
    );
  }
}

export default App;
