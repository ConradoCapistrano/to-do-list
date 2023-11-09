import { ListItemStyled } from "./styled";
import { Item } from "../../types/items";

type Props = {
    item: Item;
    onDelete: (item: Item) => void;
    onToggle: (item: Item) => void;
}

export const ListItem = ({ item, onDelete, onToggle }: Props) => {
    const handleToggle = () => {
        onToggle(item); // Chama a função para alternar o estado do item
    };

    return (
        <ListItemStyled $done={item.done}>
            <input
                type='checkbox'
                checked={item.done}
                onChange={handleToggle}
            />
            <label>{item.name}</label>
            <button onClick={()=>onDelete(item)}>Excluir</button>
        </ListItemStyled>
    );
}