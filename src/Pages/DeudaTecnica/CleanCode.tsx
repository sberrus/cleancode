import { Col, Container, Row } from "react-bootstrap";
import EsquemaDeudaTecnica from "./EsquemaDeudaTecnica";

// assets
import nombresVariablesBien from "../../assets/snippets/nombresVariablesBien.png";
import nombresVariablesMal from "../../assets/snippets/nombresVariablesMal.png";
import { ArticleTitle, HeaderTitle, SectionTitle } from "../../components/TitlesAndHeaders";
import { BadExampleSnippet, GoodExampleSnippet } from "../../components/SnippetsExamples";

const DeudaTecnica = () => {
	return (
		<Container>
			<HeaderTitle>Clean Code</HeaderTitle>

			<section id="indice">
				<hr />
				<SectionTitle>Indice</SectionTitle>
				<ol>
					<li className="fw-bold">
						<a href="#definicion">¿Qué es la deuda técnica?</a>
					</li>
					<li className="fw-bold">
						<a href="#pagarDeudaTecnica">¿Cómo se paga la deuda técnica?</a>
					</li>
					<li className="fw-bold">
						<a href="#refactorizacion">Refactorización</a>
						<ol>
							<li>
								<a href="#importanciaTests">Los tests y su importancia</a>
							</li>
						</ol>
					</li>
					<li className="fw-bold">
						<a href="#nombresVariables">Nombres de variables</a>{" "}
						<ol>
							<li>
								<a href="#buenaDefinicionNombreVariables">Buena definición de nombres de variables</a>
							</li>
						</ol>
					</li>
					<li className="fw-bold">Nombres para funciones</li>
					<li className="fw-bold">Ejercicios de refactorización</li>
					<li className="fw-bold">Principio DRY</li>
				</ol>
				<hr />
			</section>

			<section id="definicion">
				<SectionTitle>1. ¿Qué es la deuda técnica?</SectionTitle>
				<p>
					La deuda técnica es un tipo de deuda que pagamos como desarrolladores que a la larga nos cuesta tiempo y
					por ende dinero.
					<br />
					<b>Clean Code</b> nos ayuda a prevenir estas deudas técnicas y nos proveé una serie de herramientas y
					recomendaciones para que podamos mejorar nuestro código.
				</p>
				<EsquemaDeudaTecnica />
				<p>
					A menudo caer en la deuda técnica es normal y en ciertos casos inevitable debido a las complejidades que
					puede conllevar un proyecto. Pero sabiendo esto la pregunta es...
				</p>
			</section>

			<section id="pagarDeudaTecnica">
				<SectionTitle>2. ¿Cómo se paga la deuda técnica?</SectionTitle>
				<p>
					La deuda técnica de no corregirse correctamente suele tener un coste que sí o sí se tendrá que pagar en
					cualquier momento. Aunque principalmente se paga con tiempo lo cual es lo más valioso que tenemos como
					desarrolladores.
				</p>
			</section>

			<section id="refactorizacion">
				<SectionTitle>3. Refactorización</SectionTitle>
				<p className="fst-italic">
					Es simplemente un proceso que tiene como objetivo mejorar el código sin alterar su comportamiento para
					que sea más entendible y tolerante a cambios.
				</p>
				<ArticleTitle id="importanciaTests">3.1. Los Test y su importancia</ArticleTitle>
				<p>
					Una de las cosas que se puede hacer para realizar las refactorizaciones de manera correcta es creando
					pruebas automatizadas que nos permitan comprobar que la refactorización no este rompiendo nada.
				</p>
				<p>
					No hacer pruebas automatizadas no es un pecado pero si nos pueden ayudar a{" "}
					<span className="fst-italic">Dormir Mejor</span> ya que contamos con un mecanismo para saber en todo
					momento si nuestra app se va a romper o si sigue funcionando correctamente.
				</p>
				<p>
					La mala calidad en el software siempre la acaba pagando o asumiendo alguien. Ya sea el cliente, el
					proveedor con recursos o el propio desarrollador dedicando tiempo a refactorizar o malgastando tiempo
					programando sobre un sistema frágil.
				</p>
				<hr />
				<p className="fst-italic text-center">
					"Código Limpio (Clean Code) es aquel que se ha escrito con la intención de que otra persona (o tú mismo
					en el futuro) lo entienda." - <span className="fw-bold">Carlos Blé</span>
				</p>
				<hr />
				<hr />
				<p className="fst-italic text-center">
					"Nuestro código tiene que ser simple y directo, debería leerse con la misma facilidad que un texto bien
					escrito". - <span className="fw-bold">Grady Booch</span>
				</p>
				<hr />
				<hr />
				<p className="fst-italic text-center">
					"Programar es el arte de decirle a otro humano lo que quieres que la computadora haga". -{" "}
					<span className="fw-bold">Donald Knuth</span>
				</p>
				<hr />
			</section>

			<section id="nombresVariables">
				<SectionTitle>4. Nombre de las variables</SectionTitle>
				<article>
					<ArticleTitle id="buenaDefinicionNombreVariables">
						4.1 Buena definición de los nombres de variables
					</ArticleTitle>
					<p>
						Los nombres de las variables deben estar <b>escritas en ingles</b> y deben ser <b>pronunciables</b>.
					</p>
					<p>
						Dependiendo del lenguaje de programación hay que conocer las convenciones de dicho lenguaje. Por
						ejemplo: Java se escribe por convención <b>snake_case</b>. Javascript suele escribirse en{" "}
						<b>camelCase</b>.
					</p>
					<Row>
						<GoodExampleSnippet snippetRoute={nombresVariablesBien} />
						<BadExampleSnippet snippetRoute={nombresVariablesMal} />
					</Row>
				</article>
			</section>
		</Container>
	);
};

export default DeudaTecnica;
