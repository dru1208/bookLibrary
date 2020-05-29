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

  def get_books
    @books
  end

  def get_reserved_books
    @books.select { |book| book[:quantity] == 0 }
  end

  def get_books_by_page(page_number)
    total_book_count = @books.count
    total_pages = calculate_total_pages(total_book_count)

    start_index = calculate_start_index(page_number, total_pages)
    @books[start_index, @page_size]
  end

  private

  def calculate_start_index(page_number, total_pages)
    if page_number <= total_pages
      page_number * 3 - 3
    else
      total_pages * 3 - 3
    end
  end

  def calculate_total_pages(count)
    pages_float = count / 3.0

    should_increment_max_pages?(pages_float) ? pages_float.to_i + 1 : pages_float.to_i
  end

  def should_increment_max_pages?(pages_float)
    pages_int = pages_float.to_i
    pages_float - pages_int > 0
  end
end