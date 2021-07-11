import React from 'react'

class SearchBar extends React.Component{

    // constructor(props){
    //     super(props)

    //     this.onFormSubmit = this.onFormSubmit.bind(this)
    //     this.onInputChange = this.onInputChange.bind(this)
    // }
    
    state = { term: ''};

    onInputChange(event){
        this.setState({ term: event.target.value.toUpperCase()});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return( 
        <div className="ui segment">
            <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
                <div className="field">
                    
                    <label>Image search: {this.state.term}</label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange.bind(this)} />
                </div>
            </form>
        </div>
        );
    }    
}

export default SearchBar;