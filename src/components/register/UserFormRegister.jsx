import React from "react";

export const UserFormRegister = () => {
  return (
    <div id="contenedorPrincipal">
      <div id="contenedorH1">
        <h1>CREAR CUENTA</h1>
      </div>
      <form action="">
        <div>
          <ul>
            <li>
              <div>
                <label htmlFor="nombre">Nombre Completo</label>
                <input type="text" />
              </div>
            </li>
            <li>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" />
              </div>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <div>
                <label htmlFor="telefono"></label>
                <input type="tel" />
              </div>
            </li>
            <li>
              <div>
                <label htmlFor="">Telefono</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">DNI</label>
                <input type="text" />
              </div>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <div>
                <label htmlFor=""></label>
                <input type="text" />
              </div>
            </li>
            <li></li>
          </ul>
        </div>
      </form>
    </div>
  );
};
