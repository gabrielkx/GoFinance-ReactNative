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
        HighLightCards
} from "./styles"
import { RFValue } from "react-native-responsive-fontsize";
import { HighLightCard } from "../../components/HighLightCard";

export default function Dashboard () {

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

    </Container>


    )


}
