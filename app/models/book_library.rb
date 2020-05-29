require 'singleton'

class BookLibrary
  include Singleton

  def initialize()
    @books = [
      {"id": 1, "title": "Python Crash Course", "author": "Eric Matthes", "quantity": 5},
      {"id": 2, "title": "Head-First Python", "author": "Paul Barry", "quantity": 2},
      {"id": 3, "title": "Invent Your Own Computer Games with Python", "author": "Al Sweigart", "quantity": 1},
      {"id": 4, "title": "Think Python: How to Think Like a Computer Scientist", "author": "Allen B. Downey", "quantity": 15},
      {"id": 5, "title": "Effective Computation in Physics: Field Guide to Research with Python", "author": "Anthony Scopatz, Kathryn D. Huff", "quantity": 7},
      {"id": 6, "title": "Learn Python 3 the Hard Way", "author": "Zed A. Shaw", "quantity": 0},
      {"id": 7, "title": "The Vue Handbook", "author": "Flavio Copes", "quantity": 0},
      {"id": 8, "title": "Vue.js: Up and Running", "author": "Callum Macrae", "quantity": 1},
      {"id": 9, "title": "Fullstack Vue", "author": "Hassan Djirdeh", "quantity": 3},
      {"id": 10, "title": "Vue.js 2 and Bootstrap 4 Web Development", "author": "Olga Filipova", "quantity": 21}
    ]
    @page_size = 3
  end

  # def get_reserved_books
  #   @books.select { |book| book[:quantity] == 0 }
  # end

  def get_books_and_collection_info(page_number, query)
    if query.blank?
      paginated_books = get_books_by_page(page_number, @books)
      total_pages = calculate_total_pages(@books.count)
      current_page = page_number > total_pages ? total_pages : page_number
      {
        books: paginated_books,
        totalPages: total_pages,
        currentPage: current_page
      }
    else
      filtered = filter_books_by_query(query)
      paginated_books = get_books_by_page(page_number, filtered)
      total_pages = calculate_total_pages(filtered.count)
      current_page = page_number > total_pages ? total_pages : page_number
      {
        books: paginated_books,
        totalPages: total_pages,
        currentPage: current_page
      }
    end
  end

  private

  # methods for accessing the books on a specific page

  def get_books_by_page(page_number, books)
    start_index = calculate_start_index(page_number, calculate_total_pages(books.count))
    books[start_index, @page_size]
  end

  def calculate_start_index(page_number, total_pages_num)
    if page_number <= total_pages_num
      page_number * 3 - 3
    else
      total_pages_num * 3 - 3
    end
  end

  # methods for applying query filter

  def filter_books_by_query(query)
    processed_query = query.downcase
    @books.select do |book|
      processed_title = book[:title].downcase
      processed_title.include?(processed_query)
    end
  end

  # methods for calculating total pages

  def calculate_total_pages(count)
    pages_float = count / 3.0
    pages_int = pages_float.to_i
    extra_unfilled_page_present = pages_float - pages_int > 0

    extra_unfilled_page_present ? pages_float.to_i + 1 : pages_float.to_i
  end
end