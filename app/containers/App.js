import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import style from './App.css';
import ArchiveSelect from '../components/ArchiveSelect';

@connect(
  state => ({
    archive: state.archive
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    archive: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  url = window.location.href;

  handleClose = () => {
    document.body.classList.remove('_wtm-inserted');
    document.querySelector('.inject-react-example').remove();
    window.webTimeMachineInjected = false;
  };

  handleGoogleClick = () => {
    const googleCacheUrl = 'http://webcache.googleusercontent.com/search?q=cache:';
    window.open(googleCacheUrl + this.url);
  };

  render() {
    const { archive, actions } = this.props;

    return (
      <div className={style.app}>
        <h1 className={style.logo}>Web TimeMachine</h1>

        <div
          className={style.closeBtn}
          onClick={this.handleClose}
        >&times;</div>

        <div className={style.buttons}>
          <button
            className={style.googleCacheBtn}
            onClick={this.handleGoogleClick}
          >Google Cache</button>

          <button
            className={style.archiveBtn}
            onClick={() => { actions.fetchArchiveData(this.url); }}
          >Archive.org</button>
        </div>

        <ArchiveSelect />
      </div>
    );
  }
}
