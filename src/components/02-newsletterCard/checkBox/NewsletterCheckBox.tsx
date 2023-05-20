interface INewsletterCheckBox {
	checked: boolean;
	handleCheckBoxChange: () => void;
}

const NewsletterCheckBox = ({ checked, handleCheckBoxChange }: INewsletterCheckBox) => {
	return (
		<div className="newsletter-card-checkbox-container">
			<input type="checkbox" checked={checked} onChange={handleCheckBoxChange} />
			<p>
				By checking this box, you agree to receive our weekly newsletter containing coding
				challenges, tips, and other related content. You may unsubscribe from the newsletter
				anytime.
			</p>
		</div>
	);
};

export default NewsletterCheckBox;
