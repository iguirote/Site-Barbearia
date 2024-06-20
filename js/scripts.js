/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    const calendario = document.querySelector('.calendario');
    const horariosContainer = document.querySelector('.horarios');
    const hoje = new Date();
    const ultimoDiaDoMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0).getDate();
    const primeiroDiaDoMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1).getDay();

    // Preenche os espaços vazios do início do mês
    for (let i = 0; i < primeiroDiaDoMes; i++) {
        calendario.innerHTML += '<div class="dia desativado"></div>';
    }

    // Preenche os dias do mês
    for (let dia = 1; dia <= ultimoDiaDoMes; dia++) {
        if (dia < hoje.getDate()) {
            calendario.innerHTML += '<div class="dia desativado">' + dia + '</div>';
        } else {
            calendario.innerHTML += '<div class="dia">' + dia + '</div>';
        }
    }

    // Adiciona evento de clique para selecionar um dia
    document.querySelectorAll('.dia').forEach(function (el) {
        el.addEventListener('click', function () {
            document.querySelectorAll('.dia').forEach(function (el) {
                el.classList.remove('selecionado');
            });
            this.classList.add('selecionado');

            // Exibe os horários disponíveis
            const horarios = ['10:00', '14:00', '16:00', '18:00', '20:00'];
            horariosContainer.innerHTML = '';
            horarios.forEach(function (horario) {
                const horarioElement = document.createElement('div');
                horarioElement.classList.add('horario');
                horarioElement.textContent = horario;
                horariosContainer.appendChild(horarioElement);

                // Adiciona evento de clique para marcar o horário
                horarioElement.addEventListener('click', function () {
                    document.querySelectorAll('.horario').forEach(function (el) {
                        el.classList.remove('selecionado');
                    });
                    this.classList.add('selecionado');

                    // Marca também o dia selecionado
                    const diaSelecionado = document.querySelector('.dia.selecionado');
                    if (diaSelecionado) {
                        diaSelecionado.classList.add('selecionado');
                    }
                });
            });
        });
    });

    // Adiciona evento de clique no documento para limpar os horários
    document.addEventListener('click', function (event) {
        if (!calendario.contains(event.target)) {
            horariosContainer.innerHTML = '';
        }
    });

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });


});
