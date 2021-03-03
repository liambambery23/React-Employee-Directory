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
    results:[],
    alphabetical: true
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
    this.searchNames(this.state.results, this.state.search);
  };

  searchNames = (names, search) =>{
    
    
    const refinedResults = names.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(search.toLowerCase()) !== -1);

    console.log(refinedResults);
    this.setState( {results: refinedResults} )

  
    
    //using the this.state.search go ahead and find all naes that contain the this.state.search 
    //includes
  }

  sortByName = ()=>{
    let sortedEmp = this.state.results;
    console.log(sortedEmp);
    console.log(sortedEmp[0].name.last)
    sortedEmp.sort(function(a,b) {
      var nameA=a.name.last.toLowerCase(), nameB=b.name.last.toLowerCase();
      if (nameA < nameB) //sort string ascending
        return -1;
      if (nameA > nameB)
        return 1;
      return 0;
    });

    this.setState( {results: sortedEmp} )
    
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
