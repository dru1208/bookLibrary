class BookApiRequest
  attr_reader :page, :query, :reserved

  def initialize(page_param, search_query_param, reserved_param)
    @page = process_page_param(page_param)
    @query = process_search_query_param(search_query_param)
    @reserved = process_reserved_param(reserved_param)
  end

  def process_page_param(param)
    raw_page = param.to_i
    raw_page > 0 ? raw_page : 1
  end

  def process_search_query_param(param)
    raw_query = param
    raw_query.present? ? raw_query : ''
  end

  def process_reserved_param(param)
    param == 'true'
  end
end