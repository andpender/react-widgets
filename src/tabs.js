import React, { Component } from 'react';


class Tabs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			info: this.props.tabValues,
			index:0,
		};
		this.changeHeader = this.changeHeader.bind(this);
	}

	changeHeader(index) {
		this.setState({
				index: index,
		})
	}


	render() {
		const { info, index } = this.state;
		return (
			<div>
				<Header
					info={info}
					changeHeader={this.changeHeader}
					currentIndex={index}
				/>
				<Content 
					info={info}
					index={index}
				/>
			</div>
		);
	}
}

const Header = ({ info, changeHeader, currentIndex }) => {
	const headers = info.map((item, index) => {
		const isActive = index === currentIndex ? 'active' : '';

		return (
			<li
				onClick={() => changeHeader(index)}
				className={isActive}
				key={index}>
				{item.Title}
			</li>
		);
	});

	return (
		<ul className='tab-headers'>
				{headers}
		</ul>
	);
}

const Content = ({ index, info }) => {
	return ( 
		<article>{info[index].Content}</article>
	);
}



export default Tabs;