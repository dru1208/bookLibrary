class BooksController < ActionController::Base
  def index
    book_library = ::BookLibrary.instance
    books = book_library.get_reserved_books
    render :json => books.as_json
  end
end