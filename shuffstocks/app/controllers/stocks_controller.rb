class StocksController < ApplicationController
include StocksHelper


def shuff
	 {shuff:"shuff"}.to_json
end

def rector
	stock = params["stock"]
	render :json => get_yahoo_funds(stock)
end

end
