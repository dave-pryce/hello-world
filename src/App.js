import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
  // Initial state to hide skills
    this.state = {
      showSkills: false
    };
  }


    render() {
      const skills = this._getSkills();
      let skillNodes;
      if(this.state.showSkills) {
        skillNodes = <div className="skill-list">{skills}</div>;
      }
      return (
      <div>
      <h3>Hello World</h3>
      <h4>Skills List</h4>
      <button class="waves-effect waves-light btn"onClick={this._handleClick.bind(this)}>Toggle Skills</button>
      {skillNodes}
      </div>
    );
   }

   _handleClick() {
     this.setState({
       showSkills: !this.state.showSkills
     });
   }


  // create function to return array of objects
  _getSkills() {
    const skillList = [
      {id: 1, name: 'Lean UX', description: 'Agile with a Brain'},
      {id: 2, name: 'Design Sprint', description: 'Google Stuff'},
      {id: 3, name: 'Second Gen Lean Prod Dev', description: 'Economics'},
      {id: 4, name: 'Management 3.0', description: 'Cool stuff from Jurgen Apello'},
    ];

  return skillList.map((skill) => {
    return (<Skill
            name={skill.name}
            description={skill.description}
            key={skill.id}
            />);
      });
    }
  }

  class Skill extends React.Component {
    render () {
      return(
        <p>{this.props.name} - {this.props.description}</p>
      );
    }
  }


  //class SkillForm extends React.component {
  //render () {
  //  return (
    //  <form>
  //    <label>New Skill</label>
  //    <div>
  //      <input placerholder="Name:"/>
  //      <textarea placeholder="Description:"></textarea>
  //      <button>Add New Skill</button>
  //    </div>
  //    </form>
  //  );
//  }
//  }

export default App;
