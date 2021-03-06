/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');

// TODO: add secret to environment file
const { secret } = require('../../config/environment');

const Item = require('../../models/item');

const userIds = [
  '5be9860fcb16d525543ceda1'
];

const itemData =
  {
    // Created by Joe
    createdBy: userIds[1],
    itemName: 'Nike Air Force 1',
    imageUrl: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/bzzopsvmjq8cmrc2z4rr/air-force-1-big-kids-shoe-Pw8c4R.jpg',
    seller: 'Joe',
    catgories: ['shoes, nike, man, woman, white'],
    price: 80,
    uploadDate: 16/11/18,
    location: 'Aldgate East',
    size: '6',
    colour: 'white',
    //Users can comment on items
    comments: [
      {
        text: 'Nice Joe! I love these shoes!!',
        user: userIds[0]
      }
    ]
  };

let token

const itemId = '5bf6e31125ab69b642dc8626';


describe('Items EDIT', () => {

  beforeEach(done => {
    Item.remove({})
      .then(() => User.remove({}))
      .then(() => User.create({
        email: 'test',
        username: 'test',
        password: 'test'
      }))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
        done();
      });
  });

  it('should return a 404 response without a token', done => {
    api.post(`/api/items/${itemId}`)
      .end((err, res) => {
        expect(res.status).to.eq(404);
        done();
      });
  });

});
