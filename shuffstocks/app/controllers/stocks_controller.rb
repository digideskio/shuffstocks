class StocksController < ApplicationController
include StocksHelper


def shuff
	 {shuff:"shuff"}.to_json
end

def rector
	stock = params["stock"]
	render :json => return_stock_information(stock)
end

end
