import Head from "next/head";
import "../styles/style.scss";
import HomeIcon from "../public/home.svg";
import ProjectsIcon from "../public/projects.svg";
import AboutIcon from "../public/about.svg";
import TechnologiesIcon from "../public/technologies.svg";
import ContactIcon from "../public/contact.svg";
import CopyIcon from "../public/copy.svg";
import EmailIcon from "../public/email.svg";
import LinkedinIcon from "../public/linkedin.svg";
import { useEffect } from "react";

export default function Home() {
	function copyToClipboard(text) {
		navigator.clipboard.writeText(text);
	}

	function activateMagnetButton() {
		let magnetArea = document.querySelector(".contact .magnet-area");
		let downloadBtn = document.querySelector(".contact .btn-download-cv");

		magnetArea.addEventListener("mouseover", (e) => {
			//firefox transitions dont work well with this button.
			if ($.browser.mozilla) {
				downloadBtn.classList.remove("transition");
			}
		});

		//my humble implementation
		/*
		magnetArea.addEventListener("mousemove", (e) => {
			let x = e.layerX - e.originalTarget.offsetLeft;
			let y = e.layerY - e.originalTarget.offsetTop;

			let relativeX = Math.floor(x - halfWidth);
			let relativeY = Math.floor(y - halfHeight);

			let xPercent = Math.abs(relativeX) / Math.abs(halfWidth);
			let yPercent = Math.abs(relativeY) / Math.abs(halfHeight);

			let xDirection = relativeX / Math.abs(relativeX);
			let yDirection = relativeY / Math.abs(relativeY);

			let maxX = 70;
			let maxY = 70;

			let finalX = maxX * xPercent * xDirection;
			let finalY = maxY * yPercent * yDirection;

			downloadBtn.style.transform = `translate(${finalX}px, ${finalY}px)`;
		});
		*/

		//some youtube guy's implementation that's way faster than mine 💁‍♂️
		magnetArea.addEventListener("mousemove", (e) => {
			const pos = magnetArea.getBoundingClientRect();
			const x = e.pageX - pos.left - pos.width / 2;
			const y = e.pageY - pos.top - pos.height / 2;
			downloadBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.7}px)`;
		});

		magnetArea.addEventListener("mouseout", (e) => {
			downloadBtn.classList.add("transition");
			downloadBtn.style.transform = "translate(0px, 0px)";
		});
	}

	function registerIntersectionObservers() {
		let projects = document.querySelectorAll(".project");

		let observer = new IntersectionObserver(fadeInProjects, {
			root: document.querySelector("body"),
			threshold: 0.3
		});

		projects.forEach((project) => {
			observer.observe(project);
		});

		function fadeInProjects(entries, observer) {
			entries.forEach(({ target, isIntersecting }) => {
				if (isIntersecting) {
					target.classList.add("fade-in");
					observer.unobserve(target);
				} else {
					// target.classList.remove("fade-in");
				}
			});
		}
	}

	useEffect(() => {
		let aboutBg = document.querySelector(".about .bg-container");
		let bgEffect = document.querySelector(".about .bg-effect");
		aboutBg.addEventListener("mousemove", (e) => {
			bgEffect.style.top = e.layerY - 75 + "px";
			bgEffect.style.left = e.layerX - 75 + "px";
		});

		let navBg = document.querySelector(".navbar .bg-effect");
		// let navbarItems = document.querySelector(".navbar .items");
		let content = document.querySelector("main.content");
		let totalScroll = 0,
			currentPercent = 0;
		content.addEventListener("scroll", (e) => {
			totalScroll =
				content.scrollHeight - content.getBoundingClientRect().height;
			currentPercent = (content.scrollTop / totalScroll) * 100;
			navBg.style.width = currentPercent + "%";
		});

		activateMagnetButton();
		registerIntersectionObservers();
	}, []);

	return (
		<div>
			<Head>
				{/* <!-- Primary Meta Tags --> */}
				<title>Daniel Oliveira - Portfolio</title>
				<meta name="title" content="Daniel Oliveira - Portfolio" />
				<meta
					name="description"
					content="Olá, seja bem vindo ao meu portfolio ✨"
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://dan-oliveira-portfolio.vercel.app/"
				/>
				<meta property="og:title" content="Daniel Oliveira - Portfolio" />
				<meta
					property="og:description"
					content="Olá, seja bem vindo ao meu portfolio ✨"
				/>
				<meta property="og:image" content="/og_img.png" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://dan-oliveira-portfolio.vercel.app/"
				/>
				<meta property="twitter:title" content="Daniel Oliveira - Portfolio" />
				<meta
					property="twitter:description"
					content="Olá, seja bem vindo ao meu portfolio ✨"
				/>
				<meta property="twitter:image" content="/og_img.png" />

				<link rel="icon" href="/favicon.png" />
			</Head>
			<main className="content">
				<section id="home" className="home const-width">
					<div className="text">
						<div className="container">
							<h2>Desenvolvedor</h2>
							<h1>Frontend</h1>
							<p>
								Desenvolvimento Web é <br /> minha <span>paixão</span>!
							</p>
						</div>
					</div>
					<div className="img"></div>
				</section>
				<nav className="navbar">
					<div className="items">
						<div className="bg-effect"></div>
						<a href="#home" className="nav-item">
							<span className="icon">
								<HomeIcon></HomeIcon>
							</span>
							<span className="text">Home</span>
						</a>
						<a href="#projects" className="nav-item">
							<span className="icon">
								<ProjectsIcon></ProjectsIcon>
							</span>
							<span className="text">Projetos</span>
						</a>
						<a href="#about" className="nav-item">
							<span className="icon">
								<AboutIcon></AboutIcon>
							</span>
							<span className="text">Sobre</span>
						</a>
						<a href="#technologies" className="nav-item">
							<span className="icon">
								<TechnologiesIcon></TechnologiesIcon>
							</span>
							<span className="text">Tecnologias</span>
						</a>
						<a href="#contact" className="nav-item">
							<span className="icon">
								<ContactIcon></ContactIcon>
							</span>
							<span className="text">Contato</span>
						</a>
					</div>
				</nav>
				<section className="projects">
					<div id="projects" className="section-header">
						<div className="text">Projetos</div>
					</div>
					<div className="projects__list const-width">
						<a
							target={"_blank"}
							href="https://frontendmentor-projects-showcase.vercel.app/home"
							className="project"
						>
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
						</a>
						<a
							target={"_blank"}
							href="https://nextjs-react-showcase.vercel.app/"
							className="project"
						>
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
						</a>
					</div>
				</section>
				<section className="about">
					<div id="about" className="section-header">
						<div className="text">Um pouco sobre mim</div>
					</div>
					<div className="bg-container">
						<div className="bg-effect"></div>
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
										No futuro, pretendo me tornar um Desenvolvedor Web
										Fullstack, tendo domínio tanto do Frontend como do Backend,
										para que assim eu seja capaz de construir aplicações ainda
										melhores!
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="technologies">
					<div id="technologies" className="section-header">
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
					<div id="contact" className="section-header">
						<div className="text">Contato</div>
					</div>
					<div className="container const-width">
						<h2 className="title">Vamos conversar?</h2>
						<p className="description">
							Entre em contato comigo pelo Email, LinkedIn ou telefone pessoal
							(disponível no meu currículo).
						</p>
						<div className="contact-means">
							<div data-email className="contact-mean">
								<a href="mailto:daniel.oliveira1401@outlook.com">
									<EmailIcon
										className="icon"
										src="/email.svg"
										alt="icone de email"
									/>
								</a>
								<a
									target={"_blank"}
									className="text-link"
									href="mailto:daniel.oliveira1401@outlook.com"
								>
									daniel.oliveira1401@outlook.com
								</a>
								<CopyIcon
									className="icon"
									onClick={(e) => {
										copyToClipboard("daniel.oliveira1401@outlook.com");
										e.target.classList.add("copied");
										document
											.querySelector("[data-email] .feedback")
											.classList.add("show");
										//hide the message after 2 seconds
										setTimeout(() => {
											document
												.querySelector("[data-email] .feedback")
												.classList.remove("show");
										}, 2000);
									}}
									src="/copy.svg"
									alt="icone de copiar"
								/>
								<div className="feedback">Copiado!</div>
							</div>
							<div data-linkedin className="contact-mean">
								<a href="https://www.linkedin.com/in/daniel-oliveira-807654234/">
									<LinkedinIcon
										className="icon"
										src="/linkedin.svg"
										alt="icone de email"
									/>
								</a>
								<a
									target={"_blank"}
									className="text-link"
									href="https://www.linkedin.com/in/daniel-oliveira-807654234/"
								>
									https://www.linkedin.com/in/daniel-oliveira-807654234/
								</a>
								<CopyIcon
									className="icon"
									onClick={(e) => {
										copyToClipboard(
											"https://www.linkedin.com/in/daniel-oliveira-807654234/"
										);
										e.target.classList.add("copied");
										document
											.querySelector("[data-linkedin] .feedback")
											.classList.add("show");
										//hide the message after 2 seconds
										setTimeout(() => {
											document
												.querySelector("[data-linkedin] .feedback")
												.classList.remove("show");
										}, 2000);
									}}
									src="/copy.svg"
									alt="icone de copiar"
								/>
								<div className="feedback">Copiado!</div>
							</div>
						</div>
						<div className="magnet-area-wrapper">
							<a
								download={"curriculo-daniel-oliveira"}
								href="/curriculo_daniel_oliveira.pdf"
								className="magnet-area"
							>
								<div className="btn-download-cv transition">
									<button>Baixar Currículo</button>
								</div>
							</a>
						</div>
					</div>
				</section>
				<footer>
					<div className="col">
						<a
							href="https://github.com/daniel-oliveira1401"
							target={"_blank"}
							className="link"
						>
							Github
						</a>
						<a
							href="https://daniel-oliveira1401.github.io/"
							target={"_blank"}
							className="link"
						>
							Portfólio Antigo
						</a>
					</div>
					<div className="col">
						<a
							target={"_blank"}
							href="https://www.linkedin.com/in/daniel-oliveira-807654234/"
							className="link"
						>
							LinkedIn
						</a>
						<a
							href="https://nextjs-react-showcase.vercel.app/"
							target={"_blank"}
							className="link"
						>
							React Projects Showcase
						</a>
					</div>
				</footer>
			</main>
		</div>
	);
}
