import React, { Component } from 'react';
import {
    Text,
    Icon,
    View,
    Card,
    CardItem,
    Body,
} from 'native-base';
import Colors from '../../../Colors/Colors';

class MethodAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{
                height: 100,
                width: '80%',
                alignSelf: 'center',
                marginTop: 50,
                flexDirection: 'column'
            }}>
                <View style={{
                    height: '30%',
                    width: '100%',
                    alignItems: 'center'
                }}>
                    <Text>
                        - Or sign in with -
                  </Text>
                </View>
                <View style=
                    {{
                        height: '70%',
                        width: '100%',
                        flexDirection: 'row',
                        alignSelf: 'center'
                    }}
                >
                    <View style={{
                        width: '50%',
                        height: '100%',
                        alignItems: 'center',
                    }}>
                        <Card style={{ width: '50%', marginLeft: 50 }}>
                            <CardItem button>
                                <Body>
                                    <Icon
                                        style={{
                                            alignSelf: 'center',
                                            color: Colors.gray
                                        }}
                                        name="facebook"
                                        active
                                        type="FontAwesome5"
                                    />
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{
                        width: '50%',
                        height: '100%',
                        alignItems: 'center'
                    }}>
                        <Card style={{ width: '50%', marginRight: 50 }}>
                            <CardItem button >
                                <Body>
                                    <Icon
                                        style={{
                                            alignSelf: 'center',
                                            color: Colors.gray
                                        }}
                                        name="google"
                                        active
                                        type="FontAwesome5"
                                    />
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </View>
            </View>
        );
    }
}

export default MethodAuth;
