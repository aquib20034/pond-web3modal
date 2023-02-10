import React, {useState} from "react";
import {Navbar, Container, NavLink} from 'react-bootstrap';
import './Header.css';
import logo from '../../assets/logo.png'
import ApplyForBetaIdle from '../../assets/aapplybetaidle.png'
import ApplyForBetaPress from '../../assets/applybetapress.png'
import Community from '../../assets/community.png'
import FAQ from '../../assets/FAQ.png'
import LoreWhitePaper from '../../assets/lorewhitepaper.png'
import ConnectWalletImg from '../../assets/wallet connect.png'
import { Player } from '@lottiefiles/react-lottie-player';
import headerLeftRock from '../../assets/headerLeftRock.json';
import headerRightRock from '../../assets/headerRightRock.json';



function Header(){
	const [NavLinkPress, setNavLinkPress] = useState(false);
	return(
		<div className="headerWrap">
			<Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" className="customHeader">
				<Container>
					<Navbar.Brand href="#home">
						<img src={logo} alt="Realm of Pondria"/>
					</Navbar.Brand>
					<div className="headerLeftRock">
						<Player src={headerLeftRock} loop autoplay/>
					</div>	
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className="navbar-right">
						<NavLink href="#2" 
							className={NavLinkPress ? 'navLinks navItems menuItemHovered menuItemActive' : 'navLinks navItems'}
							onMouseEnter={() => setNavLinkPress(true)}
							onMouseLeave={() => setNavLinkPress(false)}
						>
							<img src={ApplyForBetaPress} className="itemHoverImage" alt="ApplyForBetaPress"/>
							<img src={ApplyForBetaIdle} className="itemNormalImage" alt="ApplyForBetaIdle"/>
						</NavLink>
						<NavLink href="#2" className="navLinks navItems">
							<img src={Community} className="itemNormalImage" alt="Community"/>
						</NavLink>
						<NavLink href="#2" className="navLinks navItems">
							<img src={LoreWhitePaper} className="itemNormalImage" alt="LoreWhitePaper"/>
						</NavLink>
						<NavLink href="#2" className="navLinks navItems">
							<img src={ConnectWalletImg} className="itemNormalImage" alt="ConnectWalletImg"/>
						</NavLink>
						<NavLink href="#2" className="navLinks navItems">
							<img src={FAQ} className="itemNormalImage" alt="FAQ"/>
						</NavLink>
					</Navbar.Collapse>
					<div className="headerRightRock">
						<Player src={headerRightRock} loop autoplay/>
					</div>					
				</Container>
			</Navbar>
		</div>
	);
}
export default Header;