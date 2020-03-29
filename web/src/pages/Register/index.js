import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';

export default function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [city, setCity] = useState('');
	const [uf, setUf] = useState('');

	const history = useHistory();

	async function handleRegister(e) {
		e.preventDefault(); //Evita que a página seja recarregada toda vez que for clicado o botao de "Cadastrar" sem ter uma outra ação para ser feita.
		console.log(name, email, whatsapp, city, uf);
		const data = {
			name,
			email,
			whatsapp,
			city,
			uf
		};
		try {
			const response = await api.post('ongs', data);
			alert(`Seu ID de acesso: ${response.data.id}`);
			history.push('/');
		} catch (err) {
			alert(err.message);
		}
	}

	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Hero" />
					<h1>Cadastro</h1>
					<p>
						Faça seu cadastro, entre na plataforma e ajude pessoas a
						encontrarem os casos da sua ONG.
					</p>
					<Link to="/" className="back-link">
						<FiArrowLeft size={16} color="#e02042"></FiArrowLeft>
						Não Tenho Cadastro
					</Link>
				</section>

				<form onSubmit={handleRegister}>
					<input
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder="Nome da ONG"
					/>
					<input
						type="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder="E-mail"
					/>
					<input
						value={whatsapp}
						onChange={e => setWhatsapp(e.target.value)}
						placeholder="Whatsapp"
					/>

					<div className="input-group">
						<input
							value={city}
							onChange={e => setCity(e.target.value)}
							placeholder="Cidade"
						/>
						<input
							value={uf}
							onChange={e => setUf(e.target.value)}
							placeholder="UF"
							style={{ width: 80 }}
						/>
					</div>
					<button type="submit" className="button">
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	);
}
