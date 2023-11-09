import styled from "styled-components";

export const ListItemStyled = styled.div<{ $done : Boolean }>
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input {
        width: 25px;
        height:25px;
        margin-right: 5px;
        font-size: 2vw;
    }

    label {
        color: #CCC;
        text-decoration: ${props => (props.$done ? 'line-through' : 'initial')};
        margin-left: 5px;
        font-size: 2vw;
    }
    button {
        margin-left: 25px;
        font-size: 1vw;
    }
    
    @media (max-width: 768px) {
        input {
          width: 20px;
          height: 20px;
          margin-right: 5px;
          font-size: 5vw;
        }
    
        label {
          margin-left: 5px;
          font-size: 5vw;
        }
    
        button {
          margin-left: auto;
          font-size: 4vw;
        }
      }
    @media (max-width: 480px) {
      input {
        width: 18px;
        height: 18px;
        margin-right: 5px;
        font-size: 6vw;
      }
  
      label {
        margin-left: 5px;
        font-size: 6vw;
      }
  
      button {
        margin-left: auto;
        font-size: 5vw;
      }
    }
  
    @media (max-width: 320px) {
      input {
        width: 16px;
        height: 16px;
        margin-right: 5px;
        font-size: 7vw;
      }
  
      label {
        margin-left: 5px;
        font-size: 7vw;
      }
  
      button {
        margin-left: auto;
        font-size: 6vw;
      }
    }
    `
;