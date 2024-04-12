import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadSomeData();
	}, [store.agenda])

	const deleteContact = (id) => {
		actions.deleteContact(id);
	};

	return (
		<div className="mt-5">

			{store.agenda.map(contacto => (

				<div className="perfil" key={contacto.id}>
					<h2 className="titulo">Nombre</h2>
					<h3 className="container">{contacto.name}</h3>
					<h2 className="titulo">Email</h2>
					<h3 className="container">{contacto.email}</h3>
					<h2 className="titulo">Teléfono</h2>
					<h3 className="container">{contacto.phone}</h3>
					<h2 className="titulo">Dirección</h2>
					<h3 className="container">{contacto.address}</h3>
					<Link to={"/editar/" + contacto.id}>
						<button className="btn btn-primary">Editar</button>
					</Link>
					<button className="btn btn-primary" onClick={() => deleteContact(contacto.id)}>Borrar</button>
				</div>

			))}
		</div>
	);
}