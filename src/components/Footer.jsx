import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer>
           <p>Aplicación web realizada por Nicolás Correa</p>

           <div className="footer__rrss">
                <a className="footer__link" href="https://github.com/nicostray/" target="_blank" rel="noreferrer"><i className="fas fa-file-alt"></i> <p>Portfolio</p> </a>
                <a className="footer__link" href="https://github.com/nicostray/motocicletas-app" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i> <p>Source</p></a>
           </div>
        </footer>
    )
}

export default Footer
