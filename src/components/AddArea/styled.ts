import styled from "styled-components";

export const AddAreaStyled = styled.div `
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0px;
    display: flex;
    align-items: center;

    input {
        border: 0;
        background: transparent;
        outline: 0;
        color: #fff;
        font-size: 2vw;
        width: 70%;
        flex: 1;

        ::placeholder {
          font-size: 14px;
        }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
  
      input {
        width: 100%;
        font-size: 5vw;

        ::placeholder {
          font-size: 3vw;
        }
      }
    }
    @media (max-width: 480px) {
      input {
        font-size: 6vw;
      }
  
      ::placeholder {
        font-size: 4vw;
      }
    }
  
    @media (max-width: 320px) {
      input {
        font-size: 7vw;
      }
  
      ::placeholder {
        font-size: 5vw;
      }
    }
`;