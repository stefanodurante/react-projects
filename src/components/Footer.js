import React from 'react';


// utilizando el function expression puedo eliminar el return si no hay mas código
// const Footer = () => {
// 	return (
// 		<footer >
// 			<p>Todos lo derechos reservados &copy;</p>
// 		</footer>	
// 	);	
// }
const Footer = ({fecha}) => (
	<footer >
		<p>Todos lo derechos reservados &copy; {fecha}</p>
	</footer>
)

export default Footer;