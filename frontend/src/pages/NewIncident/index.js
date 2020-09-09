import React from "react";
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident () {
    return (
        <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para um héroi para resolve isso.</p>

                    <Link className="backlink" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para página inicial
                    </Link>
                </section>
                <form action="">
                    <input type="text" placeholder="Título do caso"/>
                    <textarea placeholder="Descrição"/>
                    <input type="text" placeholder="Valor em reais"/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}