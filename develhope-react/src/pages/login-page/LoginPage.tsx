import { type BaseSyntheticEvent } from "react";
import { Logo } from "../../components/logo/Logo";
import { login } from "../../services/auth_service";
import "./LoginPage.css";

export function LoginPage() {

    function handleSubmitForm(event: BaseSyntheticEvent) {
        event.preventDefault()

        const formData = new FormData(event.target)

        const username = formData.get("email") as string;
        const password = formData.get("password") as string;

        login(username, password)
            .then(() => {
                console.log("Login success")
                // TODO Navigate to private area
            })
            .catch(err => console.error("Login failure", err))
    }

    return (
        <div className="login-page">
            <div className="login-top-bar">
                <Logo />
                <button className="lang-selector">Ita ▾</button>
            </div>

            <div className="login-card">
                <h1>Accedi</h1>

                <button className="google-btn">
                    <img src="https://www.google.com/favicon.ico" alt="Google" width="18" />
                    Continua con Google
                </button>

                <p className="divider">oppure</p>

                <form onSubmit={handleSubmitForm}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        minLength={8}
                        required
                    />

                    <a href="#" className="forgot-password">Hai dimenticato la password?</a>

                    <button type="submit" className="submit-btn">
                        Accedi
                    </button>
                </form>

                <span className="signup-link">
                    Non sei registrato? <a href="https://www.develhope.co/sign-up">Candidati ora</a>
                </span>
            </div>
        </div>
    );
}
