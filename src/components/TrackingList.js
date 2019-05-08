import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TrackingListItem from './TrackingListItem'
import BaseMythic from './BaseMythic'

class TrackingList extends Component {

	constructor(props) {
    super(props);
    this.state = {listItems: [new TrackingListItem(), new TrackingListItem()]};
	}


	render() {
		return(
			<div>
				<h1>FFXI Tracker</h1>
				<ul>
					<li><BaseMythic /></li>
				</ul>
			</div>
		)
	}
}

TrackingList.propTypes = {
	listItems: PropTypes.arrayOf(TrackingListItem)
}

export default TrackingList;