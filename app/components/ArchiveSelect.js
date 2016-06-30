import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import style from './ArchiveSelect.css';

class ArchiveList extends Component {
  static propTypes = {
    archive: PropTypes.array,
  };

  constructor(props) {
    super(props);

    this.state = {
      archive: '',
    };
  }

  archiveUrl = 'https://web.archive.org/web/';
  currentUrl = window.location.href;

  handleChange = (e) => {
    this.setState({
      archive: e.target.value,
    });
  };

  handleClick = () => {
    if (this.state.archive) {
      window.open(`${this.archiveUrl}${this.state.archive}/${this.currentUrl}`);
    } else {
      alert('Please select one specific archive.');
    }
  };

  render() {
    const { archive } = this.props;

    if (!archive || !archive.length) {
      return null;
    }

    return (
      <div className={style.archiveSelectWrapper}>
        <h5 className={style.archiveTitle}>Archive.org:</h5>
        <label className={style.archiveSelectLabel}>
          <select
            className={style.archiveSelect}
            onChange={(e) => { this.handleChange(e); }}
            value={this.state.archive}
          >
            <option value="">Take me back to...</option>
            {archive && archive.map(item =>
              <option
                key={item[1]}
                value={item[1]}
              >{item[1]}</option>
            )}
          </select>
        </label>

        <button
          className={style.archiveButton}
          onClick={this.handleClick}
        >Go</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    archive: state.archive,
  };
}

export default connect(mapStateToProps)(ArchiveList);
