import React, { useState } from "react";
import { crearTipos } from "../../Services/TiposService";
import Swal from "sweetalert2";

export const TipoNew = ({ handleOpenModal, listarTipos }) => {

    const [valoresForm, setValoresForm] = useState({});
    const {
      nombre = "",
      foto = "",
      estado = "",
      fechaCreacion = "",
    } = valoresForm;
  
    const handleOnChange = ({ target }) => {
      const { name, value } = target;
      setValoresForm({ ...valoresForm, [name]: value });
    };
  
    const handleOnSubmit = async (e) => {
      e.preventDefault();
      const tipo = {
        nombre,
        foto,
        estado,
        fechaCreacion,
      };
      try {
        Swal.fire({
          allowOutSideClick: false,
          text: "Cargando...",
        });
        Swal.showLoading();
        const { data } = await crearTipos(tipo);
        console.log(data);
        Swal.close();
        handleOpenModal();
        listarTipos();
      } catch (error) {
        console.log(error);
        Swal.close();
      }
    };

    return (
        <div className="sideBar">
          <div className="container-fluiod">
            <div className="row">
              <div className="col">
                <div className="sidebar-header">
                  <h3>Nuevo Tipo</h3>
                  <i className="fa-solid fa-xmark" onClick={handleOpenModal}></i>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <hr />
              </div>
            </div>
            <form onSubmit={(e) => handleOnSubmit(e)}>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      required
                      type="text"
                      name="nombre"
                      value={nombre}
                      onChange={(evento) => handleOnChange(evento)}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Foto</label>
                    <input
                      required
                      type="url"
                      name="foto"
                      value={foto}
                      onChange={(evento) => handleOnChange(evento)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Estado</label>
                    <input
                      required
                      type="text"
                      name="estado"
                      value={estado}
                      onChange={(evento) => handleOnChange(evento)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Fecha Creación</label>
                    <input
                      required
                      type="date"
                      name="fechaCreacion"
                      value={fechaCreacion}
                      onChange={(evento) => handleOnChange(evento)}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
    
              <div className="row">
                <div className="col">
                  <button className="btn btn-primary">Guardar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    };
    