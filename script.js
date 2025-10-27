// Efecto de scroll suave
document.querySelectorAll('.sidebar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
              target.scrollIntoView({ behavior: 'smooth' });

                  // Cierra el menú en móvil
                      document.getElementById('sidebar').classList.remove('active');
                        });
                        });

                        // Menú desplegable móvil
                        const menuBtn = document.getElementById('menu-btn');
                        const sidebar = document.getElementById('sidebar');

                        menuBtn.addEventListener('click', () => {
                          sidebar.classList.toggle('active');
                          });