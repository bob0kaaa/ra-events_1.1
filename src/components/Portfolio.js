import React, { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import ImagesList from './ImagesList'

class Portfolio extends Component {
	// class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.filters = ["All", "Websites", "Flayers", "Business Cards"];
		this.listImg = ImagesList;
		this.state = { selected: 'All' };
	}

	onClickButton(evt) {
		this.setState({ selected: evt });
	}

	onListFilter() {
		console.log('spisok', this.state, '\n', this.state.selected, '\n', this.listImg);
		return this.state.selected === 'All'
			? this.listImg
			: this.listImg.filter(item => item.category === this.state.selected);
	}

	render() {
		return (
			<>
				<div className='main-content'>
					<Toolbar
						filters={this.filters}
						selected={this.state.selected}
						onSelectFilter={evt => this.onClickButton(evt)}
					/>
					<ProjectList projects={this.onListFilter()} />
				</div>
			</>
		);
	}
}

export default Portfolio;