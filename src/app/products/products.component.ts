import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products=[
    {id:1, name: 'Casio vintage digital watch', price:'90,000', color: 'black', available: 'Available', image: 'https://m.media-amazon.com/images/I/61ybeKQto8L._UY445_.jpg'},
    {id:2, name: 'Apple MacBookPro', price:'150,000', color: 'grey', available: 'Available', image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481'},
    {id:3, name: 'Xiaomi UHD TV', price:'75,000', color: 'black', available: 'Not Available', image: 'https://www.tradeinn.com/f/13843/138437806/xiaomi-mi-tv-p1-43-uhd-led-tv.jpg'},
    {id:4, name: 'LG washing Machine 7kg', price:'100,000', color: 'black', available: 'Available', image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/washing-machine-new/y/l/y/7-55-fhv1207z4m-5-2100-60-56-lg-85-original-imaggawkhjhhktuw.jpeg?q=70'},
    {id:5, name: 'Apple Iphone-12Pro', price:'90,000', color: 'black', available: 'Not Available', image: 'https://ezone-electronics.online/wp-content/uploads/2020/12/71MHTD3uL4L._SL1500_.jpg'},
    {id:6, name: 'Samsung Refridgerator', price:'120,000', color: 'grey', available: 'Available', image: 'https://rukminim1.flixcart.com/image/416/416/kmgn0cw0/refrigerator-new/p/b/v/rs72a5fc1b4-tl-na-2021-samsung-original-imagfczkr2mf5qpm.jpeg?q=70'}
  ]
}
