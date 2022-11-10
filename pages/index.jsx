import Head from "next/head";
import "../styles/style.scss";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Daniel Oliveira - Portfolio</title>
				<meta
					name="description"
					content="Portfolio do Daniel Oliveira. Venha me conhecer!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="content">
				<section className="home">
					<div className="text">
						<div className="container">
							<h2>Desenvolvedor</h2>
							<h1>Frontend</h1>
							<p>
								Desenvolvimento Web é <br /> minha <span>paixão</span>!
							</p>
						</div>
					</div>
					<div className="img">
						<img src="/daniel-oliveira.jpeg" alt="foto minha" />
					</div>
				</section>
				<nav className="navbar">
					<li className="nav-item">Home</li>
					<li className="nav-item">Projetos</li>
					<li className="nav-item">Sobre</li>
					<li className="nav-item">Tecnologias</li>
					<li className="nav-item">Contato</li>
				</nav>
				<section className="projects">
					<div className="section-header">
						<div className="text">Projetos</div>
					</div>
				</section>

				<div style={{ height: "300vh" }}></div>
			</main>
		</div>
	);
}
