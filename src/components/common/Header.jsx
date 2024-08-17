const Header = ({ title }) => {
	return (
		<header className='bg-customGray bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700'>
			<div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
				<h1 className='mb-2 text-3xl font-semibold text-gray-100'style={{ fontFamily: 'Times New Roman, serif' }}>Keshav Industries Pvt Ltd</h1>
				<h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
			</div>
		</header>
	);
};
export default Header;
