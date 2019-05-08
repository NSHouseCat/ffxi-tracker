import React, { Component } from 'react'

class BaseMythic extends Component {

	render() {
		const requiredAlexandrite = 30000
		return(
			<div>
				<h1>Base Mythic</h1>
				<p>{ requiredAlexandrite }</p>
			</div>
		)
	}
}

export default BaseMythic;