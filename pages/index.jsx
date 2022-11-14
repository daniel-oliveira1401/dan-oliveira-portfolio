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
					<div className="projects__list const-width">
						<div className="project">
							<h3 className="project__title">Projetos Frontend Mentor</h3>
							<div className="project__img">
								<img
									src="/frontend-mentor-projects.jpg"
									alt="captura de tela do site frontend-mentor-projects"
								/>
							</div>
							<p className="project__description">
								Projetos que concluí com base em designs oferecidos pela
								plataforma Frontend Mentor.
							</p>
						</div>
						<div className="project">
							<h3 className="project__title">
								Projetos React <br /> e Nextjs
							</h3>
							<div className="project__img">
								<img
									src="/nextjs-react-showcase.jpg"
									alt="captura de tela do site nextjs-react-showcase"
								/>
							</div>
							<p className="project__description">
								Projetos que concluí com base em ideias e designs oferecidos
								pelo curso Learn React da plataforma Scrimba.
							</p>
						</div>
					</div>
				</section>
				<section className="about">
					<div className="section-header">
						<div className="text">Um pouco sobre mim</div>
					</div>
					<div className="text-container">
						<div className="topics const-width">
							<div className="topic">
								<h3 className="topic__title">Quem sou eu?</h3>
								<p className="topic__content">
									Oi, meu nome é Daniel, tenho 19 anos, moro no Brasil e amo
									Desenvolvimento Web :)
								</p>
							</div>
							<div className="topic">
								<h1 className="topic__title">Como comecei a programar?</h1>
								<p className="topic__content">
									Entrei em contato com desenvolvimento Web durante o curso de
									Técnico em Mecatrônica que concluí no SENAI. A partir desse
									momento, me apaixonei por programação e decidi seguir a
									carreira de Desenvolvedor Web.
								</p>
							</div>
							<div className="topic">
								<h1 className="topic__title">Por quê desenvolvimento Web?</h1>
								<p className="topic__content">
									Ter a possibilidade de desenvolver aplicações que podem ser
									acessadas de qualquer lugar do mundo com o único requisito
									sendo conexão com a internet é algo mágico e que me motiva a
									querer investir nesse tipo de tecnologia.
								</p>
							</div>
							<div className="topic">
								<h1 className="topic__title">Onde quero chegar?</h1>
								<p className="topic__content">
									No futuro, pretendo me tornar um Desenvolvedor Web Fullstack,
									tendo domínio tanto do Frontend como do Backend, para que
									assim eu seja capaz de construir aplicações ainda melhores!
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="technologies">
					<div className="section-header">
						<div className="text">Tecnologias</div>
					</div>
					<div className="description const-width">
						Para desenvolver sites ou aplicações Web é necessário usar
						tecnologias dessa área, como bibliotecas, frameworks, softwares e
						linguages de programação. Aqui algumas das tecnologias com as quais
						estou familiarizado.
					</div>
					<div className="tech-list const-width">
						<div className="tech">
							<div className="content">
								<div className="tech__icon-container">
									<div className="icon">
										<img src="/react.svg" alt="icone reactjs" />
									</div>
								</div>
								<h3 className="tech__title">React</h3>
								<p className="tech__description">
									Framework de desenvolvimento de SPA.
								</p>
							</div>
						</div>
						<div className="tech">
							<div className="content">
								<div className="tech__icon-container">
									<div className="icon">
										<img src="/nextjs.svg" alt="icone nextjs" />
									</div>
								</div>
								<h3 className="tech__title">NextJs</h3>
								<p className="tech__description">
									Framework de desenvolvimento Fullstack que utiliza React.
								</p>
							</div>
						</div>
						<div className="tech">
							<div className="content">
								<div className="tech__icon-container">
									<div className="icon">
										<img src="/javascript.svg" alt="icone javascript" />
									</div>
								</div>
								<h3 className="tech__title">JavaScript</h3>
								<p className="tech__description">
									Linguagem de Programação usada em aplicações Web.
								</p>
							</div>
						</div>
						<div className="tech">
							<div className="content">
								<div className="tech__icon-container">
									<div className="icon">
										<img src="/html.svg" alt="icone html" />
									</div>
								</div>
								<h3 className="tech__title">HTML5</h3>
								<p className="tech__description">
									Linguagem de marcação usada para criar a estrutura da
									interface de um site ou aplicação Web.
								</p>
							</div>
						</div>
						<div className="tech">
							<div className="content">
								<div className="tech__icon-container">
									<div className="icon">
										<img src="/css.svg" alt="icone css" />
									</div>
								</div>
								<h3 className="tech__title">CSS3</h3>
								<p className="tech__description">
									Linguagem usada para definir estilos para páginas da Web.
								</p>
							</div>
						</div>
						<div className="tech">
							<div className="content">
								<div className="tech__icon-container">
									<div className="icon">
										<img src="/github.svg" alt="icone github" />
									</div>
								</div>
								<h3 className="tech__title">Github</h3>
								<p className="tech__description">
									Plataforma de gerenciamento de repositórios Git para controle
									de versão de arquivos de projetos.
								</p>
							</div>
						</div>
						<div className="tech compact">
							<div className="content">
								<div className="tech__icon-container">
									<div className="icon">
										<img src="/git.svg" alt="icone git" />
									</div>
								</div>
								<h3 className="tech__title">Git</h3>
							</div>
						</div>
						<div className="tech compact">
							<div className="content">
								<div className="tech__icon-container">
									<div className="icon">
										<img src="/sass.svg" alt="icone sass" />
									</div>
								</div>
								<h3 className="tech__title">SASS</h3>
							</div>
						</div>
						<div className="tech compact">
							<div className="content">
								<div className="tech__icon-container">
									<div className="icon">
										<img src="/nodejs.svg" alt="icone nodejs" />
									</div>
								</div>
								<h3 className="tech__title">NodeJs</h3>
							</div>
						</div>
						<div className="tech compact">
							<div className="content">
								<div className="tech__icon-container">
									<div className="icon">
										<img src="/webpack.svg" alt="icone webpack" />
									</div>
								</div>
								<h3 className="tech__title">Webpack</h3>
							</div>
						</div>
						<div className="tech compact">
							<div className="content">
								<div className="tech__icon-container">
									<div className="icon">
										<img src="/jquery.svg" alt="icone jquery" />
									</div>
								</div>
								<h3 className="tech__title">jQuery</h3>
							</div>
						</div>
						<div className="tech compact">
							<div className="content">
								<div className="tech__icon-container">
									<div className="icon">
										<img src="/bootstrap.svg" alt="icone bootstrap" />
									</div>
								</div>
								<h3 className="tech__title">Bootstrap</h3>
							</div>
						</div>
					</div>
				</section>
				<section className="contact">
					<div className="section-header">
						<div className="text">Contato</div>
					</div>
					<div className="container const-width">
						<h2 className="title">Vamos conversar?</h2>
						<p className="description">
							Entre em contato comigo pelo Email, LinkedIn ou telefone pessoal
							(disponível no meu currículo).
						</p>
						<div className="contact-means">
							<div className="contact-mean">
								<img src="/email.svg" alt="icone de email" />
								<a href="">daniel.oliveira1401@outlook.com</a>
								<img src="/copy.svg" alt="icone de copiar" />
							</div>
							<div className="contact-mean">
								<img src="/linkedin.svg" alt="icone de email" />
								<a href="">
									https://www.linkedin.com/in/daniel-oliveira-807654234/
								</a>
								<img src="/copy.svg" alt="icone de copiar" />
							</div>
						</div>
						<div className="btn-download-cv">
							<button>Baixar Currículo</button>
						</div>
					</div>
				</section>
				<div style={{ height: "300vh" }}></div>
			</main>
		</div>
	);
}
