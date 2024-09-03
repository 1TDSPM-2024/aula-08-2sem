import styled from "styled-components";

export const MinhaTabela = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin: 20px auto;
  
    &  thead{
        background-color: beige;
        color: black;
        font-weight: bold;
        font-size: 24px;
        text-align: left;
        & th{
            padding: 10px;
            border: 2px solid #333;
        }
    }
  
    & tbody{
        font-size: 18px;
        text-align: center;
        & td{
            padding: 10px;
            border: 2px solid #333
        }

    }

    & tfoot {
        font-size: 18px;
        text-align: center;
        & td{
            padding: 10px;
            border: 2px solid #333

        }
    }

    & tr :nth-child(odd){
        background-color: #e2e2e2;
    }
    & tr :nth-child(even){
        background-color: #eddede;
    }
  `