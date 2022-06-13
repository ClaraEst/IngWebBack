import React from 'react'

export const MarcaNew = ({ handleOpenModal }) => {
    return (
        <div className="sideBar">
          <div className="container-fluiod">
            <div className="row">
              <div className="col">
                <div className="sidebar-header">
                  <h3>Nueva marca</h3>
                  <i class="fa-solid fa-xmark" onClick={handleOpenModal}></i>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <hr />
              </div>
            </div>
            <form>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" name="nombre" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Foto</label>
                    <input type="text" name="foto" className="form-control" />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Fecha Compra</label>
                    <input type="date" name="fechaCompra" className="form-control" />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <select className="form-select">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input type="text" name="usuario" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Marca</label>
                    <input type="text" name="marca" className="form-control" />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Tipo</label>
                    <input type="text" name="tipoEquipo" className="form-control" />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Estado Equipo</label>
                    <input type="text" name="estadoEquipo" className="form-control" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    };