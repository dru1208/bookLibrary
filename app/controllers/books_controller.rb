class BooksController < ActionController::Base
  def index
    raw_page = params[:page].to_i
    page = raw_page > 0 ? raw_page : 1
    raw_query = params[:query]
    query = raw_query.present? ? raw_query : ''

    book_library = ::BookLibrary.instance

    resp = book_library.get_books_and_collection_info(page, query)

    render :json => resp.as_json
  end
end