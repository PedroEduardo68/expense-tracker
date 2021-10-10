import * as C from './App.styles'

import { Item } from './types/item';
import { Category } from './types/category';

import { itens } from './data/itens';
import { categories } from './data/category';
import { useState, useEffect } from 'react';

import { getCurrentMonth, filterListByMonth } from './helpers/dataFilter';


import { TableArea } from '../src/components/TableArea/index'
import { InfoArea } from "../src/components/InfoArea/index"
import { InputArea } from '../src/components/InputArea/index'

const App = () => {
  const [list, setList] = useState(itens);

  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);
  const [income, setIcome] = useState(0);
  const [expense, setexpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList)
  }



  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;
    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIcome(incomeCount);
    setexpense(expenseCount);

  }, [filteredList])



  return (
    <C.Container>
      <C.Header>
        <C.HeaderText> Sistema Financeiro </C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Area de Informação */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* Area de adicionar */}
        <InputArea onAdd={handleAddItem} />

        {/* Tabela de idetns */}
        <TableArea list={filteredList} />


      </C.Body>
    </C.Container>
  );
}

export default App;