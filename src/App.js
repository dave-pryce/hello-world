import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor() {
  super();
  // Initial state to hide skills
    this.state = {
      showSkills: false,
      skills: []
    };
  }

     componentWillMount() {
       this._fetchSkills();
     }


    _fetchSkills(){
      $.ajax({
        method: 'GET',
        url: 'skills.json',
        success: (skills => {
          //console.log(skills);
          this.setState({ skills });
        }),
        error: (skills => {
          console.log('error');
        })
      })
    }

    render() {
      const skills = this._getSkills();
      let skillNodes;
      if(this.state.showSkills) {
        skillNodes = <div>{skills}</div>;
      }
      return (
      <div>
      <h3>Hello World</h3>
      <SkillForm/>
      <h4>Skills List</h4>
      <button onClick={this._handleClick.bind(this)}>Toggle Skills</button>
      {skillNodes}
      </div>
    );
   }

   // create function to return array of objects
   _getSkills() {
   return this.state.skills.map((skill) => {
     return (<Skill
             name={skill.name}
             description={skill.description}
             key={skill.id}
             />);
       });
     }


   _addSkill(name, description) {
     const skill = {
       id: this.state.skills.length + 1,
       name,
       description
     };
     this.setState({ skills: this.state.skills.concat([skill]) });
   }

    _handleClick() {
      this.setState({
        showSkills: !this.state.showSkills
      });
    }

  // App end
  }


  class Skill extends React.Component {
    render () {
      return(
        <p>{this.props.name} -- {this.props.description}</p>
      );
    }
  }

  class SkillForm extends React.Component {
    render () {
      return (
        <div>
        <p>Add a new skill</p>
        <form>
        <input type='text'/>
        </form>
        <button>Add</button>
        </div>
      )
    }
  }


export default App;
