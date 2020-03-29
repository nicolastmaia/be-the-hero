import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api';
export default () => {
	const [incidents, setIncidents] = useState([]);
	const history = useHistory();
	const ongId = localStorage.getItem('ongId');
	const ongName = localStorage.getItem('ongName');

	//executa no primeiro carregamento da pagina e se a variavel passada como segundo parametro mudar (nesse caso, ongId).
	useEffect(() => {
		api.get('profile', {
			headers: {
				Authorization: ongId
			}
		}).then(response => {
			setIncidents(response.data);
		});
	}, [ongId, incidents]); //ongId foi colocado aqui so por precaução para, caso o ID da ONG logada mudasse, a pagina seria recarregada para ver a autorizaçao de novo.

	async function handleDeleteIncident(id) {
		try {
			await api.delete(`incidents/${id}`, {
				headers: { Authorization: ongId }
			});
		} catch (err) {
			alert('Não foi possível deletar o item.');
		}
	}

	function handleLogout() {
		localStorage.clear();
		history.push('/');
	}

	return (
		<div className="profile-container">
			<header>
				<img src={logoImg} alt="Be The Hero" />
				<span>Bem Vindo, {ongName}</span>

				<Link className="button" to="/incidents/new">
					Cadastrar Novo Caso
				</Link>
				<button onClick={handleLogout} type="button">
					<FiPower size={18} color="#E02041"></FiPower>
				</button>
			</header>

			<h1>Casos Cadastrados</h1>

			<ul>
				{incidents.map(incident => (
					<li key={incident.id}>
						<strong>CASO:</strong>
						<p>{incident.title}</p>

						<strong>DESCRIÇÂO:</strong>
						<p>{incident.description}</p>

						<strong>VALOR:</strong>
						<p>
							{Intl.NumberFormat('pt-BR', {
								style: 'currency',
								currency: 'BRL'
							}).format(incident.value)}
						</p>

						<button
							onClick={() => handleDeleteIncident(incident.id)}
							type="button"
						>
							<FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
