class BooksController < ActionController::Base
  def index
    raw_page = params[:page].to_i
    page = raw_page > 0 ? raw_page : 1
    book_library = ::BookLibrary.instance
    books = book_library.get_books_by_page(page)
    render :json => books.as_json
  end
end