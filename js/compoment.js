const compoment = {};
compoment.mainPage = `  
<div class="container">
    <nav class="navbar">
        <div class="hamburger-menu">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
        </div>
        <a href="#" class="logo">libvocab</a>
        <div class="navs">
        <div class="navs-list">
            <a href="#home" class="navs-link">Trang chủ</a>
            <a href="#about" class="navs-link">Giới thiệu</a>
            <a href="#" class="navs-link">Liên hệ</a>
    
        </div>
                
            
        </div>
    </nav>
    <div class="center-page "  id="home">
        <div class="content">
            <p> Học tiếng anh miễn phí và mãi mãi</p>
            <div class="btn-log-res">
                <div class="btn btn-register" id="register-btn">
                    <span id="register-btn">Bắt đầu</span>
                </div>

                <div class="btn btn-login" id="login-btn">
                    <span id="login-btn">Tôi đã có tài khoản</span>
                </div>
            </div>
        </div>
    </div>


    <div class="about">
        <h1 id="about">Giới Thiệu</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque vero debitis voluptatum, 
            ipsum amet! Nemo deleniti tenetur necessitatibus, voluptatibus maiores ullam, velit, voluptates 
            incidunt deserunt nam quisquam odio possimus.</p> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque vero debitis voluptatum, 
            ipsum amet! Nemo deleniti tenetur necessitatibus, voluptatibus maiores ullam, velit, voluptates 
            incidunt deserunt nam quisquam odio possimus.</p> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque vero debitis voluptatum, 
            ipsum amet! Nemo deleniti tenetur necessitatibus, voluptatibus maiores ulla
            m, velit, voluptates incidunt deserunt nam quisquam odio possimus.</p> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque vero d
            ebitis voluptatum, ipsum amet! Nemo deleniti tenetur necessitatibus, voluptatibus maiores ullam, 
            velit, voluptates incidunt deserunt nam quisquam odio possimus.</p> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque vero debitis v
            oluptatum, ipsum amet! Nemo deleniti tenetur necessitatibus, voluptatibus maiores ullam, velit
            , voluptates incidunt deserunt nam quisquam odio possimus.</p> 

    </div>

</div>`;

compoment.loginPage = `
    <nav class="navbar">
        <div class="hamburger-menu">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
        </div>
        <a href="#" class="logo" id="home-back">libvocab</a>
        <div class="navs">
            <div class="navs-list">
                <a href="#home" class="navs-link">Trang chủ</a>
                <a href="#about" class="navs-link">Giới thiệu</a>
                <a href="#" class="navs-link">Liên hệ</a>
            </div>
        </div>
    </nav>
    <div class="login-container">
        <div class="form-wrapper">
            <h1>LOGIN</h1>
            <form id="login-form">
                <div class="input-wrapper">
                    <input type="email" placeholder="email" name="email">
                    <div id="email-error" class="err"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="password" name="password">
                    <div id="password-error" class="err"></div>
                </div>
                <div class="login-form-action">
                    <button class="btnLogin" type="submit">LOGIN</button>
                </div>
                <div class="textLogin">
                    No register? <span id="redirect-register" class="cursor-pointer">Create a account</span>
                </div>
            </form>
        </div>
    </div>
`;

compoment.registerPage = `
    <nav class="navbar">
        <div class="hamburger-menu">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
        </div>
        <a href="#" class="logo" id="home-back">libvocab</a>
        <div class="navs">
            <div class="navs-list">
                <a href="#home" class="navs-link">Trang chủ</a>
                <a href="#about" class="navs-link">Giới thiệu</a>
                <a href="#" class="navs-link">Liên hệ</a>
            </div>
        </div>
    </nav>
    <div class="register-container">
        <div class="form-wrapper">
            <h1>REGISTER</h1>
            <form id="register-form">
                <div class="input-wrapper">
                    <input type="username" placeholder="username" name="username">
                    <div id="username-error" class="err"></div>
                </div>
                <div class="input-wrapper">
                    <input type="email" placeholder="email" name="email">
                    <div id="email-error" class="err"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="password" name="password">
                    <div id="password-error" class="err"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="confirm password" name="confirmPassword">
                    <div id="cf-password-error" class="err"></div>
                </div>
                <div class="register-form-action">
                    <button class="btnregister" type="submit">REGISTER</button>
                </div>
                <div class="textregister">
                    Have an account? <span id="redirect-login" class="cursor-pointer">Login</span>
                </div>
            </form>
        </div>
    </div>
`;
compoment.loginSuccess = `
    <h1>Đã vào</h1>
`;
