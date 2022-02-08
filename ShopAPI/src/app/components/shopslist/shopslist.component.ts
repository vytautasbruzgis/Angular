import { Component, OnInit } from '@angular/core';
import Shop from 'src/app/models/shop.model';
import ShopItem from 'src/app/models/shopitem.model';
import { ShopitemComponent } from '../shopitem/shopitem.component';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shopslist',
  templateUrl: './shopslist.component.html',
  styleUrls: ['./shopslist.component.scss']
})
export class ShopslistComponent implements OnInit {

  public Title: string  = 'Shop list';

  public shops: Shop[] = [
    {
      Name : 'text1',
      ShopItems : [
        {
          ShopId : 1,
          ItemId : 1,
          Price : 0.5
        }
      ]
    },
    {
      Name : 'text2',
      ShopItems : []
    },
    {
      Name : 'text3',
      ShopItems : []
    }
  ]

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
      this.shopService.getAllShops().subscribe((shops) => {
        this.shops = shops;
      });
  }

}
