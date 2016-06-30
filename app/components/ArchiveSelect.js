import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchArchiveData } from '../actions';
import style from './ArchiveSelect.css';

class ArchiveList extends Component {
  static propTypes = {
    archives: PropTypes.array,
    page: PropTypes.number,
    totalPages: PropTypes.number,
    fetchArchiveData: PropTypes.func,
    isFetching: PropTypes.bool,
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

  url = window.location.href;

  handleChangePage(page) {
    this.props.fetchArchiveData(this.url, page);
  }

  renderPager(direction, page, totalPages) {
    if (direction === 'next') {
      if (totalPages > 1 && page < totalPages - 1) {
        return (
          <a
            className={style.pagerNext}
            onClick={() => { this.handleChangePage(page + 1); }}
          >&gt;</a>
        );
      }

      return null;
    }

    if (page > 0 && totalPages > 1) {
      return (
        <a
          className={style.pagerPrev}
          onClick={() => { this.handleChangePage(page - 1); }}
        >&lt;</a>
      );
    }

    return null;
  }

  render() {
    const { archives, page, totalPages } = this.props;

    if (!archives || !archives.length) {
      return null;
    }

    return (
      <div className={style.archiveSelectWrapper}>
        <header className={style.archiveHeader}>
          <h5 className={style.archiveTitle}>Archive.org:</h5>

          <div className={style.pager}>
            {this.renderPager('prev', page, totalPages)}
            {this.renderPager('next', page, totalPages)}
          </div>
        </header>

        <label className={style.archiveSelectLabel}>
          <select
            className={style.archiveSelect}
            onChange={(e) => { this.handleChange(e); }}
            value={this.state.archive}
          >
            <option value="">Take me back to...</option>
            {archives && archives.map(item =>
              <option
                key={item[0]}
                value={item[0]}
              >{item[0]}</option>
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
    archives: state.archive.data,
    page: state.archive.page,
    totalPages: state.archive.totalPages,
    isFetching: state.archive.isFetching,
  };
}

export default connect(mapStateToProps, { fetchArchiveData })(ArchiveList);
