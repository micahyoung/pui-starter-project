var React = require('react');
var ReactDOM = require('react-dom');
var BaseModal = require('pui-react-modals').BaseModal;
var ModalBody = require('pui-react-modals').ModalBody;
var ModalFooter = require('pui-react-modals').ModalFooter;
var DefaultButton = require('pui-react-buttons').DefaultButton;
var Tooltip = require('pui-react-tooltip').Tooltip;
var OverlayTrigger = require('pui-react-overlay-trigger').OverlayTrigger;

var MyTestPage = React.createClass({
  getInitialState: function() {
    return {
      modalOpen: false
    };
  },
  _openModal: function() {
    this.setState({modalOpen: true});
  },

  _closeModal: function() {
    this.setState({modalOpen: false});
  },

  render: function() {
    return (
      <div>
        <DefaultButton onClick={this._openModal}>
          Open Stateless Modal
        </DefaultButton>
        <BaseModal title='What a Header!'
                   className='optional-custom-class'
                   show={this.state.modalOpen}
                   onHide={this._closeModal}>
          <ModalBody>
            <div>
              <p>
                Check out this
                <OverlayTrigger placement="left" pin={false} overlay={<Tooltip>I should be on the left</Tooltip>}>
                  <span className="overlay-trigger" tabIndex="0"> tooltip on the left.</span>
                </OverlayTrigger>
              </p>
              <p>
                Check out this
                <OverlayTrigger placement="right" pin={false} overlay={<Tooltip>I should be on the right</Tooltip>}>
                  <span className="overlay-trigger" tabIndex="0"> tooltip on the right.</span>
                </OverlayTrigger>
              </p>
              <p>
                Check out this
                <OverlayTrigger placement="top" pin={false} overlay={<Tooltip>I should be on the top</Tooltip>}>
                  <span className="overlay-trigger" tabIndex="0"> tooltip on the top.</span>
                </OverlayTrigger>
              </p>
              <p>
                Check out this
                <OverlayTrigger placement="bottom" pin={false} overlay={<Tooltip>I should be on the bottom</Tooltip>}>
                  <span className="overlay-trigger" tabIndex="0"> tooltip on the bottom.</span>
                </OverlayTrigger>
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <DefaultButton onClick={this._closeModal}>
              Close
            </DefaultButton>
          </ModalFooter>
        </BaseModal>
      </div>
    );
  }
});

ReactDOM.render(<MyTestPage />, document.getElementById('root'));
