import React from 'react'

import '../../styles/Footer.css'


function Footer() {
  return (
    <>
<footer class="forum-footer">
    <div class="footer-content">
        <p>© 2024 Nexus ArSa. Tous droits réservés.</p>
        <ul class="footer-links">
            <li><a href="#privacy">Politique de confidentialité</a></li>
            <li><a href="#terms">Conditions d'utilisation</a></li>
            <li><a href="#contact">Contactez-nous</a></li>
        </ul>
        <ul class="social-links">
            <li><a href="#facebook" aria-label="Facebook"><img src="facebook-icon.png" alt="Facebook"/></a></li>
            <li><a href="#twitter" aria-label="Twitter"><img src="twitter-icon.png" alt="Twitter"/></a></li>
            <li><a href="#instagram" aria-label="Instagram"><img src="instagram-icon.png" alt="Instagram"/></a></li>
        </ul>
    </div>
</footer>
    </>
  )
}

export default Footer