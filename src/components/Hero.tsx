import React from 'react';

const Hero: React.FC = () => {
	return (
		<section className="bg-neutral-50 text-black py-16">
			<div className="container mx-auto text-center">
				<h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
				<p className="text-lg">
					Discover amazing articles written by passionate writers.
				</p>
			</div>
		</section>
	);
};

export default Hero;
