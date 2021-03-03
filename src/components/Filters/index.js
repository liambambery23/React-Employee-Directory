import React from "react";


class Filters extends React.Component {

    sortByName = ()=>{
        let sortedEmp = this.state.results;
        console.log(sortedEmp);
        console.log(sortedEmp[0].name.last)
        if (this.state.alphabetical) {
          sortedEmp.sort(function(a,b) {
            var nameA=a.name.last.toLowerCase(), nameB=b.name.last.toLowerCase();
            if (nameA < nameB) //sort string ascending
              return -1;
            if (nameA > nameB)
              return 1;
            return 0;
          });
        } else {
          sortedEmp.sort(function(a,b) {
            var nameA=a.name.last.toLowerCase(), nameB=b.name.last.toLowerCase();
            if (nameA > nameB) //sort string ascending
              return -1;
            if (nameA < nameB)
              return 1;
            return 0;
          });
        }
    
    
        this.setState({
          results: sortedEmp,
          alphabetical: !this.state.alphabetical
        });
        
      };
}

export default Filters;