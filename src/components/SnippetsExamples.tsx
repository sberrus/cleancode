import { Col } from "react-bootstrap";

type Props = {
	snippetRoute: string;
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

export { GoodExampleSnippet, BadExampleSnippet };
