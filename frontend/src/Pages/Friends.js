import React, { Component } from 'react';
import SearchBox from 'react-search-box';
import TopBar from '../Components/TopBar';
import FriendProfile from '../Components/FriendProfile';
const backendURL = "http://localhost:8080/ethanhan_CSCI201_groupproject";

class Friends extends Component {
  state = {
    data: [
    ],
    currentFriend: null
  };

  componentDidMount() {
    var baseURL = `${backendURL}/userdata`;
    var url = new URL(baseURL);
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(d => {
            this.setState({data: d.data});
        })
  }

  render() {
    const { data, profile_info } = this.state;
    console.log(this.state.currentFriend);

    //TODO: pass in all the user information 
    return (
        <>
        <TopBar></TopBar>
        <div>
          <br></br><br></br>
          <h1>Friends</h1>
          <br></br>
          <SearchBox
            data={data}
            onSelect={
              (record) => {
                console.log(record)
                var baseURL = `${backendURL}/search`;
                var url = new URL(baseURL);
                var params = {
                  username: record.item.value
                };
                url.search = new URLSearchParams(params).toString();
                fetch(url, {method:"get"})
                  .then(response => response.json())
                  .then(d => this.setState({profile_info: d}))
              }
            }
            fuseConfigs={{
              threshold: 0.05,
            }}
            placeholder="Search for friends..."
            // inputBoxHeight="40px"
            // inputBoxWidth="10px"
          />
          {(this.state.profile_info != null)? <FriendProfile info={profile_info}/> : <></>}
        </div>
        </>
    );
  }
}

export default Friends;