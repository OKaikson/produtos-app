import React, { useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import { Container, Form, SubmitButton, Loading, SelectRows } from "./styles";
import { FaSearch, FaArrowRotateRight } from "react-icons/fa";
import { zeroFormat } from "../../services/utils";
import { ShowProduct } from "./component/product";
import { Pagination } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Stack from '@mui/material/Stack';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export function ListProduto() {
    const [produtos, setProdutos] = useState([]);
    const [searchProduto, setSearchProduto] = useState('');
    const [listagem, setListagem] = useState([]);
    const [load, setLoad] = useState(false);

    const [itensPorPagina, setItemPorPagina] = useState(10);
    const [pontoInicial, setPontoInicial] = useState(0);

    //tudo começa aqui
    useEffect(() => {
        setLoad(true);
        async function getDados() {
            try {
                const respProdutos = await api.get(`produtos`);
                setProdutos(JSON.parse(respProdutos.request.response));
            } catch (error) {
                console.log(error);
            } finally {
                setLoad(false);
            }
        }

        getDados();

    }, []);

    useEffect(() => {
        setListagem(produtos.slice(pontoInicial, parseInt(pontoInicial) + parseInt(itensPorPagina)));
    }, [produtos, pontoInicial, itensPorPagina]);

    function handleSearchName(e) {
        const value = e.target.value;
        setSearchProduto(value.trim().toUpperCase());
    }

    function handleSubmit(e) {
        e.preventDefault();

        async function pesquisaProduto() {         
            try {
                
                if (searchProduto === '') {
                    setListagem(produtos);
                } else {
                    let text = zeroFormat(searchProduto, 6);
        
                    let data = produtos.find((item) => item.CODIGO === text);
        
                    if (!data) {
                        let obj = [];
                        produtos.map((item) => {
                            if (!item.PRODUTO.indexOf(searchProduto)) {
                                obj = [...obj, item];
                            }
                        });
        
                        if (obj) {
                            setListagem(obj);
                        }
                    } else {
                        setListagem([data]);
                    }
                }
            } catch (error) {
                console.log(error.text);                
            }   
        }

        pesquisaProduto();
        
    }

    function handleChangePage(e, p) {        
        if (p > 1){
            setPontoInicial((p-1)*itensPorPagina);
        } else {
            setPontoInicial(0);
        }
    }

    function handleChangeRows(e) {
        // console.log(e.target.value);
        setItemPorPagina(e.target.value);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome do produto..."
                    onChange={handleSearchName}
                />

                <SubmitButton>
                    <FaSearch color="#FFF" size={14} />
                </SubmitButton>
            </Form>

            <Container>
                <Loading visible={load ? 0 : 1}>
                    <h3>CARREGANDO...</h3>
                </Loading>

                <Pagination
                    sx={{
                        button: {
                            color: '#fff'
                        },

                        div: {
                            color: '#fff'
                        }
                    }}
                    className="pagination"
                    color="primary"
                    count={Math.ceil(produtos.length / itensPorPagina)}
                    onChange={handleChangePage}
                />
                {
                    listagem.map((produto, index) => {
                        return (
                            <ShowProduct values={produto} key={produto.CODIGO} />
                        )
                    })
                }

                <SelectRows>
                    <div>Itens por página: </div>
                    <div>
                        <FormControl>
                            <NativeSelect
                                defaultValue={10}
                                onChange={handleChangeRows}
                                sx={{
                                    width: '55px',
                                    color: '#fff',
                                    svg :{
                                        color : '#fff',                                        
                                    }
                                }}
                            >
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={25}>25</option>
                            </NativeSelect>
                        </FormControl>
                    </div>
                </SelectRows>

            </Container>
        </div>
    )
}