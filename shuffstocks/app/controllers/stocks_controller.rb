class StocksController < ApplicationController
include StocksHelper


def shuff
	 {shuff:"shuff"}.to_json
end

def rector(shuff)
	puts "shuff3qrghtjhregrwgraefd"
	puts "asdfd" * 1000
	render :json => "ssss".to_json
	# get_yahoo
	# puts params
	# puts "+++++++++"
	# render :json => get_yahoo(params.to_s)
end

end
