import React from 'react';
import {Link} from 'react-router-dom';

function Scheduling() {

    return (
        <div className="page-primary">
            <h1>Pesquisa</h1>
            <div className="conteiner">
                <form >
                    <input type="text" placeholder="Funcionário"/>
                    <input type="text" placeholder="Exame"/>
                    <input type="text" placeholder="Agente de Risco"/>
                    <input type="text" placeholder="Médico"/>
                    <input type="text" placeholder="Foto"/>
                    <input type="text" placeholder="Descrição"/>
                    <button type="submit">Pesquisar</button>
                </form>
            </div>
                <div>
                    <table>
                        <tr className="list">
                            <td>Data da Emissão:</td>
                            <td>Funcionário:</td>
                            <td>Foto do Funcionário:</td>
                            <td>Exame:</td>
                            <td>Agente de Risco:</td>
                            <td>Médico:</td>
                            <td>Descrição do PPP:</td>
                        </tr>
                    </table>
                </div>
        </div>
    )
}

export default Scheduling;