# goals101_project

## Getting started

1. After cloning the project please use following commands
   --> cd .\goals101_project\
2. Now Install npm packages with --force, or --legacy-peer-deps
   --> npm i --legacy-peer-deps
3. Now run the project using npm start
   --> npm start

## Description

1. Used swiper slider for the coupons cards, and its fully responsive to mobile, tablet, desktop, large desktop/TV
2. Used SVG icons instead of importing a fulle library of icon fonts.
3. Enter URL /offers/<some_user_id>
4. Each coupon card have its own <coupon_id>
5. On click of the "claim offer" button, user data with <some_user_id> and applied coupons <coupon_id> in each <coupon_category>, is stored in local storage as below format:
   ```json
   {
       claimedOffers: {
       "userId": <some_user_id>,
       "offersList": [
           {
               category: <coupon_category>,
               list: [<coupon_id>,<coupon_id>,....]
           }
       ]
       }
   }
   ```

## Authors and acknowledgment

NITIN SINGH

## License

None
