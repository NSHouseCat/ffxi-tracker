import React, { Component } from 'react'

class BaseMythic extends Component {

	render() {
		const requiredAlexandrite = 30000
		const requiredIchor = 100000
		const requiredNyzul = 150000
		const requiredAssaults = 50

		return(
			<div>
				<h1>Base Mythic</h1>
				<p>{ requiredAlexandrite }</p>
			</div>
		)
	}
}

export default BaseMythic;