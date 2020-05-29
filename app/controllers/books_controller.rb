class BooksController < ActionController::Base
  def index
    raw_page = params[:page].to_i
    page = raw_page > 0 ? raw_page : 1

    book_library = ::BookLibrary.instance

    books = book_library.get_books_by_page(page)
    total_pages = book_library.total_pages

    resp = {
      books: books,
      totalPages: total_pages
    }

    render :json => resp.as_json
  end
end