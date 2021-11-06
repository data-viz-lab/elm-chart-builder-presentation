module City exposing (City, decodeCity)

import Csv.Decode as Decode exposing (Decoder)


csv : String
csv =
    """year,urbanAgglomeration,populationMillions
1950,New York,12
1950,Tokyo,11
1950,London,8
1950,Kinki M.M.A. (Osaka),7
1950,Paris,6
1950,Moscow,5
1950,Buenos Aires,5
1950,Chicago,5
1950,Calcutta,5
1950,Shanghai,4
1950,Los Angeles-Long Beach-Santa Ana,4
1950,Mexico City,3
1950,Berlin,3
1950,Philadelphia,3
1950,Mumbai (Bombay),3
1950,Rio de Janeiro,3
1950,Sankt Peterburg (Saint Petersburg),3
1950,Detroit,3
1950,Boston,3
1950,Al-Qahirah (Cairo),2
1950,Tianjin,2
1950,Manchester,2
1950,São Paulo,2
1950,Chukyo M.M.A. (Nagoya),2
1950,Birmingham (West Midlands),2
1950,Shenyang,2
1950,Roma (Rome),2
1950,Milano (Milan),2
1950,San Francisco-Oakland,2
1950,Barcelona,2
1955,Tokyo,14
1955,New York,13
1955,Kinki M.M.A. (Osaka),9
1955,London,8
1955,Paris,7
1955,Buenos Aires,6
1955,Moscow,6
1955,Shanghai,6
1955,Chicago,6
1955,Calcutta,5
1955,Los Angeles-Long Beach-Santa Ana,5
1955,Mexico City,4
1955,Mumbai (Bombay),4
1955,Rio de Janeiro,4
1955,Philadelphia,4
1955,Berlin,3
1955,Sankt Peterburg (Saint Petersburg),3
1955,Detroit,3
1955,Chukyo M.M.A. (Nagoya),3
1955,São Paulo,3
1955,Al-Qahirah (Cairo),3
1955,Tianjin,3
1955,Boston,3
1955,Manchester,2
1955,Shenyang,2
1955,Beijing,2
1955,Birmingham (West Midlands),2
1955,Roma (Rome),2
1955,Hong Kong,2
1955,Barcelona,2
1960,Tokyo,17
1960,New York,14
1960,Kinki M.M.A. (Osaka),11
1960,London,8
1960,Paris,7
1960,Shanghai,7
1960,Buenos Aires,7
1960,Los Angeles-Long Beach-Santa Ana,7
1960,Chicago,6
1960,Moscow,6
1960,Calcutta,6
1960,Mexico City,5
1960,Rio de Janeiro,4
1960,Mumbai (Bombay),4
1960,Chukyo M.M.A. (Nagoya),4
1960,São Paulo,4
1960,Philadelphia,4
1960,Beijing,4
1960,Al-Qahirah (Cairo),4
1960,Detroit,4
1960,Sankt Peterburg (Saint Petersburg),3
1960,Berlin,3
1960,Tianjin,3
1960,Boston,3
1960,Shenyang,3
1960,Kitakyushu-Fukuoka M.M.A.,3
1960,Jakarta,3
1960,Hong Kong,3
1960,Barcelona,2
1960,Roma (Rome),2
1965,Tokyo,20
1965,New York,15
1965,Kinki M.M.A. (Osaka),13
1965,London,8
1965,Paris,8
1965,Buenos Aires,8
1965,Los Angeles-Long Beach-Santa Ana,7
1965,Mexico City,7
1965,Chicago,7
1965,Moscow,7
1965,Calcutta,7
1965,Shanghai,6
1965,Chukyo M.M.A. (Nagoya),6
1965,Rio de Janeiro,6
1965,São Paulo,5
1965,Mumbai (Bombay),5
1965,Al-Qahirah (Cairo),5
1965,Beijing,5
1965,Philadelphia,4
1965,Detroit,4
1965,Kitakyushu-Fukuoka M.M.A.,4
1965,Sankt Peterburg (Saint Petersburg),4
1965,Seoul,3
1965,Jakarta,3
1965,Berlin,3
1965,Tianjin,3
1965,Hong Kong,3
1965,Boston,3
1965,Barcelona,3
1965,Shenyang,3
1970,Tokyo,23
1970,New York,16
1970,Kinki M.M.A. (Osaka),15
1970,Mexico City,9
1970,Buenos Aires,8
1970,Los Angeles-Long Beach-Santa Ana,8
1970,Paris,8
1970,São Paulo,8
1970,London,8
1970,Calcutta,7
1970,Moscow,7
1970,Chicago,7
1970,Rio de Janeiro,7
1970,Chukyo M.M.A. (Nagoya),7
1970,Mumbai (Bombay),6
1970,Shanghai,6
1970,Al-Qahirah (Cairo),6
1970,Seoul,5
1970,Beijing,4
1970,Philadelphia,4
1970,Kitakyushu-Fukuoka M.M.A.,4
1970,Sankt Peterburg (Saint Petersburg),4
1970,Detroit,4
1970,Jakarta,4
1970,Manila,4
1970,Delhi,4
1970,Madrid,4
1970,Barcelona,3
1970,Hong Kong,3
1970,Tianjin,3
1975,Tokyo,27
1975,Kinki M.M.A. (Osaka),16
1975,New York,16
1975,Mexico City,11
1975,São Paulo,10
1975,Buenos Aires,9
1975,Los Angeles-Long Beach-Santa Ana,9
1975,Paris,9
1975,Calcutta,8
1975,Rio de Janeiro,8
1975,Mumbai (Bombay),8
1975,Moscow,8
1975,Chukyo M.M.A. (Nagoya),7
1975,Chicago,7
1975,London,7
1975,Seoul,7
1975,Al-Qahirah (Cairo),6
1975,Shanghai,6
1975,Manila,5
1975,Beijing,5
1975,Jakarta,5
1975,Kitakyushu-Fukuoka M.M.A.,5
1975,Philadelphia,4
1975,Delhi,4
1975,Sankt Peterburg (Saint Petersburg),4
1975,Tehran,4
1975,Karachi,4
1975,Madrid,4
1975,Detroit,4
1975,Krung Thep (Bangkok),4
1980,Tokyo,29
1980,Kinki M.M.A. (Osaka),17
1980,New York,16
1980,Mexico City,13
1980,São Paulo,12
1980,Buenos Aires,10
1980,Los Angeles-Long Beach-Santa Ana,10
1980,Mumbai (Bombay),9
1980,Calcutta,9
1980,Rio de Janeiro,9
1980,Paris,9
1980,Seoul,8
1980,Moscow,8
1980,Chukyo M.M.A. (Nagoya),8
1980,Al-Qahirah (Cairo),7
1980,Chicago,7
1980,London,7
1980,Jakarta,6
1980,Manila,6
1980,Shanghai,6
1980,Delhi,6
1980,Beijing,5
1980,Tehran,5
1980,Karachi,5
1980,Kitakyushu-Fukuoka M.M.A.,5
1980,Krung Thep (Bangkok),5
1980,Sankt Peterburg (Saint Petersburg),5
1980,Philadelphia,5
1980,Hong Kong,4
1980,Lima,4
1985,Tokyo,30
1985,Kinki M.M.A. (Osaka),18
1985,New York,16
1985,Mexico City,14
1985,São Paulo,13
1985,Mumbai (Bombay),11
1985,Buenos Aires,11
1985,Los Angeles-Long Beach-Santa Ana,10
1985,Calcutta,10
1985,Seoul,9
1985,Rio de Janeiro,9
1985,Paris,9
1985,Moscow,9
1985,Al-Qahirah (Cairo),8
1985,Chukyo M.M.A. (Nagoya),8
1985,Chicago,7
1985,Delhi,7
1985,Shanghai,7
1985,Jakarta,7
1985,Manila,7
1985,London,7
1985,Karachi,6
1985,Beijing,6
1985,Tehran,6
1985,Istanbul,5
1985,Krung Thep (Bangkok),5
1985,Lima,5
1985,Kitakyushu-Fukuoka M.M.A.,5
1985,Hong Kong,5
1985,Sankt Peterburg (Saint Petersburg),5
1990,Tokyo,33
1990,Kinki M.M.A. (Osaka),18
1990,New York,16
1990,Mexico City,16
1990,São Paulo,15
1990,Mumbai (Bombay),12
1990,Buenos Aires,11
1990,Calcutta,11
1990,Los Angeles-Long Beach-Santa Ana,11
1990,Seoul,11
1990,Al-Qahirah (Cairo),10
1990,Rio de Janeiro,10
1990,Delhi,9
1990,Paris,9
1990,Moscow,9
1990,Shanghai,9
1990,Chukyo M.M.A. (Nagoya),8
1990,Jakarta,8
1990,Manila,8
1990,Chicago,7
1990,Karachi,7
1990,London,7
1990,Beijing,7
1990,Dhaka,7
1990,Istanbul,7
1990,Tehran,6
1990,Krung Thep (Bangkok),6
1990,Lima,6
1990,Hong Kong,6
1990,Chennai (Madras),5
1995,Tokyo,34
1995,Kinki M.M.A. (Osaka),19
1995,Mexico City,17
1995,New York,17
1995,São Paulo,16
1995,Mumbai (Bombay),14
1995,Delhi,12
1995,Calcutta,12
1995,Al-Qahirah (Cairo),12
1995,Buenos Aires,12
1995,Los Angeles-Long Beach-Santa Ana,11
1995,Shanghai,11
1995,Rio de Janeiro,10
1995,Seoul,10
1995,Paris,10
1995,Manila,9
1995,Moscow,9
1995,Chukyo M.M.A. (Nagoya),9
1995,Karachi,8
1995,Beijing,8
1995,Dhaka,8
1995,Jakarta,8
1995,Chicago,8
1995,Istanbul,8
1995,London,7
1995,Tehran,7
1995,Lima,7
1995,Hong Kong,6
1995,Krung Thep (Bangkok),6
1995,Lagos,6
2000,Tokyo,34
2000,Kinki M.M.A. (Osaka),19
2000,Mexico City,18
2000,New York,18
2000,São Paulo,17
2000,Mumbai (Bombay),16
2000,Delhi,16
2000,Shanghai,14
2000,Al-Qahirah (Cairo),14
2000,Calcutta,13
2000,Buenos Aires,13
2000,Los Angeles-Long Beach-Santa Ana,12
2000,Rio de Janeiro,11
2000,Beijing,10
2000,Dhaka,10
2000,Moscow,10
2000,Manila,10
2000,Seoul,10
2000,Karachi,10
2000,Paris,10
2000,Istanbul,9
2000,Chukyo M.M.A. (Nagoya),9
2000,Jakarta,8
2000,Chicago,8
2000,Chongqing,8
2000,Guangzhou Guangdong,8
2000,Lima,7
2000,Lagos,7
2000,London,7
2000,Tehran,7
2005,Tokyo,36
2005,Mexico City,19
2005,Kinki M.M.A. (Osaka),19
2005,Delhi,19
2005,São Paulo,18
2005,New York,18
2005,Mumbai (Bombay),17
2005,Shanghai,17
2005,Al-Qahirah (Cairo),15
2005,Calcutta,14
2005,Buenos Aires,13
2005,Beijing,13
2005,Dhaka,12
2005,Los Angeles-Long Beach-Santa Ana,12
2005,Rio de Janeiro,12
2005,Karachi,11
2005,Moscow,11
2005,Manila,11
2005,Istanbul,10
2005,Paris,10
2005,Seoul,10
2005,Chongqing,9
2005,Guangzhou Guangdong,9
2005,Jakarta,9
2005,Chukyo M.M.A. (Nagoya),9
2005,Lagos,9
2005,Chicago,8
2005,Tianjin,8
2005,Shenzhen,8
2005,Lima,8
2010,Tokyo,37
2010,Delhi,22
2010,Shanghai,20
2010,Mexico City,20
2010,São Paulo,20
2010,Kinki M.M.A. (Osaka),19
2010,New York,18
2010,Mumbai (Bombay),18
2010,Al-Qahirah (Cairo),17
2010,Beijing,16
2010,Dhaka,15
2010,Buenos Aires,14
2010,Calcutta,14
2010,Karachi,13
2010,Istanbul,13
2010,Rio de Janeiro,12
2010,Los Angeles-Long Beach-Santa Ana,12
2010,Manila,12
2010,Moscow,11
2010,Chongqing,11
2010,Paris,10
2010,Lagos,10
2010,Guangzhou Guangdong,10
2010,Shenzhen,10
2010,Tianjin,10
2010,Seoul,10
2010,Jakarta,10
2010,Kinshasa,9
2010,Chukyo M.M.A. (Nagoya),9
2010,Lima,9
2015,Tokyo,37
2015,Delhi,26
2015,Shanghai,23
2015,Mexico City,21
2015,São Paulo,21
2015,Mumbai (Bombay),19
2015,Kinki M.M.A. (Osaka),19
2015,Al-Qahirah (Cairo),19
2015,New York,19
2015,Beijing,18
2015,Dhaka,18
2015,Buenos Aires,15
2015,Calcutta,14
2015,Karachi,14
2015,Istanbul,14
2015,Chongqing,13
2015,Rio de Janeiro,13
2015,Manila,13
2015,Tianjin,13
2015,Los Angeles-Long Beach-Santa Ana,12
2015,Lagos,12
2015,Moscow,12
2015,Guangzhou Guangdong,12
2015,Kinshasa,12
2015,Shenzhen,11
2015,Paris,11
2015,Lahore,10
2015,Jakarta,10
2015,Bangalore,10
2015,Seoul,10
2020,Tokyo,37
2020,Delhi,30
2020,Shanghai,27
2020,São Paulo,22
2020,Mexico City,22
2020,Dhaka,21
2020,Al-Qahirah (Cairo),21
2020,Beijing,20
2020,Mumbai (Bombay),20
2020,Kinki M.M.A. (Osaka),19
2020,New York,19
2020,Karachi,16
2020,Chongqing,16
2020,Istanbul,15
2020,Buenos Aires,15
2020,Calcutta,15
2020,Lagos,14
2020,Kinshasa,14
2020,Manila,14
2020,Tianjin,14
2020,Rio de Janeiro,13
2020,Guangzhou Guangdong,13
2020,Lahore,13
2020,Moscow,13
2020,Los Angeles-Long Beach-Santa Ana,12
2020,Shenzhen,12
2020,Bangalore,12
2020,Paris,11
2020,Bogotá,11
2020,Chennai (Madras),11
2025,Tokyo,37
2025,Delhi,35
2025,Shanghai,30
2025,Dhaka,25
2025,Al-Qahirah (Cairo),23
2025,São Paulo,23
2025,Mexico City,23
2025,Beijing,23
2025,Mumbai (Bombay),22
2025,New York,19
2025,Kinki M.M.A. (Osaka),19
2025,Chongqing,18
2025,Karachi,18
2025,Kinshasa,18
2025,Lagos,17
2025,Istanbul,16
2025,Calcutta,16
2025,Buenos Aires,16
2025,Manila,15
2025,Guangzhou Guangdong,15
2025,Lahore,15
2025,Tianjin,15
2025,Bangalore,14
2025,Rio de Janeiro,14
2025,Shenzhen,14
2025,Moscow,13
2025,Los Angeles-Long Beach-Santa Ana,13
2025,Chennai (Madras),12
2025,Bogotá,12
2025,Jakarta,12
2030,Delhi,39
2030,Tokyo,37
2030,Shanghai,33
2030,Dhaka,28
2030,Al-Qahirah (Cairo),26
2030,Mumbai (Bombay),25
2030,Beijing,24
2030,Mexico City,24
2030,São Paulo,24
2030,Kinshasa,22
2030,Lagos,21
2030,Karachi,20
2030,New York,20
2030,Chongqing,20
2030,Kinki M.M.A. (Osaka),19
2030,Calcutta,18
2030,Istanbul,17
2030,Lahore,17
2030,Manila,17
2030,Buenos Aires,16
2030,Bangalore,16
2030,Guangzhou Guangdong,16
2030,Tianjin,16
2030,Shenzhen,15
2030,Rio de Janeiro,14
2030,Chennai (Madras),14
2030,Los Angeles-Long Beach-Santa Ana,13
2030,Moscow,13
2030,Hyderabad,13
2030,Jakarta,13
2035,Delhi,43
2035,Tokyo,36
2035,Shanghai,34
2035,Dhaka,31
2035,Al-Qahirah (Cairo),29
2035,Mumbai (Bombay),27
2035,Kinshasa,27
2035,Mexico City,25
2035,Beijing,25
2035,São Paulo,24
2035,Lagos,24
2035,Karachi,23
2035,New York,21
2035,Chongqing,21
2035,Calcutta,20
2035,Lahore,19
2035,Manila,19
2035,Kinki M.M.A. (Osaka),18
2035,Bangalore,18
2035,Istanbul,18
2035,Buenos Aires,17
2035,Guangzhou Guangdong,17
2035,Tianjin,16
2035,Chennai (Madras),15
2035,Shenzhen,15
2035,Rio de Janeiro,15
2035,Luanda,14
2035,Hyderabad,14
2035,Los Angeles-Long Beach-Santa Ana,14
2035,Jakarta,14
"""


type alias City =
    { year : Float
    , urbanAgglomeration : String
    , populationMillions : Float
    }


decoder : Decoder City
decoder =
    Decode.into City
        |> Decode.pipeline (Decode.field "year" Decode.float)
        |> Decode.pipeline (Decode.field "urbanAgglomeration" Decode.string)
        |> Decode.pipeline (Decode.field "populationMillions" Decode.float)


decodeCity : Result Decode.Error (List City)
decodeCity =
    Decode.decodeCsv Decode.FieldNamesFromFirstRow decoder csv
