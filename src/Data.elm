module Data exposing
    ( CityTimeline
    , GroupData
    , UrbanVsRural
    , citiesTimeline
    , countriesUrbanVsRural
    , countriesUrbanVsRuralFiveYears
    , groupData
    )


type alias GroupData =
    { x : String
    , y : Float
    , groupLabel : String
    }


groupData : List GroupData
groupData =
    [ { groupLabel = "A"
      , x = "a"
      , y = 1000
      }
    , { groupLabel = "A"
      , x = "b"
      , y = 1300
      }
    , { groupLabel = "A"
      , x = "c"
      , y = 1600
      }
    , { groupLabel = "B"
      , x = "a"
      , y = 1100
      }
    , { groupLabel = "B"
      , x = "b"
      , y = 2300
      }
    , { groupLabel = "B"
      , x = "c"
      , y = 1600
      }
    ]


type alias CityTimeline =
    { name : String
    , population : Float
    , year : Float
    }


citiesTimeline : List CityTimeline
citiesTimeline =
    [ { name = "London"
      , population = 8
      , year = 1950
      }
    , { name = "London"
      , population = 8
      , year = 1955
      }
    , { name = "London"
      , population = 8
      , year = 1960
      }
    , { name = "London"
      , population = 8
      , year = 1965
      }
    , { name = "London"
      , population = 8
      , year = 1970
      }
    , { name = "London"
      , population = 7
      , year = 1975
      }
    , { name = "London"
      , population = 7
      , year = 1980
      }
    , { name = "London"
      , population = 7
      , year = 1985
      }
    , { name = "London"
      , population = 7
      , year = 1990
      }
    , { name = "London"
      , population = 7
      , year = 1995
      }
    , { name = "London"
      , population = 7
      , year = 2000
      }
    , { name = "São Paolo"
      , population = 2
      , year = 1950
      }
    , { name = "São Paolo"
      , population = 3
      , year = 1955
      }
    , { name = "São Paolo"
      , population = 4
      , year = 1960
      }
    , { name = "São Paolo"
      , population = 5
      , year = 1965
      }
    , { name = "São Paolo"
      , population = 8
      , year = 1970
      }
    , { name = "São Paolo"
      , population = 9
      , year = 1975
      }
    , { name = "São Paolo"
      , population = 12
      , year = 1980
      }
    , { name = "São Paolo"
      , population = 13
      , year = 1985
      }
    , { name = "São Paolo"
      , population = 15
      , year = 1990
      }
    , { name = "São Paolo"
      , population = 16
      , year = 1995
      }
    , { name = "São Paolo"
      , population = 17
      , year = 2000
      }
    ]


type alias UrbanVsRural =
    { year : String
    , population : Float
    , classification : String
    }


highIncomeUrban =
    [ 393682
    , 401877
    , 410369
    , 419106
    , 428083
    , 437321
    , 446738
    , 456240
    , 465887
    , 475685
    , 485583
    , 495454
    , 505431
    , 515646
    , 525852
    , 535949
    , 545868
    , 555784
    , 565591
    , 575185
    , 584694
    , 593682
    , 602603
    , 611487
    , 620321
    , 629042
    , 637134
    , 644981
    , 652752
    , 660423
    , 668137
    , 676065
    , 683604
    , 690987
    , 698280
    , 705561
    , 713180
    , 721113
    , 728971
    , 736564
    , 744350
    , 752307
    , 760123
    , 767969
    , 775842
    , 783670
    , 791324
    , 798930
    , 806555
    , 814225
    , 821849
    , 830818
    , 840485
    , 850093
    , 859842
    , 869805
    , 879835
    , 890013
    , 900199
    , 910077
    , 919423
    , 927484
    , 934764
    , 941716
    , 948477
    , 955213
    , 961978
    , 968737
    , 975461
    , 982092
    , 988586
    , 994935
    , 1001162
    , 1007291
    , 1013361
    , 1019399
    ]


highIncomeRural =
    [ 279214
    , 278754
    , 278490
    , 278334
    , 278179
    , 277920
    , 277587
    , 277250
    , 276851
    , 276403
    , 275975
    , 275686
    , 275352
    , 274737
    , 273959
    , 273022
    , 271941
    , 270566
    , 269100
    , 267796
    , 266625
    , 266061
    , 265603
    , 265142
    , 264571
    , 263873
    , 263541
    , 263228
    , 262806
    , 262361
    , 261802
    , 260970
    , 260465
    , 260077
    , 259759
    , 259452
    , 258815
    , 257878
    , 257036
    , 256482
    , 255759
    , 254903
    , 254223
    , 253515
    , 252736
    , 251925
    , 251210
    , 250488
    , 249726
    , 248946
    , 248281
    , 246311
    , 243684
    , 241268
    , 239003
    , 236896
    , 235161
    , 233622
    , 232148
    , 230678
    , 229169
    , 228263
    , 227531
    , 226668
    , 225772
    , 224848
    , 223881
    , 222847
    , 221730
    , 220514
    , 219189
    , 217756
    , 216222
    , 214594
    , 212882
    , 211093
    ]


middleIncomeRural =
    [ 1389446
    , 1411795
    , 1433025
    , 1453111
    , 1472605
    , 1491996
    , 1511683
    , 1531930
    , 1552699
    , 1574199
    , 1596530
    , 1619800
    , 1643557
    , 1668374
    , 1694550
    , 1727865
    , 1762921
    , 1799501
    , 1837294
    , 1875623
    , 1913918
    , 1951561
    , 1988314
    , 2023717
    , 2057600
    , 2092768
    , 2125751
    , 2158088
    , 2186909
    , 2212800
    , 2238924
    , 2265146
    , 2292594
    , 2321946
    , 2351707
    , 2382132
    , 2413374
    , 2445225
    , 2476725
    , 2507090
    , 2535383
    , 2560923
    , 2584196
    , 2605281
    , 2624637
    , 2642634
    , 2659245
    , 2674342
    , 2688073
    , 2700755
    , 2712144
    , 2720236
    , 2725054
    , 2728765
    , 2731475
    , 2733259
    , 2734823
    , 2735966
    , 2736417
    , 2736348
    , 2735699
    , 2736181
    , 2736673
    , 2736512
    , 2735407
    , 2733012
    , 2729567
    , 2725151
    , 2720000
    , 2714172
    , 2707689
    , 2700559
    , 2692769
    , 2684302
    , 2675129
    , 2665237
    ]


middleIncomeUrban =
    [ 345035
    , 360599
    , 375864
    , 391620
    , 407953
    , 424897
    , 442442
    , 460594
    , 479550
    , 499171
    , 519401
    , 540214
    , 562245
    , 585224
    , 609212
    , 628629
    , 649003
    , 670338
    , 692367
    , 714966
    , 738083
    , 762202
    , 787601
    , 814520
    , 842926
    , 869908
    , 898780
    , 928118
    , 961313
    , 998503
    , 1037064
    , 1077111
    , 1117379
    , 1157433
    , 1199040
    , 1242009
    , 1286370
    , 1331926
    , 1378369
    , 1424795
    , 1470900
    , 1516895
    , 1562533
    , 1608083
    , 1653738
    , 1699644
    , 1745877
    , 1792472
    , 1839522
    , 1886987
    , 1935345
    , 1986743
    , 2041248
    , 2096821
    , 2153474
    , 2211226
    , 2269398
    , 2328234
    , 2388135
    , 2449077
    , 2511183
    , 2572794
    , 2634892
    , 2697776
    , 2761241
    , 2825252
    , 2889409
    , 2953629
    , 3017642
    , 3081402
    , 3144887
    , 3208034
    , 3270776
    , 3333094
    , 3394979
    , 3456425
    ]


years =
    List.repeat (List.length middleIncomeRural) 1950
        |> List.indexedMap (\i x -> i + x)


countriesUrbanVsRural : List UrbanVsRural
countriesUrbanVsRural =
    List.map3
        (\u r y ->
            [ UrbanVsRural (y |> String.fromInt) (u * 1000) "urban"
            , UrbanVsRural (y |> String.fromInt) (r * -1000) "rural"
            ]
        )
        middleIncomeUrban
        middleIncomeRural
        years
        |> List.concat


countriesUrbanVsRuralFiveYears : List UrbanVsRural
countriesUrbanVsRuralFiveYears =
    countriesUrbanVsRural
        |> List.filter (\x -> modBy 5 (x.year |> String.toInt |> Maybe.withDefault 0) == 0)
