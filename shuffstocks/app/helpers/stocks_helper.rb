module StocksHelper
require 'json'
require 'net/http'

	def seperate_args(*args)
		args.join(",")
	end

	def get_yahoo(symbols)
		seperated_symbols = seperate_args(symbols)
		@shuff = Net::HTTP.get_response(URI.parse("http://feeds.finance.yahoo.com/rss/2.0/headline?s=" + seperated_symbols + "&region=US&lang=en-US")).body
		Hash.from_xml(@shuff).to_json
	end

end
