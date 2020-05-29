class BooksController < ActionController::Base
  protect_from_forgery with: :null_session

  def index
    request = ::BookApiRequest.new(params[:page], params[:query], params[:reserved])

    book_library = ::BookLibrary.instance

    resp = book_library.get_books_and_collection_info(request)


    render :json => resp.as_json
  end

  def update
    puts params[:id]
    puts "we hit this"

    head :no_content
  end
end