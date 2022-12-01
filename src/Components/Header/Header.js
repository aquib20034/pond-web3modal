import React, {useState, useEffect} from "react";
import {Navbar, Container, NavLink} from 'react-bootstrap';
import './Header.css';
import logo from '../../assets/logo.png'
import ApplyForBetaIdle from '../../assets/aapplybetaidle.png'
import ApplyForBetaPress from '../../assets/applybetapress.png'
import Community from '../../assets/community.png'
import FAQ from '../../assets/FAQ.png'
import LoreWhitePaper from '../../assets/lorewhitepaper.png'
import ConnectWalletImg from '../../assets/wallet connect.png'






function Header(){

	const [NavLinkPress, setNavLinkPress] = useState(false);
	// const toggleHover = () => setNavLinkPress(!NavLinkPress);


	return(
		<div className="headerWrap">
			<Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" className="customHeader">
				<Container>
					<Navbar.Brand href="#home">
						<img src={logo} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className="navbar-right">
						<NavLink href="#2" 
							className={NavLinkPress ? 'navLinks navItems menuItemHovered menuItemActive' : 'navLinks navItems'}
							onMouseEnter={() => setNavLinkPress(true)}
							onMouseLeave={() => setNavLinkPress(false)}
						>
							<img src={ApplyForBetaPress} className="itemHoverImage"/>
							<img src={ApplyForBetaIdle} className="itemNormalImage"/>
						</NavLink>
						{/* <NavLink className="navLinks navItems">
							FAQ
						</NavLink> */}
						<NavLink href="#2" className="navLinks navItems">
							<img src={Community} className="itemNormalImage"/>
						</NavLink>
						<NavLink href="#2" className="navLinks navItems">
							<img src={LoreWhitePaper} className="itemNormalImage"/>
						</NavLink>
						<NavLink href="#2" className="navLinks navItems">
							<img src={ConnectWalletImg} className="itemNormalImage"/>
						</NavLink>
						<NavLink href="#2" className="navLinks navItems">
							<img src={FAQ} className="itemNormalImage"/>
						</NavLink>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
export default Header;