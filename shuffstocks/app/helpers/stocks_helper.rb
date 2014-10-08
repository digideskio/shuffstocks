module StocksHelper
require 'json'
require 'csv'
require 'net/http'
require 'open-uri'


	def get_yahoo_news(symbol)
		@body = Net::HTTP.get_response(URI.parse("http://feeds.finance.yahoo.com/rss/2.0/headline?s=" + symbol + "&region=US&lang=en-US")).body
		Hash.from_xml(@body).to_json
	end

	def get_yahoo_funds(symbol) #stands for fundamentals
		url = "http://finance.yahoo.com/d/quotes.csv?s=" + symbol + "&f=b"
		url_data = open(url).read()
		fund_preparer(url_data) #the data we get back from the api is merely a string, we need to prepare it.
	end

	def fund_preparer(string) # this method takes the string recieved from yahoo_funds, feeds it through the parser to only get the numerical data, maps it to a hash
		prices_array = parser(string)
		{ "bid" => prices_array[0]}
	end

	def parser(string)	#parses out the string and returns only the numerical values
		string.scan(/\d*\.\d*\w|\d/)
	end

	def return_object(*objects) #here we are making two hashes into one. We can put as many hashes as we want in this.
		objects_hash = Hash.new(nil) #this is the finale hash we are preparing to return to the client end.
		objects.each do |hash|
			hash.each_pair do |name, sub_hash|
				objects_hash[name] = sub_hash
			end
		end
		objects_hash
	end

	def return_stock_information(symbol) #here, we query both api's and feed the results into the return object, so we get one large hash to return to the client side.
		fundamentals = get_yahoo_funds(symbol)
		news = get_yahoo_news(symbol)
		return_object({"news" => news}, {"fundamentals" => fundamentals})
	end


end
