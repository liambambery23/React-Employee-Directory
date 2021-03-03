import React, { Component } from "react";
import './App.css';
import API from "./utils/API";
import Container from "./components/Container";
import Wrapper from "./components/Wrapper";
import SearchForm from "./components/SearchForm"
import SearchResults from "./components/SearchResults";

class Search extends Component {
  state = {
    search: "",
    results:[]
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getUser()
      .then(res => {
       // console.log(res.data.results)
        this.setState({ results: res.data.results })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    //call the search fx searchNames()
    this.searchNames();
  };

  searchNames= () =>{
    console.log("search names works")
    //using the this.state.search go ahead and find all naes that contain the this.state.search 
    //includes
  }

  sortByName = ()=>{
    console.log("sort name works!");
  }

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getDogsOfBreed(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search for an Employee</h1>
            {this.state.error}
          <SearchForm
            // handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <SearchResults
          results={this.state.results}
          sortByName={this.sortByName}/>
          <Wrapper  />
        </Container>
      </div>
    );
  }
}

export default Search;
