import React, { useEffect, useState } from "react";
import { ContainerTop, BackButton } from "./styles";
import { Icon } from "../../styles/global";
import { FaArrowLeft } from "react-icons/fa";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { ListProduto } from "./produtos";
import { ListGrupo } from "./grupos";


export default function Visualizar() {
    const [listar, setListar] = useState('produtos');

    function handleRadioChange(e) {
        setListar(e.target.value);
    }

    return (
        <div>
            {/* <ContainerTop>
                <BackButton>
                    <Icon className="icon"><FaArrowLeft size={20}/></Icon>
                    Voltar
                </BackButton>
            </ContainerTop> */}
            
            <ContainerTop>
                <FormControl>
                    <h3>Modo de visualização</h3>
                    <RadioGroup
                        row
                        aria-labelledby="rbSelection"
                        name="row-r-group"
                        onChange={handleRadioChange}
                        defaultValue="produtos">

                        <FormControlLabel className="opt-radio" value="produtos" control={<Radio />} label="Produtos" />
                        <FormControlLabel className="opt-radio" value="grupos" control={<Radio />} label="Grupos" />
                    </RadioGroup>
                </FormControl>
            </ContainerTop>

            
            {listar === 'produtos' ? <ListProduto /> : <ListGrupo />}
        </div>
    );
};