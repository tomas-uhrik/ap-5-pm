export interface Albums{
  "albums": [
    {
      "album_type": string,
      "total_tracks": number,
      "href": string,
      "id": string,
      "images": [
        {
          "url": string,
          "height": number,
          "width": number
        }
      ],
      "name": string,
      "release_date": string,
      "type": string,
      "uri": string,
      "artists": [
        {
          "genres": string [],
          "name": string,
          "type": string,
        }
      ],

      "tracks": {
        "href": string,
        "items": [
          {
            "images": [
              {
                "url": string,
                "height": number,
                "width": number
              }
            ],
            "name": string,
            "artists": [
              {
                "genres": string [],
                "name": string,
                "type": string,
              }
            ]


          }
        ],
        "limit": number,
        "next": string,
        "offset": number,
        "previous": string,
        "total": number
      }

    }
  ]

}

export interface Artists{
  "artists": [
    {
      "external_urls": {
        "spotify": string
      },
      "followers": {
        "href": string,
        "total": number
      },
      "genres": string [] ,
      "href": string,
      "id": string,
      "images": [
        {
          "url": string,
          "height": number,
          "width": number
        }
      ],
      "name": string,
      "popularity": 0,
      "type": string,
      "uri": string
    }
  ]
}

export interface Releases{
  "albums": {
    "href": string,
    "id":string,
    "items": [
      {
        "images": [
          {
            "url": string,
            "height": number,
            "width": number
          }
        ],
        "name": string,
        "artists": [
          {
            "genres": string [],
            "name": string,
            "type": string,
          }
        ]


      }
    ],
    "limit": number,
    "next": string,
    "offset": number,
    "previous": string,
    "total": number
  }
}

export interface AlbumDetails{
  "id": string,
  "images": [
    {
      "url": string,
      "height": number,
      "width": number
    }
  ],
  "name": string,
  "release_date": string,
  "type": string,
  "artists": [
    {

      "name": string,
      "type": string,
    }
  ],

  "tracks": {
    "items"?: [
      {
        "images": [
          {
            "url"?: string,
            "height"?: number,
            "width"?: number
          }
        ],
        "name": string,
        "artists": [
          {
            "name": string,
            "type": string,
          }
        ]


      }
    ],
  }

}


