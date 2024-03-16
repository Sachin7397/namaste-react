import React from "react"

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default"

      }
    }
  }

  async componentDidMount() {

    const data = await fetch("https://api.github.com/users/Sachin7397");
    const json = await data.json();
    this.setState({
      userInfo: json
    })
    console.log('json', json)
  }

  render() {
    const { name, location } = this.state.userInfo
 
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: sachinskamble0910@gmail.com</h4>
      </div>
    )
  }
}

export default UserClass