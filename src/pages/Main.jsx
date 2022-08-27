import React, { useState } from "react";
import Img0 from "./../assets/manhwa.jpg";
import Img2 from "./../assets/street.jpg";
import './Main.css'

const Main = () => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  ";
	const [activeTab, setActiveTab] = useState(0);
	const [openNavbar, setOpenNavbar] = useState(false);
	const TabsContent = [
		{ title: "Boutique à Saulieu", desc: lorem },
		{ title: "Livraison gratuite chez vous dès 20 € !", desc: lorem },
		{ title: "Marchés d'Autun et d'Avalon", desc: lorem },
	]
	const [leftTabs, setLeftTabs] = useState(TabsContent);

	function getActiveContent(tabIndex) {
		switch (tabIndex) {
			case 0:
				return <img src={Img0} />;

			case 1:
				return <iframe width="100%" height="570" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977"></iframe>;

			case 2:
				return <img src={Img2} />;
			default:
				return "Unknown step";
		}
	}

	function setActiveMenuMobile(e,index) {
		e.preventDefault() // pour éviter que la page se recharge
		const tmp = TabsContent[index];
		let tmpArray = TabsContent //copie du tableau d'objets initialisé avant useState

		tmpArray.splice(index,1)
		tmpArray.unshift(tmp)
		// pour mettre l'élément cliqué au début

		setActiveTab(index) // permet de changer le contenu tab courant
		setLeftTabs(tmpArray)
		setOpenNavbar(false)
	}

	return (
		<div>
			<nav className="nav">
				<div className="nav-container">
					<div className="logo-container">
						<h1 className="" style={{ 'margin-left': '8px', 'font-size': '16px', 'font-weight': '600'}}>Logo</h1>
					</div>
					<div className="nav_title-wrapper">
						<p className="nav-title "> Demandez l'ouverture d'un nouveau point de livraison près de chez vous</p>
					</div>
					<div className="menu">
						<button className="menu-burger" onClick={() => setOpenNavbar(!openNavbar)}>
							{openNavbar ? (
								<svg style={{ 'width': '24px', 'height': '24px' }} viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							) : (
								<svg style={{ 'width': '24px', 'height': '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							)}
						</button>
					</div>
				</div>
				<div className={`menu-links_mobile ${openNavbar ? "block" : "none"}`}>
					<ul>
						<li onClick={(e) => setActiveMenuMobile(e,0)}>
							<a href="">Boutique à Saulieu</a>
						</li>
						<li  onClick={(e) => setActiveMenuMobile(e,1)}>
							<a href="">Livraison à domicile</a>
						</li>
						<li onClick={(e) => setActiveMenuMobile(e,2)}>
							<a href="">Marché</a>
						</li>
					</ul>
				</div>
			</nav>
			<main style={{ width: '100%'}}>
				<div className="grid-container">
					<div className="tabs-container">
						<div className="tabs-inner">
							<button className={`btn--tab ${activeTab === 0 ? "tab-active" : ""}`} onClick={() => setActiveTab(0)}>
								Boutique à Saulieu
							</button>
							<button className={`btn--tab ${activeTab === 1 ? "tab-active" : ""}`} onClick={() => setActiveTab(1)}>
								Livraison à domicile
							</button>
							<button className={`btn--tab ${activeTab === 2 ? "tab-active" : ""}`} onClick={() => setActiveTab(2)}>
								Marché
							</button>
						</div>
						<div className="tab-content">{getActiveContent(activeTab)}</div>
					</div>
					<div className="tabs-left_mobile">
						{ leftTabs.map((item, i) => (
								<div key={i} >
									<h3>{item.title}</h3>
									<p>{item.desc}</p>
									<p className="extra-link">En savoir plus</p>
								</div>
						))}
					</div>
					<div className="tabs-left_desktop">
						{ TabsContent.map((item, i) => (
							<div key={i} className={`${activeTab === i ? "tab-left_active" : ""} p-3 border-[1px] border-black cursor-pointer`} onClick={() => setActiveTab(i)}>
								<h3>{item.title}</h3>
								<p >{item.desc}</p>
								<p className="extra-link">En savoir plus</p>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}

export default Main;