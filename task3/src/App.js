import React, { Component } from 'react';
//import ReactPaginate from 'react-paginate';
import Loader from './Loader/Loader';
import Table from './Table/Table';
//import DetailRowView from './DetailRowView/DetailRowView';
//import ModeSelector from './ModeSelector/ModeSelector';
import TableSearch from './TableSearch/TableSearch';
//import _ from 'lodash';


class App extends Component {
  state ={
    isModeSelected: false,
    isLoading: false,
    data: [],
    search: '',

  }
  async fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
   
    this.setState({
      isLoading: false,
      data: data
    })

  }
 
  modeSelectHandler = url => {
    // console.log(url)
    this.setState({
      isModeSelected: true,
      isLoading: true,
    })
    this.fetchData(url)
  }



  searchHandler = search => {
    this.setState({search, currentPage: 0})
  }


  render() {
    
    if(!this.state.isModeSelected){
      return (
        <div className="container">
          <TableSearch 
          onSearch={this.modeSelectHandler}
          
          />
        </div>
      )
    }
   
 
    return (
      <div className="container">
      {
        this.state.isLoading 
        ? <Loader />
        : <React.Fragment>
            <TableSearch onSearch={this.searchHandler}/>
            <Table 
              data={this.state.data}
            />
          </React.Fragment>

      }

   

      </div>
    );
  }
}

export default App;
