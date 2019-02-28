import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div> loading </div>;
    }
    else {
      return (
        <div className="App">
          {items.map(item => (
            <ul>
              <li key={item.id}>
                Nome: {item.name} | Email: {item.email}
              </li>
            </ul>
          ))};
                </div>
      );
    }

  }

}

export default App;
