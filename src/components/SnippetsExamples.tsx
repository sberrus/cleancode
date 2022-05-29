import { Col, Row } from "react-bootstrap";

type Props = {
	snippetRoute: string;
};

type SnippetContainerProps = {
	children: JSX.Element | JSX.Element[];
};

const GoodExampleSnippet = ({ snippetRoute }: Props) => {
	return (
		<>
			<Col xs={12} md={6}>
				<h5 className="text-success">Mejor</h5>
				<img
					src={snippetRoute}
					className="border border-3 border-success"
					alt="buen ejemplo de nombres de variables"
					width={"100%"}
				/>
			</Col>
		</>
	);
};
const BadExampleSnippet = ({ snippetRoute }: Props) => {
	return (
		<>
			<Col xs={12} md={6}>
				<h5 className="text-danger">Mal</h5>
				<img
					src={snippetRoute}
					className="border border-3 border-danger"
					alt="mal ejemplo de nombres de variables"
					width={"100%"}
				/>
			</Col>
		</>
	);
};

const SnippetContainer = ({ children }: SnippetContainerProps) => {
	return (
		<Row style={{ background: "#1a1924", padding: "1em 3em", marginBottom: "2em" }}>
			{children}
		</Row>
	);
};

export { GoodExampleSnippet, BadExampleSnippet, SnippetContainer };
