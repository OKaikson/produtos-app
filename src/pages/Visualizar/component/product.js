import React from "react";
import { formatNumber } from "../../../services/utils";
import { Product } from "../styles";

export function ShowProduct(props) {

    const situacao = [
        { id: 0, label: 'Ativo' },
        { id: 1, label: 'Inativo' }
    ]

    return (
        <Product status={props.values.SITUACAO}>
            <div className="main">
                <strong>{props.values.CODIGO}</strong>
                <div className="produto">
                    <span>
                        {props.values.PRODUTO} - <strong className="price">R${formatNumber(props.values.PRECOVENDA)}</strong>
                    </span>
                </div>               
                <span><strong>Tipo.......:</strong> {props.values.TIPO}</span> <br/>
                <strong>Estoque:</strong><span className="estoque"> {props.values.ESTOQUE}</span>
            </div>
            <div className="fixR">
                <div className="status" >
                    ●  {situacao[parseInt(props.values.SITUACAO)].label}
                </div>
            </div>
        </Product>
    )
}