class BooksController < ActionController::Base
  protect_from_forgery with: :null_session

  def index
    request = ::BookApiRequest.new(params[:page], params[:query], params[:reserved])

    book_library = ::BookLibrary.instance

    resp = book_library.get_books_and_collection_info(request)

    render :json => resp.as_json
  end

  def update
    book_id = params[:id]
    book_library = ::BookLibrary.instance
    if book_library.valid_reservation(book_id)
      book_library.reserve_book(book_id)
      head :no_content
    else
      head :not_found
    end
  end
end