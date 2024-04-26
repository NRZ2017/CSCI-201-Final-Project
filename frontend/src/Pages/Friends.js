import React, { Component } from 'react';
import SearchBox from 'react-search-box';
import TopBar from '../Components/TopBar';

class Friends extends Component {
  state = {
    data: [
    ]
  };

  componentDidMount() {
    var baseURL = window.location.origin + "/friends";
    var url = new URL(baseURL);
    var params = {
       // name: use localstorage
    };
    url.search = new URLSearchParams(params).toString();
    // console.log(url);
    fetch(URL)
        .then(response => response.json())
        .then(d => {
            this.setState({data: d});
        })
  }

  render() {
    const { data } = this.state;

    return (
        <>
        <TopBar></TopBar>
        <div>
        <h1>Friends</h1>
        <SearchBox
          data={data}
          onSelect={(record) => console.log(record)}
          fuseConfigs={{
            threshold: 0.05,
          }}
          placeholder="Search for friends..."
          inputBoxHeight="40px"
          inputBoxWidth="300px"
        />
      </div>
        </>
      
    );
  }
}

export default Friends;