import { useState, KeyboardEvent } from "react";
import { AddAreaStyled } from "./styled";

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ( { onEnter }: Props) => {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if ((e.code === 'Enter' || e.key === 'Enter') && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    };

    return (
        <AddAreaStyled>
            <input 
                type="text" 
                placeholder="Digitar tarefas"
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </AddAreaStyled>
    );
};