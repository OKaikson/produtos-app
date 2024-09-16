import styled, { keyframes, css } from 'styled-components';

export const ContainerTop = styled.div`
    width: 90%;
    max-width: 700px;
    margin: 40px auto 10px auto;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;

    path {
        color: white;
    }
`;

export const Container = styled.div`
    width: 90%;
    max-width: 700px;
    margin: 40px auto;
    margin-bottom: 100px;

    .pagination{
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Product = styled.div.attrs(props => ({
    status: props.status
}))`
    width: 100%;
    background: #fff;
    border-top: 1px solid #183163;
    padding: 8px;
    gap: 5px;
    display: flex;
    align-items: center;
    -webkit-animation: fadein 1.3; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 1.3s; /* Firefox < 16 */
        -ms-animation: fadein 1.3s; /* Internet Explorer */
         -o-animation: fadein 1.3s; /* Opera < 12.1 */
            animation: fadein 1.3s;
    
    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    img{
        width: 80px;
        height: 80px;
        border-radius: 8px;
    }

    .info{
        display: flex;
        flex-direction: row;
        align-items: center; 
        gap: 7px;
    }

    .status{
        padding: 2px 5px 2px 5px ;
        border-radius: 5px;
        font-size: 12px;
        background: ${props => (props.status == 1) ? '#ffd7d7' : '#c8f9d0'};
        color: ${props => (props.status == 1) ? '#ff0000' : '#125718'};
    }
`;

// export const Product = styled.div`
//     width: 100%;
//     background: #fff;
//     border-radius: 4px;
//     box-shadow: 0 0 20px rgba(0,0,0, 0.2); 
//     padding: 15px;
//     margin: 10px auto;

//     .produto{
//         font-size: 16px;
//         margin: 6px 0 6px 0;
//     }

//     .info{
//         display: flex;
//         flex-direction: row;
//     }
// `; 

export const Form = styled.form`
    width: 90%;
    max-width: 700px;
    margin: 10px auto 0px auto;
    display: flex;
    flex-direction: row;

    .select-group {
        flex: 1;
    }

    input{
        flex: 1;
        border: 1px solid #DDD;
        padding: 10px;
        border-radius: 4px;
        font-size: 17px;
    }
`;

export const SubmitButton = styled.button`
    background: #ad0002;
    border: 0;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BackButton = styled.button`
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px rgba(255,255,255, 0.3); 

    path{
        color: #183163;
    }
`;

const animate = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

export const Loading = styled.div.attrs(props => ({
    disabled: props.visible,
}))`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: red;
    gap: 10px;

    &[disabled]{
        display: none;
    }

    ${props => props.visible &&
        css`
            svg{
                animation: ${animate} 2s linear infinite;
            }
        `
    }
`;

export const SelectRows = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 15px 0 0 0;
    gap: 10px;
`;
