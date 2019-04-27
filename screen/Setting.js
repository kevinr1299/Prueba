import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export class Setting extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Button primary onPress={() => this.props.openDrawer()}>
                        <Text>Go Home</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
};

export default Setting;