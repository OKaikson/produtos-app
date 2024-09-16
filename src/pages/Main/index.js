import React, {useState, useEffect, useCallback} from "react";
import { Container } from "./styles";
import { Icon } from "../../styles/global";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Main(){
    return(
        <div>
            <Link to="/visualizar">
            <Container>
                <Icon><FaShoppingCart size={40}/></Icon>   
                <h3>Produtos</h3>
            </Container>
            </Link>
        </div>
    )
}