import styled from "styled-components/native"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";
import { Feather } from "@expo/vector-icons";
import { DataListProps } from ".";
import { FlatList, FlatListProps } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.background };

`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;

    background-color: ${({theme}) => theme.colors.primary};

    justify-content: center;
    align-items: flex-start;
    flex-direction: row;


`;

export const UserInfo  = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Photo = styled.Image`
    
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;

    border-radius: 10px;
`;
export const User = styled.View`
    margin-left: 17px;

`;
export const UserGreeting = styled.Text`
    color: ${({theme}) => theme.colors.shape } ;

    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.fonts.regular };

`;
export const UserName = styled.Text`
    color: ${({theme}) => theme.colors.shape } ;

font-size: ${RFValue(16)}px;
font-family: ${({theme}) => theme.fonts.bold };


`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    margin-top: ${RFValue(30)}px;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    `;

export const Icon = styled(Feather)`
    
color: ${({theme}) => theme.colors.secondary};

font-size: ${RFValue(24)}px;


`;

export const HighLightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingHorizontal: 24}
})`
    width:100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

export const Transactions =  styled.View`
    flex: 1%;
    padding: 0 24px;
    font-family: ${({theme}) => theme.fonts.regular};
    margin-top: ${RFPercentage(12)}px;

`;
export const Title =  styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular };
    margin-bottom: 16px;
`;

export const TransactionList = styled(
    FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>    
    ).attrs({
})``;