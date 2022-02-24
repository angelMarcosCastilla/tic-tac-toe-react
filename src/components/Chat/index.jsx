import React from 'react'

export default function Chat() {
  return (
    <div className="container-chat">
        <div className="chat">
          <div className="chat-item chat-item--rigth">Hola como estas 😊</div>
          <div className="chat-item chat-item--left">Bien y tu</div>
          <div className="chat-item chat-item--rigth">Hola como estas 😊</div>
          <div className="chat-item chat-item--left">Bien y tu</div>
          <div className="chat-item chat-item--rigth">Hola como estas 😊</div>
          <div className="chat-item chat-item--left">Bien y tu</div>
          <div className="chat-item chat-item--rigth">Hola como estas 😊</div>
          <div className="chat-item chat-item--left">Bien y tu</div>
          <div className="chat-item chat-item--rigth">Hola como estas 😊</div>
          <div className="chat-item chat-item--left">Bien y tu</div>
        </div>
        <div className="input-group">
          <button className="btn-circle">
            <svg
              width="14px"
              height="19px"
              viewBox="0 0 14 19"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <path
                  d="M7,12 C8.66,12 9.99,10.66 9.99,9 L10,3 C10,1.34 8.66,0 7,0 C5.34,0 4,1.34 4,3 L4,9 C4,10.66 5.34,12 7,12 Z M12.3,9 C12.3,12 9.76,14.1 7,14.1 C4.24,14.1 1.7,12 1.7,9 L0,9 C0,12.41 2.72,15.23 6,15.72 L6,19 L8,19 L8,15.72 C11.28,15.24 14,12.42 14,9 L12.3,9 Z"
                  id="mic"
                  fill="blue"
                  fill-rule="nonzero"
                ></path>
              </g>
            </svg>
          </button>
          <input type="text" className="input" />
          <button className="button">Enviar</button>
        </div>
      </div>
  )
}
