import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

const btnModal = document.querySelectorAll("[data-btn-modal]");

const selectForm = (type, modalWrap) => {
  modalWrap.innerHTML = "";
  switch (type) {
    case "login":
      {
        const loginForm = `
        <form class="form modal-content__form">
          <h2 class="form__title">Войти в систему</h2>
          <label class="form__label">
            <input
              type="text"
              class="input-reset form__input"
              name="login"
              placeholder="Email/Телефон"
            />
          </label>
          <label class="form__label">
            <input
              type="password"
              class="input-reset form__input"
              name="password"
              placeholder="Пароль"
            />
          </label>
          <label class="custom-checkbox">
            <input type="checkbox" class="custom-checkbox__field" />
            <span class="custom-checkbox__content">Запомнить пароль</span>
          </label>
          <button class="btn-reset form__btn form__btn--recovery" type="button" data-modal-type='recovery'>
            Восстановить
          </button>
          <button class="btn-reset form__btn form__btn--login" type="submit">
            Войти
          </button>
          <button class="btn-reset form__btn form__btn--registration" data-modal-type='registration' type="button">
            Зарегистрироваться
          </button>
        </form>
    `;
        modalWrap.insertAdjacentHTML("beforeend", loginForm);
      }
      break;
    case "recovery":
      {
        const recoveryForm = `
          <form class="form modal-content__form">
            <h2 class="form__title">Восстановление пароля</h2>
            <label class="form__label">
              <input
                type="text"
                class="input-reset form__input"
                name="login"
                placeholder="Email/Телефон"
              />
            </label>
            <button class="btn-reset form__btn form__btn--recovery" type="button" data-modal-type='login'>
              Авторизоваться
            </button>
            <button class="btn-reset form__btn form__btn--login" type="submit">
              Получить код
            </button>
          </form>
      `;
        modalWrap.insertAdjacentHTML("beforeend", recoveryForm);
      }
      break;
    case "registration":
      {
        const registrationForm = `
        <form class="form modal-content__form">
          <h2 class="form__title">Регистрация</h2>
          <label class="form__label">
            <input
              type="text"
              class="input-reset form__input"
              name="login"
              placeholder="Email/Телефон"
            />
          </label>
                    <label class="form__label">
            <input
              type="text"
              class="input-reset form__input"
              name="password"
              placeholder="Пароль"
            />
          </label>
                    </label>
                    <label class="form__label">
            <input
              type="text"
              class="input-reset form__input"
              name="password"
              placeholder="Повторить пароль"
            />
          </label>
          <button class="btn-reset form__btn form__btn--recovery" type="button" data-modal-type='login'>
            Авторизоваться
          </button>
          <button class="btn-reset form__btn form__btn--login" type="submit">
            Зарегистрироваться
          </button>
        </form>
    `;
        modalWrap.insertAdjacentHTML("beforeend", registrationForm);
      }
      break;
    default: {
      const loginForm = `
        <form class="form modal-content__form">
          <h2 class="form__title">Войти в систему</h2>
          <label class="form__label">
            <input
              type="text"
              class="input-reset form__input"
              name="login"
              placeholder="Email/Телефон"
            />
          </label>
          <label class="form__label">
            <input
              type="password"
              class="input-reset form__input"
              name="password"
              placeholder="Пароль"
            />
          </label>
          <label class="custom-checkbox">
            <input type="checkbox" class="custom-checkbox__field" />
            <span class="custom-checkbox__content">Запомнить пароль</span>
          </label>
          <button class="btn-reset form__btn form__btn--recovery" type="button" data-modal-type='recovery'>
            Восстановить
          </button>
          <button class="btn-reset form__btn form__btn--login" type="submit">
            Войти
          </button>
          <button class="btn-reset form__btn form__btn--registration" type="button">
            Зарегистрироваться
          </button>
        </form>
    `;
      modalWrap.insertAdjacentHTML("beforeend", loginForm);
    }
  }
  const switchBtn = modalWrap.querySelectorAll("[data-modal-type]");
  let typeModal = type;
  switchBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      typeModal = e.currentTarget.getAttribute("data-modal-type");
      selectForm(typeModal, modalWrap);
    });
  });
};

if (btnModal) {
  btnModal.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let typeModal = e.currentTarget.getAttribute("data-btn-modal");
      const modal = document.querySelector(`[data-modal="${typeModal}"]`);
      const modalWrap = modal.querySelector(".modal-content__form");
      const btnClose = modal.querySelector(".modal-content__close");
      const overlay = modal.querySelector(".modal__overlay");

      if (modal) {
        modal.classList.add("active");
        disableScroll();
        selectForm(typeModal, modalWrap);
      }
      btnClose.addEventListener("click", (e) => {
        if (e.currentTarget === btnClose) {
          modal.classList.remove("active");
          enableScroll();
        }
      });
      overlay.addEventListener("click", (e) => {
        if (e.currentTarget === overlay) {
          modal.classList.remove("active");
          enableScroll();
        }
      });
    });
  });
}
