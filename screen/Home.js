// Home

import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export class Home extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Button primary>
                        <Text>Go Setting</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
};

export default Home;