class PagesController < ApplicationController
  
  def index
    @pages_props = { name: "Stranger" }
  end

end
