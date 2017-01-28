import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { text: '' };

   render() {
     return (
        <Card>
          <CardSection>
            <Input
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
              style={{ height: 50, width: 200 }}
            />
          </CardSection>

          <CardSection />

          <CardSection>
            <Button> Log in </Button>
          </CardSection>
        </Card>
     );
   }
}

export default LoginForm;
