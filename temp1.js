const menuIcon = document.querySelector('.hamburger-menu')
            const navs = document.querySelector('.navs')
            const navbar = document.querySelector('.navbar')
            menuIcon.addEventListener('click', () => {
                navs.classList.toggle('change')
                navbar.classList.toggle('change')
            })