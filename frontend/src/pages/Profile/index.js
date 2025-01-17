import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(async () => {
        const response = await api.get('profile', {
            headers: {
                Authorization: ongId
            }
        });
        setIncidents(response.data);
    }, [ongId]);


    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="APAD"/>
                <span>Bem vindo, {ongName}</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            {incidents.map(incident => (
                <li>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>R$ {incident.value}</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            ))}
        </div>
    );
}