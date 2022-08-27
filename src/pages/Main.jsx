import React, { useState } from "react";
// import Img0 from "./../assets/manhwa.jpg";
// import Img2 from "./../assets/street.jpg";

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
				return <img src='' />;

			case 1:
				return <iframe width="100%" height="570" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977"></iframe>;

			case 2:
				return <img src='' />;
			default:
				return "Unknown step";
		}
	}

	function setActiveMenuMobile(e,index) {
		e.preventDefault()
		const tmp = TabsContent[index];
		let tmpArray = TabsContent
		tmpArray.splice(index,1)
		tmpArray.unshift(tmp)
		console.log(tmpArray);
		setLeftTabs(tmpArray)
		setActiveTab(index)
		setOpenNavbar(false)
	}

	return (
		<div>
			<nav className="bg-[#95C47E] border-t-2 border-black">
				<div className=" grid grid-cols-12 h-12">
					<div className="col-span-3 flex items-center">
						<h1 className="ml-2">Logo</h1>
					</div>
					<div className="col-span-6 flex items-center justify-between ">
						<p className="hidden md:block text-md"> Demandez l'ouverture d'un nouveau point de livraison près de chez vous</p>
					</div>
					<div className="col-span-3 flex items-center">
						<button className="md:hidden ml-auto mr-3 p-1 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border" onClick={() => setOpenNavbar(!openNavbar)}>
							{openNavbar ? (
								<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							)}
						</button>
					</div>
				</div>
				<div className={`flex-1 justify-self-center pb-3 mt-4 md:pb-0 md:mt-0 ${openNavbar ? "block" : "hidden"}`}>
					<ul className="items-center justify-center pl-2 space-y-4 md:flex md:space-x-6 md:space-y-0">
						<li className="text-gray-600" onClick={(e) => setActiveMenuMobile(e,0)}>
							<a href="">Boutique à Saulieu</a>
						</li>
						<li className="text-gray-600" onClick={(e) => setActiveMenuMobile(e,1)}>
							<a href="">Livraison à domicile</a>
						</li>
						<li className="text-gray-600" onClick={(e) => setActiveMenuMobile(e,2)}>
							<a href="">Marché</a>
						</li>
					</ul>
				</div>
			</nav>
			<main className="h-full">
				<div className="grid grid-cols-12">
					<div className="col-span-12 md:col-span-8">
						<div className="hidden md:flex h-14">
							<button className={`btn--tab ${activeTab === 0 ? "bg-blue-400 text-white" : ""}`} onClick={() => setActiveTab(0)}>
								Boutique à Saulieu
							</button>
							<button className={`btn--tab relative ${activeTab === 1 ? "bg-blue-400 text-white" : ""}`} onClick={() => setActiveTab(1)}>
								Livraison à domicile
								<span className={`${activeTab !== 1 ? "hidden" : "absolute bg-yellow-400 px-2 py-1 rounded-full text-xs -top-2 -right-2"}  `}>2</span>
							</button>
							<button className={`btn--tab ${activeTab === 2 ? "bg-blue-400 text-white" : ""}`} onClick={() => setActiveTab(2)}>
								Marché
							</button>
						</div>
						<div className="col-span-12 md:col-span-4">{getActiveContent(activeTab)}</div>
					</div>
					<div className="col-span-12 md:hidden">
						{ leftTabs.map((item, i) => (
								<div key={i} className={`p-3 border-[1px] border-black cursor-pointer`}>
									<h3 className="font-semibold text-md py-2">{item.title}</h3>
									<p className="">{item.desc}</p>
									<p className="ml-auto w-fit mt-2 underline text-xs text-blue-700">En savoir plus</p>
								</div>
						))}
					</div>
					<div className="tabsContent_left">
						{ TabsContent.map((item, i) => (
							<div key={i} className={`p-3 ${activeTab === i ? "bg-blue-200 border-blue-500" : ""} border-[1px] border-black cursor-pointer`} onClick={() => setActiveTab(i)}>
								<h3 className="font-semibold text-md py-2">{item.title}</h3>
								<p className="">{item.desc}</p>
								<p className="ml-auto w-fit mt-2 underline text-xs text-blue-700">En savoir plus</p>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}

export default Main;
