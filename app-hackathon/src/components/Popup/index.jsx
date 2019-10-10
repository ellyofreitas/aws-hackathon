import React from 'react';
import { Container } from './styles';

export default function Popup() {
  return (
    <Container>
      <main className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__content--upload">
            <svg className="popup__content--upload--icon">
              <use xlinkHref="icons/icons.svg#folder"></use>
            </svg>
            <span className="popup__content--upload--text">Arraste aqui</span>
          </div>
          <div className="popup__content--select">
            <div className="popup__content--select-combo">
              <div className="select-box">
                <div className="select-box__current" tabindex="1">
                  <div className="select-box__value">
                    <input
                      className="select-box__input"
                      type="radio"
                      id="0"
                      value="1"
                      name="Ben"
                      checked="checked"
                    />
                    <p className="select-box__input-text">Opção 1</p>
                  </div>

                  <div className="select-box__value">
                    <input
                      className="select-box__input"
                      type="radio"
                      id="1"
                      value="2"
                      name="Ben"
                      checked="checked"
                    />
                    <p className="select-box__input-text">Opção 2</p>
                  </div>

                  <div className="select-box__value">
                    <input
                      className="select-box__input"
                      type="radio"
                      id="1"
                      value="2"
                      name="Ben"
                      checked="checked"
                    />
                    <p className="select-box__input-text">
                      Seleciona o vocabulário
                    </p>
                  </div>

                  <svg className="select-box__icon">
                    <use
                      xlinkHref="icons/icons.svg#angle-arrow-down"
                      aria-hidden="true"
                    ></use>
                  </svg>
                </div>

                <ul className="select-box__list">
                  <li>
                    <label
                      className="select-box__option"
                      for="0"
                      aria-hidden="true"
                    >
                      Opção 1
                    </label>
                  </li>

                  <li>
                    <label
                      className="select-box__option"
                      for="1"
                      aria-hidden="true"
                    >
                      Opção 2
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="popup__content--select-details">File name: ...</div>
            <div className="popup__content--select-confirm">
              <button className="btn">
                <svg className="popup__content--select-confirm-icon-upload">
                  <use xlinkHref="icons/icons.svg#upload"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}
