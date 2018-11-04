import React, { Component } from 'react';

class Autocomplete extends Component {
	constructor(props) {
		super(props);

		this.state = {
			names: this.props.autocompleteNames,
			formValue: '',
		}

		this.onChange = this.onChange.bind(this);
		this.filterNames = this.filterNames.bind(this);
		this.nameSelect = this.nameSelect.bind(this);
	}

	filterNames(formValue) {
		const nameList = this.props.autocompleteNames;
		const updatedNames = nameList.filter(person => person.toLowerCase().substr(0, formValue.length) === formValue.toLowerCase());
		this.setState({  
			names: updatedNames,
		})
	}

	onChange(event) {
		this.filterNames(event.target.value);
		this.setState({
			formValue: event.target.value,
		})
	}

	nameSelect(event) {
		this.filterNames(event.target.innerHTML);		
		this.setState({
			formValue: event.target.innerHTML,
		})				
	}

	render () {
		const { formValue, names } = this.state
		return (
			<div className="page">
				<Form 
					value={formValue}
					onChange={this.onChange}
				/>
				<Names 
					names={names}
					onClick={this.nameSelect}
				/>
			</div>
		);
	}
}

const Form = ({ onChange, value }) => 
	<form>
		<input
			type="text" 
			value={value} 
			onChange={onChange}
		/>
	</form>


const Names = ({ names, onClick }) => 
	<ul>
		{names.map((item, index) => 
			<li 
				key={index}
				onClick={onClick}
			>{item}</li>
		)}
	</ul>


export default Autocomplete;