import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectList(props) {
	const { projects } = props;
	return (
		<div className='list'>
			{projects.map((element, index) =>
				<div key={index} data-type={element.category} className="item-img">
					<img className='img' alt={element.category} src={element.img} />
				</div>
			)}
		</div>
	);
}

ProjectList.propTypes = {
	projects: PropTypes.array
}