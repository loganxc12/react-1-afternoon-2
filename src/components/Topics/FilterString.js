import React from "react";
class FilterString extends React.Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: ["meow cow", "woof oinkers", "oink quackcow", "quack", "growl meow"],
            userInput: "",
            filteredArray: []
        }
        this.updateUserInput = this.updateUserInput.bind(this);
    }

    updateUserInput(val) {
        this.setState({ userInput: val })
    }

    filterArrayOfStrings(str) {
        var arr = this.state.unFilteredArray;
        var filteredArr = arr.filter((e) => e.includes(str));
        this.setState({
            filteredArray: filteredArr
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Strings: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.updateUserInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterArrayOfStrings(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}
export default FilterString;