const styles = {
	boxWidth: 'xl:max-w-[1280px] w-full',

	heading1: 'font-outfit text-3xl font-bold sm:text-4xl sm:leading-snug',

	heading2: 'font-outfit text-2xl font-bold',

	heading3: 'font-outfit text-xl font-bold',

	paragraph:
		'font-roboto font-normal text-black text-[18px] leading-[30.8px]',

	paragraphSmall:
		'font-roboto font-normal text-black text-[14px] leading-[30.8px]',

	donwloadBtn:
		'font-roboto font-normal text-white text-[18px] leading-[30.8px] bg-dwldBtnGray px-4 py-1 uppercase lg:w-1/3',

	flexCenter: 'flex justify-center items-center',
	flexStart: 'flex justify-center items-start',

	paddingX: 'sm:px-48 px-6 lg:px-72',
	paddingY: 'sm:py-16 py-6',
	padding: 'sm:px-16 px-6 sm:py-12 py-4',

	marginX: 'sm:mx-16 mx-6',
	marginY: 'sm:my-16 my-6',
};

export const layout = {
	section: `flex md:flex-row flex-col ${styles.paddingY}`,
	sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

	sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
	sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

	sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
