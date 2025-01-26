import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style';

const ImageComponent = ({ imageUrl, heading, paragraphText, listItems }) => {
	return (
		<div className="rounded-lg border bg-gray-100 p-4">
			<div className="flex flex-col md:flex-row">
				<div className="mb-4 w-full md:mb-0 md:w-5/12">
					<picture>
						<source srcSet={imageUrl} media="(min-width:1024px)" />
						<source srcSet={imageUrl} media="(min-width:576px)" />
						<source srcSet={imageUrl} media="(min-width:0px)" />
						<img
							src={imageUrl}
							className="h-auto w-full rounded-lg object-cover shadow-md"
							loading="lazy"
						/>
					</picture>
				</div>
				<div className="w-full md:w-7/12 md:pl-6">
					<div className="">
						<h3 className="mb-2 text-xl font-semibold">
							{heading}
						</h3>
						<div className="">
							<p
								className={`${styles.paragraph} mb-2 text-gray-700`}
							>
								{paragraphText}
							</p>
							<ul
								className={`${styles.paragraphSmall} custom-list`}
							>
								{listItems.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

ImageComponent.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	altText: PropTypes.string,
	heading: PropTypes.string.isRequired,
	paragraphText: PropTypes.string.isRequired,
	listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ImageComponent.defaultProps = {
	altText: '',
};

export default ImageComponent;
