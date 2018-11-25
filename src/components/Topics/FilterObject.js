import React from "react";
class FilterObject extends React.Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [{name: "Logan", age: 25, cool: true}, {name: "Jackson", age: 23, drool: true}],
            userInput: "",
            filteredArray: []
        }
        this.updateUserInput = this.updateUserInput.bind(this);
        this.filterArrayOfObjects = this.filterArrayOfObjects.bind(this);
    }

    updateUserInput(val) {
        this.setState({ userInput: val })
    }

    filterArrayOfObjects(prop) {
        var arr = this.state.unFilteredArray;
        var filteredArr = arr.filter((e) => e.hasOwnProperty(prop));
        this.setState({ 
            filteredArray: filteredArr,
            userInput: ""
        })
    }

    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Objects: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.updateUserInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterArrayOfObjects(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}
export default FilterObject;