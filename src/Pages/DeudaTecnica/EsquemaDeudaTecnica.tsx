import { Col, Row } from "react-bootstrap";

const EsquemaDeudaTecnica = () => {
	return (
		<div style={{ margin: "1em auto" }}>
			<small className="d-block text-secondary">Esquema de deuda técnica de Martin Fowler</small>
			<Row style={{ textAlign: "center" }}>
				<Col
					sm={6}
					style={{ minHeight: "25vh", padding: "2em" }}
					className="border border-3 border-dark d-flex align-items-center justify-content-center flex-column"
				>
					<h5>Imprudente - Deliberada</h5>
					<p>
						No hay tiempo, sólo copia y pega eso de nuevo Suele derivar a un proyecto de mala cálidad y con poca
						tolerancia al cambio.
					</p>
				</Col>
				<Col
					sm={6}
					style={{ minHeight: "25vh", padding: "2em" }}
					className="border border-3 border-dark d-flex align-items-center justify-content-center flex-column"
				>
					<h5>Prudente o Deliberada</h5>
					<p>
						Es la deuda de la que somos conscientes y sabemos que la estamos generando. Lo mejor es pagarla cuanto
						antes.{" "}
					</p>
				</Col>
				<Col
					sm={6}
					style={{ minHeight: "25vh", padding: "2em" }}
					className="border border-3 border-dark d-flex align-items-center justify-content-center flex-column"
				>
					<h5>Imprudente e Inadvertida</h5>
					<p>
						Suele ser la deuda ocacionada por la <b>falta de conocimiento</b> (suele pasar debido a código de
						programadores Junior o peor aún, un falso senior)
					</p>
				</Col>
				<Col
					sm={6}
					style={{ minHeight: "25vh", padding: "2em" }}
					className="border border-3 border-dark d-flex align-items-center justify-content-center flex-column"
				>
					<h5>Prudente e Inadvertida</h5>
					<p>
						Es la deuda que se genera por desconocimiento, principalmente es debido a que al ir avanzando con un
						proyecto observamos que ciertos aspectos del mismo pueden mejorarse. Pero esta pasa por inadvertida
						debido a que algunos proyectos crecen y no conocemos que complejidades abarca dicho proyecto.
					</p>
				</Col>
			</Row>
		</div>
	);
};

export default EsquemaDeudaTecnica;
