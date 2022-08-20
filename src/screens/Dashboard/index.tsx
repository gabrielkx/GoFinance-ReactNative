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

        <HighLightCards
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 24}}
        >
            <HighLightCard/>
            <HighLightCard/>
            <HighLightCard/>
            <HighLightCard/>
            <HighLightCard/>
            <HighLightCard/>
            <HighLightCard/>

        </HighLightCards>

    </Container>


    )


}
