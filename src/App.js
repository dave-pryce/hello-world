import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  // Initial state to hide skills
    this.state = {
      showSkills: false,
      skills: [
        {id: 1, name: 'Lean UX', description: 'Agile with a Brain'},
        {id: 2, name: 'Design Sprint', description: 'Google Stuff'},
        {id: 3, name: 'Second Gen Lean Prod Dev', description: 'Economics'},
        {id: 4, name: 'Management 3.0', description: 'Cool stuff from Jurgen Apello'}
      ]
    };
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


  // class SkillForm extends React.component {
  // render () {
  //   return (
  //   <form onSubmit={this._handleSubmit.bind(this)}>
  //     <label>New Skill</label>
  //     <div>
  //      <input placerholder="Name:" ref={(input) => this._name = input}/>
  //      <textarea placeholder="Description:" ref={(textarea) => this._description = textarea}></textarea>
  //      <button>Add New Skill</button>
  //    </div>
  //    </form>
  //   );
  // }
  //
  // _handleSubmit(event) {
  //   event.preventDefault();
  //   let name = this._name;
  //   let description = this._description
  //
  //   this.props.addSkill(name.value, description.value);
  // }
  // }

export default App;
