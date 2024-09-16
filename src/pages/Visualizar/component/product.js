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
            <div>
                <img src="https://random.imagecdn.app/80/80" />
            </div>
            <div>
                <div className="produto">
                    <span><strong>{props.values.CODIGO}</strong> - {props.values.PRODUTO}</span>
                </div>
                <h4 className="price">R${formatNumber(props.values.PRECOVENDA)}</h4>
                <div className="info">
                    <span>Estoque: {props.values.ESTOQUE}</span>
                    <div className="status" >
                        ●  {situacao[parseInt(props.values.SITUACAO)].label}
                    </div>
                </div>
            </div>
        </Product>
    )
}