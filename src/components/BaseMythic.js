import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


class BaseMythic extends Component {

	constructor(props) {
		super(props);
	}

	getProgress = (currentAmount, amountRequired) => {
		return ( ( currentAmount / amountRequired ) * 100 )
	}


	render() {
		const requiredAlexandrite = 30000
		const requiredIchor = 100000
		const requiredNyzul = 150000
		const requiredAssaults = 50

		return(
			<div>
				<h1>Base Mythic</h1>
				<p>{ requiredAlexandrite }</p>
				<Progress percent={this.getProgress(this.props.alexandrite, requiredAlexandrite)} status="success" />
				{this.props.alexandrite}
			</div>
		)
	}
}

BaseMythic.propTypes = {
	alexandrite: PropTypes.number
}

export default BaseMythic;