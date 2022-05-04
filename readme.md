# COVID in the United States
by Megan Plunkett

## Introduction
The following lab explores COVID as of 2020 in the United States. The lab consists of two maps- a choropleth and a proportional symbols map, which were created using data from the The New York Times and ACS Data (see "Libraries & Data Sources").

<br>

## Maps
### Map 1: U.S. 2020 COVID Rates
> [Click here to view!](http://127.0.0.1:5500/map1.html)

<br> 
Map 1 is a choropleth map of 2020 COVID Rates in the U.S. Upon hovering over a U.S. county, the county name is displayed, along with how many COVID cases are in that county per 1000 residents. There is a legend in the bottom right corner, which categorizes the number of cases into colors. A yellow county indicates less cases (e.g. 0-10), while a red county indicates more cases (e.g. 100).


![U.S. 2020 COVID Rates](https://github.com/meganplunkett/USCOVID2020/blob/main/img/map1.jpg)

This data was obtained from the [US Census Bureau](https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html), [New York Times](https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv), and [ACS 2018 Population Data.](https://data.census.gov/cedsci/table?g=0100000US%24050000&d=ACS%205-Year%20Estimates%20Data%20Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true)


### Map 2: U.S. 2020 COVID Cases
> [Click here to view!](http://127.0.0.1:5500/map2.html)

<br>
Map 2 is a proportional symbols map of 2020 Covid Counts in the U.S. The radii of the circles indicates case count (shown in bottom right legend), while the number of circles indicate prevalence. A smaller, green circle indicates fewer cases, while larger blue circles indicate more. 

![U.S. 2020 COVID Rates](https://github.com/meganplunkett/USCOVID2020/blob/main/img/map2.jpg)

This data was obtained from the [New York Times.](https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv)


## Functions

The function of these maps are to create a picture of where COVID rates are highest and where the highest number of cases are. Knowing these numbers allows us to ask important questions:

- How do rates and cases differ across the U.S.
- Which places are particularly vulnerable? Why those places? What do these places have in common?
- Which places should we avoid? Or support?


## Libraries & Data Sources
This lab would not be possible without the templates from Mapbox and the file conversion tool Mapshaper. 

Links:
- [Mapbox](https://www.mapbox.com/maps)
- [Mapshaper](https://mapshaper.org/)

Data sources;
[US Census Bureau](https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html)
[New York Times](https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv)
[ACS 2018 Population Data.](https://data.census.gov/cedsci/table?g=0100000US%24050000&d=ACS%205-Year%20Estimates%20Data%20Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true)
