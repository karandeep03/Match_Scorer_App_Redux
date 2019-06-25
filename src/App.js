import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

  render(){
    let teams=this.props.teams,
        result=this.props.result;
    
    console.log("Render took place: " +JSON.stringify(teams))

    return (
      <div className="App">
        <header className="App-header">
          <h3>{result}</h3>
          <br></br>
          <br></br>

          <table style={{ border: '2px solid white', padding: '5px' }}>
            {
              teams.map( (item, index)=> (
                <tr>
                  <th style={{ border: '2px solid white', padding: '10px', margin: '5px' }}>{item.name}</th>

                    <button style={{ border: '1px solid', padding: '10px', margin: '5px' }}
                     onClick={this.props.updateScore.bind(this, index)} >
                    Score
                    </button>

                    <input style={{ border: '2px solid white', padding: '10px', margin: '5px' }}
                     value={ item.score } >
                    </input>
                </tr>
               ) )
            }
          </table>

          <br></br>
          <br></br>
          <input onClick={this.props.seeResult} type='submit' value='Calculate Score' style={{ padding: '10px' }}></input>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    result: state.result
  }
}

const mapDispachToProps = (dispach) => {
  return {
    updateScore: (id) => dispach({ type: 'UPDATE_SCORE', id: id }),
    seeResult: () => dispach({ type: 'SEE_RESULT' })
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);
