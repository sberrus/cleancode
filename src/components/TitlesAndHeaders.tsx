type Props = {
	children: string;
	id?: string;
};

const HeaderTitle = ({ children, id }: Props) => {
	return (
		<h1 id={id} className="display-1">
			{children}
		</h1>
	);
};
const SectionTitle = ({ children, id }: Props) => {
	return (
		<h2 id={id} className="fw-light">
			{children}
		</h2>
	);
};
const ArticleTitle = ({ children, id }: Props) => {
	return (
		<h4 id={id} className="fw-light border-bottom d-inline-block">
			{children}
		</h4>
	);
};

export { HeaderTitle, SectionTitle, ArticleTitle };
