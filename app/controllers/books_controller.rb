class BooksController < ActionController::Base
  def index
    book_library = ::BookLibrary.new
    books = book_library.get_books
    render :json => books.as_json
  end
end