import { FormEvent, useRef } from 'react';
import { Header } from '../../components/header/header';
import { useChangeTitle } from '../../hooks/title';
import { Link, useNavigate } from 'react-router-dom';
import { dispatch } from '../../store/store';
import { AppRoute, CITIES } from '../../const';
import { loginAction } from '../../store/api-actions/auth-actions';
import { faker } from '@faker-js/faker';
import { activeActions } from '../../store/slices/active-slice';

function SignIn(): JSX.Element {
  useChangeTitle('Login');
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const city = faker.helpers.arrayElement(CITIES);

  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(
        loginAction({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  const handleClick = () => dispatch(activeActions.setCity(city));

  return (
    <div className="page page--gray page--login">
      <Header isLogPage />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              onSubmit={handleSubmit}
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <button
                onSubmit={() => navigate(AppRoute.Main)}
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={handleClick}>
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export { SignIn };
