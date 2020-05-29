class BooksController < ActionController::Base
  def index
    book_library = ::BookLibrary.new
    books = book_library.get_books_by_page(4)
    render :json => books.as_json
  end
end