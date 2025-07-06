import React, { Component } from "react";

import ReactPaginate from 'react-paginate';
import { withTranslation } from 'react-i18next';

import PostCard from 'components/PostCard';
import PostNotFound from 'components/PostNotFound';
import { ServiceFactory } from 'services';


class Page extends Component {

  constructor(props) {
    super(props);
    this.list_post_ids = [];
    this.state = {
      listPostIdsLength: this.list_post_ids.length,
      isLoaded: false,
      start: 0,
      perPage: 5,
      currentPage:-1,
      categoryName: props.CategoryName,
    }
  }

  componentDidMount() {
    this.getPosts(this.props.categoryName);
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    if(this.state.categoryName !== nextProps.categoryName) {
      this.getPosts(nextProps.categoryName);
    }
    return true;
  }

  getPosts(categoryName) {
    window.scrollTo({top: 0, behavior: 'smooth'});
    var blogService = ServiceFactory.createBlogService();
    blogService.listPostIds(categoryName).then(ids => {
      this.list_post_ids = ids;
      this.setState({
        listPostIdsLength: this.list_post_ids.length,
        isLoaded: true,
        categoryName: categoryName,
        start: 0,
        currentPage: 0,
      });
    }).catch(err => {
      alert(err);
    });
  }

  handlePageChange(data) {
    window.scrollTo({top: 0, behavior: 'smooth'});
    let pageNumber = data['selected'];
    this.setState({
      start: pageNumber * this.state.perPage,
      currentPage: pageNumber,
    });
  }

  render() {
    if(this.state.isLoaded === true && this.list_post_ids.length <= 0) {
      return (
        <PostNotFound/>
      )
    }
    return (
      <>
        <div>
          {this.list_post_ids.slice(
            this.state.start, this.state.start + this.state.perPage).map(
              (id) => <PostCard post_id={id} key={id}/>
            )
          }
        </div>
        <div role="navigation">
          <ReactPaginate
            pageCount={Math.ceil(this.state.listPostIdsLength / this.state.perPage)}
            marginPagesDisplayed={3}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageChange.bind(this)}
            containerClassName='pagination list-style-none flex justify-center'
            pageClassName='page-item ml-2'
            pageLinkClassName='font-bold relative block rounded px-3 py-1.5 text-md text-white transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 hover:text-blue-700'
            activeClassName='active bg-pink-600 rounded text-blue-700'
            previousLabel={this.props.t("Previous")}
            nextLabel={this.props.t("Next")}
            previousClassName='relative block rounded px-3 py-1.5 font-bold text-md text-white transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 hover:text-blue-700'
            nextClassName='relative block rounded ml-2 px-3 py-1.5 font-bold text-md text-white transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 hover:text-blue-700'
            previousLinkClassName=''
            nextLinkClassName=''
            disabledClassName='disabled'
            breakLabel='...'
            breakClassName='font-bold text-white'
            breakLinkClassName='page-link'
            forcePage={this.state.currentPage}
          />
        </div>
      </>
    );
  };
}

export default withTranslation()(Page);
