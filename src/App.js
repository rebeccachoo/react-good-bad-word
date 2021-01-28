import React, { Component } from "react";
import Input from "./Input/Input";
import normal from "./normal.png";
import good from "./good.gif";
import bad from "./bad.png";
import "./App.css";

class App extends Component {
	state = {
		keyword: "",
		imageUrl: normal,
		goodWords: [
			"good",
			"thank",
			"appreciate",
			"beautiful",
			"pretty",
			"absolutely",
			"accepted",
			"accomplish",
			"calm",
			"delight",
			"dazzling",
			"easy",
			"genuine",
			"giving",
			"divine",
			"lucky",
		],
		badWords: ["suck", "bad", "not good"],
		message: "Hi there! Please type your word.",
		styleName: "minion",
	};
	searchWithKeyword = (event) => {
		let key = event.target.value;
		this.setState({ keyword: event.target.value });
		if (key.length == 0) {
			return;
		}

		const checkForGood = this.state.goodWords.filter((word) => word === key);
		const checkForBad = this.state.badWords.filter((word) => word === key);

		if (checkForGood.length > 0) {
			this.setState({
				imageUrl: good,
				message: "Thank for your good word!",
				styleName: "goodStyle",
			});
		} else if (checkForBad.length > 0) {
			this.setState({
				imageUrl: bad,
				message: "Oh, that's a bad word.",
				styleName: "badStyle",
			});
		} else {
			this.setState({
				imageUrl: normal,
				message: "Hi there! Please type your word.",
				styleName: "minion",
			});
		}
	};

	render() {
		const messageStyle = {
			backgroundColor: "black",
			color: "white",
			padding: "10px",
			marginTop: "50px",
			borderRadius: "10px",
		};
		return (
			<div className="App">
				Please enter your words so the minion can say if it is a good word!
				<Input
					changed={this.searchWithKeyword}
					currentName={this.state.keyword}
					value={this.state.keyword}
				/>
				<div style={messageStyle}>{this.state.message}</div>
				<img
					src={this.state.imageUrl}
					className={this.state.styleName}
					alt="Minion"
				/>
			</div>
		);
	}
}

export default App;
