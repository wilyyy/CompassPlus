import React from 'react'
import styled from 'styled-components/native';

export default function BalanceContainer({
    CardNumber="",
    bAmt=""
}) {
    return (
        <Container>

            <TextCont>
                <TextTitle>
                    Balance
                </TextTitle>
                <TextCard>
                    Card #{CardNumber}
                </TextCard>
            </TextCont>

            <BalanceCont>
                <BalanceText >${bAmt}</BalanceText>
            </BalanceCont>

        </Container>
    )
}

const Container = styled.View`
    background-color: #ffbb00;
    flex-direction: row;
    width: 318px;
    justify-content: space-between;
`;

const TextCont = styled.View`
    flex-direction: column;
    margin-right: 24px;
    margin-left: 16px;
`;
const TextTitle = styled.Text`
    font-weight: 700;
    color: #009DDC;
    font-size: 24px;
    margin-top: 8px;
`;

const TextCard = styled.Text`
    font-size: 12px;
`;

const BalanceCont = styled.TouchableOpacity`
    background-color: #252B42;
    padding: 16px;
    border-radius: 10px;
`;

const BalanceText = styled.Text`
    color: #fff;
    font-size: 30px;
    font-weight: 700;
`;

