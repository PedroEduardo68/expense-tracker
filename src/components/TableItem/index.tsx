import * as C from './styled'
import { Item } from '../../types/item'
import { formatDate } from '../../helpers/dataFilter'
import { categories } from '../../data/category'

type Props = {
  item: Item
}

export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>
        {formatDate(item.date)}
      </C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>{categories[item.category].title}</C.Category>
      </C.TableColumn>
      <C.TableColumn>
        {item.title}
      </C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? 'red' : 'green'} >RS {item.value}</C.Value>
      </C.TableColumn>
    </C.TableLine >
  );
}