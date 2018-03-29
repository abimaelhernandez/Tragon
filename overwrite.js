let newVendors = []

rewriteVendor = function() {
  const randomPoints = [
  [ 19.395854, -99.163355 ],
  [ 19.408765, -99.169206 ],
  [ 19.435578, -99.167459 ],
  [ 19.447469, -99.163397 ],
  [ 19.397605, -99.191365 ],
  [ 19.422584, -99.146995 ],
  [ 19.451276, -99.153349 ],
  [ 19.428882, -99.16392 ],
  [ 19.445549, -99.185193 ],
  [ 19.391323, -99.180803 ],
  [ 19.377738, -99.182722 ],
  [ 19.444206, -99.144531 ],
  [ 19.450719, -99.162989 ],
  [ 19.393094, -99.182376 ],
  [ 19.36708, -99.147363 ],
  [ 19.445963, -99.183658 ],
  [ 19.445022, -99.182731 ],
  [ 19.403406, -99.181826 ],
  [ 19.398193, -99.147915 ],
  [ 19.433326, -99.197595 ],
  [ 19.43371, -99.151459 ],
  [ 19.416629, -99.186628 ],
  [ 19.405326, -99.184388 ],
  [ 19.445182, -99.142216 ],
  [ 19.414901, -99.19165 ],
  [ 19.371804, -99.145456 ],
  [ 19.419053, -99.198631 ],
  [ 19.389723, -99.185195 ],
  [ 19.403848, -99.185338 ],
  [ 19.375503, -99.170348 ],
  [ 19.420835, -99.171935 ],
  [ 19.42655, -99.143591 ],
  [ 19.421538, -99.156275 ],
  [ 19.406941, -99.166815 ],
  [ 19.414037, -99.154622 ],
  [ 19.375347, -99.141065 ],
  [ 19.443986, -99.175678 ],
  [ 19.392022, -99.157402 ],
  [ 19.44452, -99.193577 ],
  [ 19.3905, -99.183607 ],
  [ 19.382428, -99.191841 ],
  [ 19.416696, -99.162177 ],
  [ 19.440563, -99.180221 ],
  [ 19.384079, -99.15002 ],
  [ 19.374091, -99.201857 ],
  [ 19.404699, -99.146429 ],
  [ 19.451209, -99.155651 ],
  [ 19.371823, -99.187336 ],
  [ 19.439923, -99.153684 ],
  [ 19.417759, -99.183258 ] ]

  console.log(randomPoints[6])
  const vendors = [{
    "Name": "La Roma",
    "category": "tortas",
    "location": {
      "type":"Point",
      "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
      "body": "Loved it. So Cheap. Would come back.",
      "ObjectId": "5abafb70fc13ae5fce000654",
      }]
    },{
    "Name": "La Condesa",
    "category": "tacos",
    "location": {
    "type":"Point",
    "coordinates":[19.409865, -99.169137],
    },
    "Picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/01_Tacos_al_Pastor.jpg/1280px-01_Tacos_al_Pastor.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000655",
    }]
    },  {
    "Name": "La Roma",
    "category": "tacos",
    "location": {
    "type":"Point",
    "coordinates":[19.417136, -99.166036],
    },
    "Picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/01_Tacos_al_Pastor.jpg/1280px-01_Tacos_al_Pastor.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000656",
    }]
    },{
    "Name": "La Roma",
    "category": "mariscos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/08/brochetasdemariscos.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000657",
    }]
    },  {
    "Name": "La Roma",
    "category": "barbacoa",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000658",
    }]
    },  {
    "Name": "La Roma",
    "category": "carnitas",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://www.recipetineats.com/wp-content/uploads/2014/07/Pork-Carnitas_square_1200px-landscape-680x580.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000659",
    }]
    },  {
    "Name": "La Roma",
    "category": "tacos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/01_Tacos_al_Pastor.jpg/1280px-01_Tacos_al_Pastor.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00065a",
    }]
    },  {
    "Name": "La Roma",
    "category": "mariscos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/08/brochetasdemariscos.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00065b",
    }]
    },  {
    "Name": "La Roma",
    "category": "carnitas",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://www.recipetineats.com/wp-content/uploads/2014/07/Pork-Carnitas_square_1200px-landscape-680x580.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00065c",
    }]
    },  {
    "Name": "La Roma",
    "category": "antojitos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00065d",
    }]
    },  {
    "Name": "La Roma",
    "category": "tacos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/01_Tacos_al_Pastor.jpg/1280px-01_Tacos_al_Pastor.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00065e",
    }]
    },{
    "Name": "La Roma",
    "category": "chilaquiles",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00065f",
    }]
    },{
    "Name": "La Roma",
    "category": "antojitos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000660",
    }]
    },{
    "Name": "La Roma",
    "category": "mariscos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/08/brochetasdemariscos.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000661",
    }]
    },{
    "Name": "La Roma",
    "category": "barbacoa",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000662",
    }]
    },{
    "Name": "La Roma",
    "category": "tortas",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000663",
    }]
    },{
    "Name": "La Roma",
    "category": "tacos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/01_Tacos_al_Pastor.jpg/1280px-01_Tacos_al_Pastor.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000664",
    }]
    },{
    "Name": "La Roma",
    "category": "carnitas",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://www.recipetineats.com/wp-content/uploads/2014/07/Pork-Carnitas_square_1200px-landscape-680x580.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000665",
    }]
    },{
    "Name": "La Roma",
    "category": "tortas",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000666",
    }]
    },{
    "Name": "La Roma",
    "category": "barbacoa",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000667",
    }]
    },{
    "Name": "La Roma",
    "category": "chilaquiles",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000668",
    }]
    },{
    "Name": "La Roma",
    "category": "mariscos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/08/brochetasdemariscos.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000669",
    }]
    },{
    "Name": "La Roma",
    "category": "tacos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/01_Tacos_al_Pastor.jpg/1280px-01_Tacos_al_Pastor.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00066a",
    }]
    },{
    "Name": "La Roma",
    "category": "antojitos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00066b",
    }]
    },{
    "Name": "La Roma",
    "category": "tortas",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00066c",
    }]
    },{
    "Name": "La Roma",
    "category": "barbacoa",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00066d",
    }]
    },{
    "Name": "La Roma",
    "category": "carnitas",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://www.recipetineats.com/wp-content/uploads/2014/07/Pork-Carnitas_square_1200px-landscape-680x580.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00066e",
    }]
    },{
    "Name": "La Roma",
    "category": "chilaquiles",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00066f",
    }]
    },{
    "Name": "La Roma",
    "category": "mariscos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/08/brochetasdemariscos.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000670",
    }]
    },{
    "Name": "La Roma",
    "category": "barbacoa",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000671",
    }]
    },{
    "Name": "La Roma",
    "category": "tortas",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000672",
    }]
    },{
    "Name": "La Roma",
    "category": "tacos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/01_Tacos_al_Pastor.jpg/1280px-01_Tacos_al_Pastor.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000673",
    }]
    },{
    "Name": "La Roma",
    "category": "antojitos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000674",
    }]
    },{
    "Name": "La Roma",
    "category": "tortas",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000675",
    }]
    },{
    "Name": "La Roma",
    "category": "mariscos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/08/brochetasdemariscos.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000676",
    }]
    },{
    "Name": "La Roma",
    "category": "chilaquiles",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000677",
    }]
    },{
    "Name": "La Roma",
    "category": "antojitos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000678",
    }]
    },{
    "Name": "La Roma",
    "category": "barbacoa",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000679",
    }]
    },{
    "Name": "La Roma",
    "category": "tortas",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00067a",
    }]
    },{
    "Name": "La Roma",
    "category": "carnitas",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://www.recipetineats.com/wp-content/uploads/2014/07/Pork-Carnitas_square_1200px-landscape-680x580.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00067b",
    }]
    },{
    "Name": "La Roma",
    "category": "barbacoa",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00067c",
    }]
    },{
    "Name": "La Roma",
    "category": "mariscos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/08/brochetasdemariscos.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00067d",
    }]
    },{
    "Name": "La Roma",
    "category": "tacos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/01_Tacos_al_Pastor.jpg/1280px-01_Tacos_al_Pastor.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00067e",
    }]
    },{
    "Name": "La Roma",
    "category": "chilaquiles",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00067f",
    }]
    },{
    "Name": "La Roma",
    "category": "antojitos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000680",
    }]
    },{
    "Name": "La Roma",
    "category": "mariscos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/08/brochetasdemariscos.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000681",
    }]
    },{
    "Name": "La Roma",
    "category": "tacos",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/01_Tacos_al_Pastor.jpg/1280px-01_Tacos_al_Pastor.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000682",
    }]
    },{
    "Name": "La Roma",
    "category": "tortas",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce00065a",
    }]
    },{
    "Name": "La Roma",
    "category": "tortas",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://images.food52.com/HhHNvfKzZDSQG5AEd3is0Azk4Wg=/753x502/bb6b6bc0-bbe7-4719-9afc-52e6971f0b57--steak_bean_torta2.JPG",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000683",
    }]
    },{
    "Name": "La Roma",
    "category": "carnitas",
    "location": {
    "type":"Point",
    "coordinates":[19.398024, -99.169533],
    },
    "Picture":"https://www.recipetineats.com/wp-content/uploads/2014/07/Pork-Carnitas_square_1200px-landscape-680x580.jpg",
    "Expenses": 1,
    "Review": [{
    "body": "Loved it. So Cheap. Would come back.",
    "ObjectId": "5abafb70fc13ae5fce000684",
    }]
    }
]
  console.log(vendors[6].location.coordinates)
  newVendors = vendors.map(vendor => {
    for (let i = 0; i < randomPoints.length; i++) {
      vendor.location.coordinates = randomPoints[i]
    }
    return vendor
  })
  console.log(vendors[0])
  return newVendors
};

rewriteVendor();

console.log(newVendors[0])
