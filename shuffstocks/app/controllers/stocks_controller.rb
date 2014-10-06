class StocksController < ApplicationController
include StocksHelper


def shuff
	 {shuff:"shuff"}.to_json
end

def rector
	puts params
	puts "+++++++++"
	render :json => get_yahoo(params.to_s)
end

end
