require 'sinatra'

set :bind, ENV['IP']
set :port, ENV['PORT']

get '/Hallo/:name' do
  "Hello #{params[:name]}"
end