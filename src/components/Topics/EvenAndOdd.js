import React from "react"; //Import React object from node modules
class EvenAndOdd extends React.Component { //Create sub class that extends the base class React.Component (baseline component template).
    constructor() { //Initialize the component object's properties
        super(); //Call parent class' constructor (React.Component) - "First set up class we're extending, then we'll set up this subclass."
        this.state = { //Heart of React component. Object that determines how our component renders and behaves.
                       //Where we store data that we expect to change.
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
        this.updateUserInput = this.updateUserInput.bind(this);
        this.solveEvenAndOdd = this.solveEvenAndOdd.bind(this);
    }

    updateUserInput(e) {
        ////Only legitimate way to update state after the initial state setup.
        this.setState({ userInput: e.target.value })
    }

    solveEvenAndOdd(str) {
        var strArr = str.split(",");
        var evens = [];
        var odds = [];
        for (var i = 0; i < strArr.length; i++) {
            if (strArr[i] % 2 === 0) {
                evens.push(Number(strArr[i]));
            } else {
                odds.push(Number(strArr[i]));
            }
        }
        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }

    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={this.updateUserInput}></input>
                <button className="confirmationButton" onClick={() => this.solveEvenAndOdd(this.state.userInput)}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        );
    }
}
export default EvenAndOdd;