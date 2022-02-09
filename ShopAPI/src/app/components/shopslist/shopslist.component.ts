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
      name : 'text1',
      shopItems : [
        {
          ShopId : 1,
          ItemId : 1,
          Price : 0.5
        }
      ]
    },
    {
      name : 'text2',
      shopItems : []
    },
    {
      name : 'text3',
      shopItems : []
    }
  ]

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
      this.shopService.getAllShops().subscribe((shops) => {
        this.shops = shops;
      });
  }

}
