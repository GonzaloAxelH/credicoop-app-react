import './HeaderAdmin.scss'
import { useEffect,useState,useRef } from 'react'
const HeaderAdmin = ()=>{	
	return (
	<div class="header">
      <div class="header__search">
        <input type="text" placeholder="Search..." />
      </div>
		<div class="header__date">
			<span id="date">12/07/2021</span>
		</div>
		<div class="header__user">
			Hello, Admin Gonzalo<svg class="lnr lnr-cog icon"><use href="#lnr-cog"></use></svg>
		</div>
    </div>	
	);
}

export default HeaderAdmin;