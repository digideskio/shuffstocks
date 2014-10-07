module StocksHelper
require 'json'
require 'csv'
require 'net/http'
require 'open-uri'


	def get_yahoo_news(symbol)
		@body = Net::HTTP.get_response(URI.parse("http://feeds.finance.yahoo.com/rss/2.0/headline?s=" + symbol + "&region=US&lang=en-US")).body
		Hash.from_xml(@shuff).to_json
	end

	def get_yahoo_funds(symbol) #stands for fundamentals
		url = "http://finance.yahoo.com/d/quotes.csv?s=" + symbol + "&f=b"
		url_data = open(url).read()
		print preparer(url_data)
	end

	def preparer(string) # this method takes the string recieved from yahoo_funds, feeds it through the parser to only get the numerical data, maps it to a hash
		prices_array = parser(string)
		{ "bid" => prices_array[0]}
	end

	def parser(string)	#parses out the string and returns only the numerical values
		string.scan(/\d*\.\d*\w|\d/)
	end

end
