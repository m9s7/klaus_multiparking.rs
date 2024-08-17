import styles from '../style';

const DownloadButton = ({ href, text }) => {
	return (
		<a className={`${styles.donwloadBtn}`} href={href} download>
			{text}
		</a>
	);
};

export default DownloadButton;
