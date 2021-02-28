import React, { Component } from "react";


class TableSearch  extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  resetForm = () => {
    this.setState({
        ...this.state,
        value:''
        
    })
  }

  
  render(){
   const {  onSearch} = this.props;
    const baseUrl = `http://universities.hipolabs.com/search?name=middle&rows=1000`;
    return (
      <>
        <div className="input-group mb-3 mt-3">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary"
              onClick={() => onSearch(baseUrl)}
            >
              Search
            </button>
            <button
              className="btn btn-outline-secondary"
               onClick={this.resetForm}
            >
              Очистить
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </div>

        <p className="text-center">
          The search will show any matching values. If there is no match,
          then all the data.
        </p>
      
      </>
    );
  }

}

export default TableSearch ;