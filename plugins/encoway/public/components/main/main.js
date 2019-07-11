import React from 'react';
import {
  EuiPage,
  EuiPageHeader,
  EuiTitle,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentBody,
  EuiText,
  EuiButton,
  EuiFlexItem
} from '@elastic/eui';
import { FormattedMessage } from '@kbn/i18n/react';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /*
       FOR EXAMPLE PURPOSES ONLY.  There are much better ways to
       manage state and update your UI than this.
    */
    const { httpClient } = this.props;
    httpClient.get('../api/encoway/example').then((resp) => {
      this.setState({ time: resp.data.time });
    });
  }
  render() {
    const { title } = this.props;
    return (
      <EuiPage>
        <EuiPageBody>
          <EuiPageHeader>
            <EuiTitle size="l">
              <h1>
                <FormattedMessage
                  id="encoway.helloWorldText"
                  defaultMessage="Welcome to {title}"
                  values={{ title }}
                />
              </h1>
            </EuiTitle>
          </EuiPageHeader>
          <EuiPageContent>
            <EuiPageContentHeader>
              <EuiTitle>
                <h2>
                  <FormattedMessage
                    id="encoway.congratulationsTitle"
                    defaultMessage="You can discover your future business"
                  />
                </h2>
              </EuiTitle>
            </EuiPageContentHeader>
            
            <EuiPageContentBody>
              <EuiText>
                <h3>
                  <FormattedMessage
                    id="encoway.congratulationsText"
                    defaultMessage="Select your desired filed"
                  />
                </h3>
                
                <p>
                  <FormattedMessage
                    id="encoway.serverTimeText"
                    defaultMessage="The server time form me (via API call) is {time}"
                    values={{ time: this.state.time || 'NO API CALL YET' }}
                  />
                </p>
              </EuiText>

              <EuiFlexItem grow={false}>
                <EuiButton fill onClick={() => window.alert('Encoway Button clicked')}>
                    Encoway
                </EuiButton>
              </EuiFlexItem>
              
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    );
  }
}
