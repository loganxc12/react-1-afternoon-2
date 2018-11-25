import React from "react";
class Palindrome extends React.Component {

    constructor() {
        super();
        this.state = {
            userInput: "",
            palindrome: ""
        }
        this.updateUserInput = this.updateUserInput.bind(this);
        this.solvePalindrome = this.solvePalindrome.bind(this);
    }

    updateUserInput(val) {
        this.setState( {userInput: val} )
    }

    solvePalindrome(str) {
        if (str.split("").reverse().join("") === str) {
            this.setState({ palindrome: "true" });
        } else {
            this.setState({ palindrome: "false" });
        }
   }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.updateUserInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.solvePalindrome(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
            </div>
        );
    }
}
export default Palindrome;