class BooksController < ActionController::Base
  def index
    request = ::BookApiRequest.new(params[:page], params[:query], params[:reserved])

    book_library = ::BookLibrary.instance

    resp = book_library.get_books_and_collection_info(request)


    render :json => resp.as_json
  end
end