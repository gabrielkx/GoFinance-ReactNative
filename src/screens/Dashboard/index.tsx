import { HighLightCard } from "../../components/HighLightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard/index";

import React from "react";
import {Container, 
        Header,
        UserWrapper,
        UserInfo,
        Photo,
        User,
        UserGreeting,
        UserName,
        Icon,
        HighLightCards,
        Transactions,
        Title,
        TransactionList,
} from "./styles"

export interface DataListProps extends TransactionCardProps {
    id: string;

}

export default function Dashboard () {
  
    const data: DataListProps[] = [{
    id: '1',
    type: 'positive',
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
        name: 'Vendas',
        icon: 'dollar-sign'
    },
    date: "13/04/2020"
},

{

    id: '2',
    type: 'negative',
    title: "Hamburgueria Dog",
    amount: "R$ 59,00",
    category: {
        name: 'Alimentação',
        icon: 'coffee'
        },
        
    date: "10/04/2020"
},

{
    id: '3',
    type: 'negative',
    title: "Aluguel do apartamento",
    amount: "R$ 1200,00",
    category: {
        name: 'Casa',
        icon: 'shopping-bag'
    },
    date: "10/04/2020"
}

];

    return(

    <Container>

        <Header>
            <UserWrapper>
            <UserInfo>
                <Photo 
                source={{ uri: 'https://avatars.githubusercontent.com/u/49771700?v=4' }}
                />
                <User>
                    <UserGreeting>Olá,</UserGreeting>
                    <UserName>Gabriel</UserName>
                </User>
            </UserInfo>

            <Icon name="power"/>
            </UserWrapper>
        </Header>

        <HighLightCards >
            <HighLightCard 
            type="up"
            title="Entradas" 
            amount="R$17.400,00" 
            lastTransaction="Última entrada dia 13 de abril."/>
           
           <HighLightCard 
            type="down"
            title="Saidas" 
            amount="R$1.259,00" 
            lastTransaction="Última saída dia 03 de abril."/>
           
           <HighLightCard 
            type="total"
            title="Total" 
            amount="R$16.141,00" 
            lastTransaction="01 á 16 de abril."/>
           
        </HighLightCards>

        <Transactions>
            <Title>Listagem</Title>
        
        <TransactionList
        data={data}
        keyExtractor={ item => item.id }
        renderItem={({ item }) => <TransactionCard data={item}/>}
        />

        </Transactions>
    </Container>

   )

}
// function getBottomSpace() {
//     throw new Error("Function not implemented.");
// }

