import React, { useState, useEffect } from "react";
import { Container, Product, Form, SubmitButton } from "./styles"
import api from "../../services/api";
// import Select from "react-select"
import { FaAngleDown } from "react-icons/fa";
import Accordion from '@mui/material/Accordion';
import { Pagination } from "@mui/material";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ShowProduct } from "./component/product";
import Select from 'react-select';

export function ListGrupo() {
    const [grupos, setGrupos] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [searchGrupo, setSearchGrupo] = useState();
    const [listagem, setListagem] = useState([]);
    
    useEffect(() => {
        async function getDados() {
            try {
                const respGrupos = await api.get(`grupos`);
                setGrupos(JSON.parse(respGrupos.request.response));

                const respProdutos = await api.get(`produtos`);
                setProdutos(JSON.parse(respProdutos.request.response));
            } catch (error) {
                console.log(error);
            } finally {

            }
        }

        getDados();

    }, []);

    useEffect(() => {
        setListagem(grupos);
    }, [grupos])

    function handleSearchGroup(e) {
        console.log(e);
        if (e) {
            const value = e.value;

            setSearchGrupo(e.value);

            if (value) {
                console.log(grupos.find((item) => item.CODIGO === value));
                setListagem([grupos.find((item) => item.CODIGO === value)]);
            }
        } else {
            setListagem(grupos);
        }
    }

    return (
        <div>
            <Form >
                <Select
                    isClearable='true'
                    isSearchable='true'
                    className="select-group"
                    onChange={handleSearchGroup}
                    placeholder="Pesquisar grupo..."
                    options={grupos.map((item) => {
                        return (
                            { value: item.CODIGO, label: item.GRUPO }
                        )
                    })}
                />
            </Form>

            <Container>
                {
                    listagem.map((grupo, indexGrupo) => {
                        return (
                            <Accordion key={grupo.CODIGO}>
                                <AccordionSummary expandIcon={<FaAngleDown />} id={`group${grupo.CODIGO}`}>
                                    <h3>{grupo.GRUPO}</h3>
                                </AccordionSummary>

                                <AccordionDetails>
                                    {
                                        produtos.map((produto, indexProduto) => {
                                            if (grupo.CODIGO === produto.CODGRUPO) {
                                                return (
                                                    <ShowProduct values={produto} key={produto.CODIGO} />
                                                )
                                            }
                                        })
                                    }
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </Container>

        </div>
    )
}